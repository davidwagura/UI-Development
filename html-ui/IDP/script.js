const { createApp } = Vue;

createApp({

    data() {

        return {

            showModal: false,

            selectedGoal: 0,

            newGoalTitle: "",

            newGoalMetrics: "",

            newGoalDescription: "",

            goals: [

                {
                    id: 1,
                    title: "IDP 001",
                    about: "Career Development",
                    metrics: `<p>
                        I'm planning to take part-time classes in search engine optimization (SEO), 
                        social media marketing, and email marketing to help me in my marketing strategies in the company.
                    </p>`,
                    description: "Take part-time classes in Marketing",
                    status: "Completed",
                    created: '12/08/2023'
                },

                {
                    id: 2,
                    title: "IDP 002",
                    about: "Skill Enhancement",
                    metrics: `<p>
                        One of my primary goals for this year is to improve customer engagement metrics, 
                        particularly by enhancing the way we interact with clients across various touchpoints. 
                        I'll be reviewing our current client outreach programs and finding areas where we can 
                        increase engagement and satisfaction.
                    </p>`,
                    description: "Improve our client base through social media",
                    status: "In Progress",
                    created: '08/08/2024'
                },

                {
                    id: 3,
                    title: "IDP 003",
                    about: "Personal Growth",
                    metrics: `<p>
                        I am focused on optimizing the company workflows by identifying inefficiencies and proposing 
                        streamlined solutions that will enhance productivity. This includes analyzing the workflow 
                        process, identifying bottlenecks, and implementing tools or practices that can save time 
                        and effort for the entire team.
                    </p>`,
                    description: "Optimizing company workflows",
                    status: "Completed",
                    created: '03/08/2024'
                },

                {
                    id: 4,
                    title: "IDP 004",
                    about: "Custom Goal",
                    metrics: `<p>
                        My goal is to develop and showcase improved company workflows. This will be achieved by 
                        implementing process improvements based on feedback from key stakeholders and conducting 
                        internal audits to ensure smooth operations across all departments.
                    </p>`,
                    description: "Develop improved company workflows",
                    status: "Completed",
                    created: '12/02/2024'
                },

                {
                    id: 5,
                    title: "IDP 005",
                    about: "Custom Goal",
                    metrics: `<p>
                        My objective is to place a strong focus on enhancing our company's workflow processes by 
                        identifying opportunities for automation and more effective communication across teams. 
                        The goal is to foster a collaborative environment where everyone can contribute to 
                        improving operational efficiency.
                    </p>`,
                    description: "Enhance workflow processes and focus on cost reduction",
                    status: "Completed",
                    created: '04/02/2024'
                },

                {
                    id: 6,
                    title: "IDP 006",
                    about: "Custom Goal",
                    metrics: `<p>
                        I will focus on showcasing the improvements made to the company’s workflows by presenting 
                        them to the leadership team and collecting their feedback. These improvements aim to 
                        enhance cross-departmental collaboration and reduce project timelines.
                    </p>`,
                    description: "Showcase workflow improvements and cost-saving measures",
                    status: "Completed",
                    created: '05/02/2024'
                }
            ],

            activeTab: 0,

            tabs: [

                { label: 'Mid Year' },
                { label: 'End Year' },

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
