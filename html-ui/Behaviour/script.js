
const { createApp } = Vue;

createApp({

    data() {

        return {

            behaviorElements: [
                {
                  id: 1,
                  title: "Fostering Safety at the Workplace",
                  details: "Promoting a culture of safety by living the values that encourage a safe working environment. This includes getting informed about and adhering to all safety requirements, ensuring compliance with safety protocols during daily activities, and conducting regular safety audits and observation tours to identify and mitigate risks. Employees are expected to make suggestions for improving safety, report any unsafe acts or conditions immediately, and actively participate in external safety audits and safety culture surveys. Additionally, taking part in safety committees, encouraging colleagues to follow safety rules, and undergoing medical surveillance tests to ensure the health and safety of the workforce are also critical responsibilities."
                },
                {
                  id: 2,
                  title: "Protecting the Environment",
                  details: "Being committed to environmental protection by complying with corporate environmental standards and regulatory requirements. This includes reducing wastage by optimizing the use of resources such as water, energy, and raw materials, and recycling wherever possible. Participation in Corporate Social Responsibility (CSR) activities, with a minimum of 16 hours annually, is encouraged to contribute to community environmental projects. Employees are also expected to complete sustainability training on time, focusing on reducing their carbon footprint and promoting eco-friendly practices in both personal and professional life."
                },
                {
                  id: 3,
                  title: "Innovation and Business Solutions",
                  details: "Fostering innovation by proactively making suggestions for improving processes and providing business solutions that enhance efficiency. This includes participating in continuous improvement programs, such as Kaizen activities, to identify opportunities for incremental improvements. Staying informed on industry standards and market trends is essential for driving innovation. Employees should also utilize available learning management systems and development tools to stay up-to-date with new skills and technologies. Leveraging cross-functional collaboration is key to ensuring the best possible business solutions."
                },
                {
                  id: 4,
                  title: "Valuing Inclusivity & Diversity",
                  details: "Ensuring a workplace that values inclusivity and diversity by fostering collaboration with diverse teams and promoting an environment where all voices are heard and respected. Participation in diversity training and consultations on inclusive practices is encouraged, as well as engagement with employee resource groups or initiatives that focus on diversity. Encouraging open dialogue and understanding different cultural perspectives are key aspects of this behavior. Employees are also encouraged to mentor colleagues from underrepresented groups and contribute to a culture of equity and inclusion within the organization."
                },
                {
                  id: 5,
                  title: "Accountability & Responsibility",
                  details: "Demonstrating accountability by taking ownership of tasks and responsibilities, ensuring that work is completed on time and to the highest quality. Employees are expected to provide accurate and timely reports, follow through on commitments, and address issues transparently. This includes being accountable not only for individual performance but also for the team's success, helping to troubleshoot problems, and seeking help when necessary. Taking responsibility for mistakes, learning from them, and making the necessary improvements is a key part of fostering a culture of accountability."
                },
                {
                  id: 6,
                  title: "Customer Focus & Service Excellence",
                  details: "Placing the customer at the center of all decisions by actively listening to their needs and providing solutions that exceed expectations. This includes maintaining a high level of service quality, responding to inquiries promptly, and ensuring that customer issues are resolved efficiently. Employees should seek feedback from customers regularly and use this information to improve products and services. Delivering value and maintaining long-term relationships with customers is key to ensuring their continued loyalty and satisfaction."
                }
              ],
                          
            activeTab: 0,

            tabs: [

                { label: 'Mid Year' },
                { label: 'End Year' },
                { label: 'Ratings' },

            ],

        };

    },

    mounted() {

        this.initializeQuillEditor();

    },


    methods: {

        selectGoal(index) {

            this.selectedGoal = index;

        },

        setActiveTab(index) {

            this.activeTab = index;
            this.$nextTick(() => {
                this.initializeQuillEditor(); // Reinitialize editor when returning to the relevant tab
            });

        },

        initializeQuillEditor() {
            this.$nextTick(() => { // Ensure the DOM is updated before initializing
                const editorContainer = document.querySelector('.quill-editor'); // Target correct element
                if (editorContainer) {
                    if (this.quillInstance) {
                        this.quillInstance = null; // Destroy previous instance
                        editorContainer.innerHTML = ''; // Clear editor container
                    }
                    this.quillInstance = new Quill(editorContainer, {
                        theme: 'snow',
                        modules: {
                            toolbar: [
                                ['bold', 'italic', 'underline'],
                                [{'list': 'ordered'}, {'list': 'bullet'}],
                                ['link']
                            ]
                        }
                    }); // Load selected goal metrics
                }
            });
        },
            submitGoal() {
            // Collect the data from Quill editors
            const newMetrics = this.quillMetric.root.innerHTML;
            const newDescription = this.quill.root.innerHTML;

            // Push the new goal to the goals array
            this.goals.push({
                id: this.goals.length + 1,
                title: this.newGoalTitle,
                metrics: newMetrics,
                description: newDescription,
                status: "Not Started",
            });

            // Reset the input fields
            this.newGoalTitle = "";
            this.quill.setText('');
            this.quillMetric.setText('');

            // Close the modal
            this.showModal = false;
        },    
    },

}).mount('#app');