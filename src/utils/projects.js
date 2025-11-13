(function() {
    // Define which views are switchable
    const views = ['about', 'skills', 'projects'];

    // --- REAL PROJECT DATA ---
    const REAL_PROJECT_DATA = [
        {
            id: 1,
            title: "Real-Time Cryptocurrency Market Data ETL",
            subtitle: "Data Engineering, Python, Apache Kafka, PostgreSQL, Docker",
            description: "Developed a resilient, end-to-end data pipeline to ingest and process real-time cryptocurrency trade data. Used <strong>Python</strong> to scrape exchange APIs and published the raw data stream to <strong>Apache Kafka</strong>. A second service consumed the stream, performed minor transformations (normalization, schema validation), and loaded the clean data into a <strong>PostgreSQL</strong> data warehouse.",
            impact: "Achieved data latency of less than 5 seconds from source to database. Containerized the entire stack using <strong>Docker</strong> for easy deployment and management.",
            githubUrl: "https://github.com/your-username/crypto-etl",
            liveDemoUrl: null,
        },
        {
            id: 2,
            title: "E-Commerce Sales Prediction Dashboard",
            subtitle: "Software Development, React, Node.js, Pandas, Machine Learning",
            description: "Built a full-stack application to visualize and predict future sales trends for a mock e-commerce store. The backend used <strong>Node.js</strong> to serve data that was pre-processed using a simple Linear Regression model built with <strong>Python Pandas</strong> and Scikit-learn. The frontend was a responsive dashboard built with <strong>React</strong>.",
            impact: "Developed proficiency in integrating Python analysis scripts with web APIs and implemented basic token-based authentication.",
            githubUrl: "https://github.com/your-username/ecommerce-dashboard",
            liveDemoUrl: "https://your-live-demo.netlify.app",
        },
        {
            id: 3,
            title: "AWS S3 Log Processing Infrastructure",
            subtitle: "Cloud Engineering, AWS, Terraform, Lambda, S3",
            description: "Designed and deployed a cost-effective, serverless infrastructure on AWS to handle incoming application logs. Used <strong>Terraform</strong> to define the entire architecture: an S3 bucket for storage, a Lambda function (written in Python) triggered by new files, and an SQS queue for error handling.",
            impact: "Demonstrated understanding of Infrastructure as Code (IaC) and the serverless paradigm, resulting in minimal operational cost and high scalability.",
            githubUrl: "https://github.com/your-username/aws-iac-logs",
            liveDemoUrl: null,
        },
    ];

    /**
     * Creates the HTML string for a single project card.
     */
    function createProjectCard(project) {
        const liveDemoLink = project.liveDemoUrl ? `
            <a href="${project.liveDemoUrl}" target="_blank" class="text-blue-600 project-link font-medium">
                Live Demo &rarr;
            </a>
        ` : '';

        
        const viewDetailsButton = `
            <button onclick="navigate('projects')" 
                class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition duration-150 view-projects mt-2">
                View
            </button>
        `;

        return `
            <div class="section-card">
                <h3 class="text-2xl font-bold text-blue-600 mb-2">${project.id}. ${project.title}</h3>
                <p class="text-gray-500 mb-4 font-medium">${project.subtitle}</p>
                
                <div class="flex space-x-4 mt-4">
                    <a href="${project.githubUrl}" target="_blank" class="text-blue-600 project-link font-medium">
                        View Code (GitHub) &rarr;
                    </a>
                    ${liveDemoLink}
                    ${viewDetailsButton}
                </div>
            </div>
        `;
    }

    /**
     * Load projects into DOM
     */
    async function loadProjectsToDOM() {
        const container = document.getElementById('projects-container');
        if (!container) return; 

        container.innerHTML = ''; 

        REAL_PROJECT_DATA.forEach(project => {
            const projectHTML = createProjectCard(project);
            container.insertAdjacentHTML('beforeend', projectHTML);
        });
    }

    /**
     * Navigation handler
     */
    window.navigate = function(targetViewId) {
        views.forEach(viewId => {
            const section = document.getElementById(viewId);
            if (section) {
                if (viewId === targetViewId) {
                    section.classList.remove('hidden');
                    if (viewId === 'projects') {
                        loadProjectsToDOM();
                    }
                } else {
                    section.classList.add('hidden');
                }
            }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('text-blue-600', 'font-bold');
            link.classList.add('text-gray-600', 'font-medium');
        });
        
        const activeLink = document.getElementById(`nav-${targetViewId}`);
        if (activeLink) {
            activeLink.classList.remove('text-gray-600', 'font-medium');
            activeLink.classList.add('text-blue-600', 'font-bold');
        }

        if (targetViewId === 'hero') {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('text-blue-600', 'font-bold');
                link.classList.add('text-gray-600', 'font-medium');
            });
            navigate('projects');
        }
    }

    // Initial load
    window.onload = function() {
        navigate('projects'); 
    };

})();
