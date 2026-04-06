document.addEventListener('DOMContentLoaded', function () {
    // --- PORTFOLIO DATA ---
    const portfolioData = {
        experience: [
            {
                role: 'Senior Data Scientist',
                company: 'Giant Eagle, Inc.',
                date: 'Aug 2024 – Present',
                points: [
                    'Built and deployed scalable end-to-end machine learning pipelines in Databricks, enabling personalized marketing and data-driven decision-making across large-scale customer datasets.',
                    'Developed and deployed CLV and churn prediction models using XGBoost, LightGBM, and Random Forest, driving a 15% increase in customer lifetime value and an 18% improvement in retention targeting.',
                    'Designed and automated ETL workflows with Apache Airflow to integrate data from POS systems, marketing platforms, and external APIs, improving data freshness and pipeline reliability by 25%.',
                    'Optimized Snowflake data warehouse performance by tuning SQL queries and resource utilization, reducing dashboard latency by 30% and enabling faster business insights.',
                    'Implemented monitoring and performance tracking for deployed models to ensure stability, accuracy, and continuous improvement.',
                    'Led the design and analysis of A/B experiments (Bayesian and frequentist) to optimize marketing campaigns, resulting in improved engagement and conversion rates.'
                ]
            },
            {
                role: 'Data Systems Analyst',
                company: 'Independent Consultant',
                date: 'Jun 2023 – May 2024',
                points: [
                    'Designed and implemented a distributed data collection platform to ingest high-frequency IoT sensor data from 50+ edge devices, enabling real-time monitoring and analytics.',
                    'Built Python-based automation and monitoring solutions to improve system reliability and maintain 99.9% uptime across distributed environments.',
                    'Developed real-time dashboards using Python, SQL, and Grafana to track system performance, detect anomalies, and support operational decision-making.',
                    'Optimized data ingestion pipelines and network protocols (TCP/IP, MQTT), reducing system latency by 20% and improving data transfer efficiency.'
                ]
            },
            {
                role: 'Data Scientist & BI Engineer',
                company: 'HighRadius',
                date: 'Jan 2021 – Dec 2022',
                points: [
                    'Developed and deployed machine learning models for order-to-cash optimization, achieving 92% accuracy in blocked-order forecasting and improving financial operations efficiency.',
                    'Built and maintained ETL pipelines using SQL and Alteryx to integrate data from Oracle, SAP, and NetSuite, reducing reporting turnaround time by 30%.',
                    'Designed and delivered Tableau dashboards for key financial metrics (DSO, CEI), automating reporting workflows and saving 10+ hours per week.',
                    'Built predictive models in Python for sales forecasting, cash flow analysis, and credit risk assessment, enabling more accurate financial planning.'
                ]
            }
        ],
        projects: [
            {
                title: 'Retail Sales Analytics Pipeline',
                description: 'An end-to-end data pipeline that ingests, cleans, and transforms retail transaction data into an analytics-ready Star Schema. Features automated ETL workflows and SQL-based business intelligence readiness.',
                tools: ['Python', 'SQL', 'Pandas', 'Star Schema', 'ETL'],
                url: 'https://github.com/VamshiSunnam/retail-data-pipeline'
            },
            {
                title: 'Real-time Sentiment Analysis Pipeline',
                description: 'Built a real-time sentiment analysis pipeline using Kafka and Spark Streaming, achieving 85% classification accuracy on social media data for brand monitoring.',
                tools: ['Kafka', 'Spark Streaming', 'Python', 'NLP'],
                url: 'https://github.com/VamshiSunnam/real-time-sentiment-analysis'
            },
            {
                title: 'Supply Chain Demand Forecaster',
                description: 'Developed a time-series forecasting model using Prophet to optimize inventory planning and reduce stock-outs by 12%.',
                tools: ['Python', 'Prophet', 'Time-Series', 'Forecasting'],
                url: 'https://github.com/VamshiSunnam/supply-chain-forecaster'
            },
            {
                title: 'Credit Card Fraud Detection',
                description: 'Developed a machine learning model to detect fraudulent credit card transactions with high accuracy, utilizing various classification algorithms and feature engineering techniques.',
                tools: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
                url: 'https://github.com/VamshiSunnam/Credit-Card-Fraud-Detection'
            },
            {
                title: 'Customer Churn Prediction',
                description: 'Built a predictive model to identify customers likely to churn. This project involved data preprocessing, exploratory data analysis, and model evaluation to help businesses retain customers.',
                tools: ['Python', 'TensorFlow', 'Keras', 'Seaborn'],
                url: 'https://github.com/VamshiSunnam/Customer-Churn-Prediction'
            },
            {
                title: 'Big Data Analysis with PySpark',
                description: 'Engineered a data processing pipeline using PySpark for large-scale data analysis. This project demonstrates skills in distributed computing and handling big data efficiently.',
                tools: ['Python', 'PySpark', 'SQL', 'Big Data'],
                url: 'https://github.com/VamshiSunnam/Big-Data-Analysis-with-PySpark'
            }
        ],
        skills: {
            "Programming & Scripting": ["Python (Pandas, NumPy, Scikit-learn, TensorFlow, Keras)", "SQL (PostgreSQL, MySQL, Snowflake)", "R", "Bash", "PySpark"],
            "Data Engineering & ETL": ["Apache Airflow", "Databricks", "Apache Kafka", "ETL/ELT", "Data Warehousing", "Batch & Real-Time Pipelines", "Spark Streaming"],
            "Cloud Platforms": ["AWS (S3, Redshift, EC2, Lambda, SageMaker, Glue, Kinesis)", "Azure (Databricks, ML Services)"],
            "Machine Learning & AI": ["Predictive Modeling", "Classification", "Regression", "NLP", "Time-Series Forecasting", "A/B Testing", "Recommendation Systems", "Feature Engineering"],
            "Databases & Storage": ["Snowflake", "PostgreSQL", "MySQL", "MongoDB", "Redshift"],
            "Business Intelligence & Visualization": ["Tableau", "Power BI", "Plotly", "Grafana"],
            "DevOps & MLOps": ["Docker", "Kubernetes", "CI/CD", "Git", "Model Monitoring"]
        }
    };

    // --- INITIALIZE ANIMATIONS ---
    AOS.init({
        duration: 800,
        once: true,
    });

    new Typed('#typing-animation', {
        strings: ['Data Science Solutions.', 'Scalable Data Pipelines.', 'Predictive Analytics.', 'Cloud-Based Insights.'],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true,
        smartBackspace: true,
    });

    // --- HEADER SCROLL EFFECT ---
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // --- MOBILE MENU TOGGLE ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });

    // --- DYNAMIC CONTENT RENDERING ---
    const experienceContainer = document.getElementById('experience-container');
    portfolioData.experience.forEach(exp => {
        const item = document.createElement('div');
        item.className = 'timeline-item relative pl-8 pb-10';
        item.innerHTML = `
            <h3 class="text-xl font-bold text-slate-800">${exp.role} @ <span class="text-blue-600">${exp.company}</span></h3>
            <p class="text-sm text-slate-500 mb-3">${exp.date}</p>
            <ul class="list-disc list-inside space-y-2 text-slate-600">
                ${exp.points.map(p => `<li>${p}</li>`).join('')}
            </ul>
        `;
        experienceContainer.appendChild(item);
    });

    const projectContainer = document.getElementById('project-container');
    portfolioData.projects.forEach(proj => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-aos', 'fade-up');
        card.innerHTML = `
            <div class="project-card-content">
                <div class="flex justify-between items-center mb-4">
                    <i class="far fa-folder-open text-3xl text-blue-500"></i>
                    <a href="${proj.url}" target="_blank" rel="noopener noreferrer" class="text-2xl text-slate-400 hover:text-blue-600 transition-colors">
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
                <h3 class="text-xl font-bold text-slate-800 mb-2">${proj.title}</h3>
                <p class="text-slate-600 flex-grow mb-4">${proj.description}</p>
                <div class="flex flex-wrap gap-2 text-sm text-slate-500">
                    ${proj.tools.map(tool => `<span>${tool}</span>`).join('')}
                </div>
            </div>
        `;
        projectContainer.appendChild(card);
    });

    const skillsContainer = document.getElementById('skills-container');
    for (const [category, skills] of Object.entries(portfolioData.skills)) {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'mb-8';
        categoryDiv.innerHTML = `
            <h3 class="skill-category-title">${category}</h3>
            <div class="flex flex-wrap gap-3">
                ${skills.map(skill => `<div class="skill-badge">${skill}</div>`).join('')}
            </div>
        `;
        skillsContainer.appendChild(categoryDiv);
    }
});
