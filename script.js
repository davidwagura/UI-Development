
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
                    title: "Business Goal 001",
                    metrics: `<ul>
                                        <li>Engage Customers on social media Customers on social media</li>
                                        <li>Boost google adverts Engage Customers on social media</li>
                                        <li>Engage Customers on social media</li>
                                        <li>Boost google adverts Engage Customers on social media</li>
                                        <li>Boost google adverts Engage Customers on social media</li>
                                        <li>Engage Customers on social media</li>
                                        <li>Boost google adverts Engage Customers on social media</li>
                                    </ul>`,
                    description: "1. Grow business revenue",
                    status: "Not Started"
                },

                {
                    id: 2,
                    title: "Business Goal 002",
                    metrics: `<ul class="list-disc pl-4 space-y-2 text-sm">
                                        <li>Improve customer engagement metrics</li>
                                        <li>Increase social media outreach by 50%</li>
                                    </ul>`,
                    description: "2. Improve our client base",
                    status: "In Progress"
                },

                {
                    id: 3,
                    title: "Business Goal 003",
                    metrics: `<ul class="list-disc pl-4 space-y-2 text-sm">
                                        <li>Optimize company workflows</li>
                                        <li>Reduce overhead costs by 10%</li>
                                    </ul>`,
                    description: "3. Optimizing company workflows",
                    status: "Completed"
                },

                {
                    id: 4,
                    title: "Business Goal 004",
                    metrics: `<ul class="list-disc pl-4 space-y-2 text-sm">
                                        <li>Show company workflows</li>
                                        <li>Introduce overhead costs by 10%</li>
                                    </ul>`,
                    description: "4. Custom Goal",
                    status: "Completed"
                },

                {
                    id: 5,
                    title: "Business Goal 005",
                    metrics: `<ul class="list-disc pl-4 space-y-2 text-sm">
                                        <li>Place company workflows</li>
                                        <li>Place overhead costs by 10%</li>
                                    </ul>`,
                    description: "5. Custom Goal",
                    status: "Completed"
                },

                {
                    id: 6,
                    title: "Business Goal 006",
                    metrics: `<ul class="list-disc pl-4 space-y-2 text-sm">
                                        <li>Show company workflows</li>
                                        <li>Show overhead costs by 10%</li>
                                    </ul>`,
                    description: "6. Custom Goal",
                    status: "Completed"
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

        },

        initializeQuillEditor() {
            const quill = new Quill('#editor', {
                theme: 'snow',
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline'],
                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                        ['link']
                    ]
                }
                
            });

            this.quillMetric = new Quill('#editor-metric1', {
                theme: 'snow',
                modules: {
                    toolbar: [['bold', 'italic', 'underline'], [{ list: 'ordered' }, { list: 'bullet' }], ['link']],
                },
            });

            this.quillMetric = new Quill('#editor-metric2', {
                theme: 'snow',
                modules: {
                    toolbar: [['bold', 'italic', 'underline'], [{ list: 'ordered' }, { list: 'bullet' }], ['link']],
                },
            });

            this.quillMetric = new Quill('#editor-container', {
                theme: 'snow',
                modules: {
                    toolbar: [['bold', 'italic', 'underline'], [{ list: 'ordered' }, { list: 'bullet' }], ['link']],
                },
            });

            this.quillMetric = new Quill('#editor-container2', {
                theme: 'snow',
                modules: {
                    toolbar: [['bold', 'italic', 'underline'], [{ list: 'ordered' }, { list: 'bullet' }], ['link']],
                },
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