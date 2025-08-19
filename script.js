document.addEventListener('DOMContentLoaded', function () {
    // --- PORTFOLIO DATA ---
    const portfolioData = {
        experience: [
            {
                role: 'Data Engineer',
                company: 'Salient Global Technologies',
                date: 'Jan 2024 - Present',
                points: [
                    'Designed and implemented scalable ETL pipelines using Apache Airflow and Python, processing over 10TB+ of daily data.',
                    'Deployed and optimized real-time data workflows on AWS, Azure, Snowflake, and OpenStack, reducing network latency by 25%.',
                    'Automated data extraction and transformation using Linux shell scripting and Cisco APIs, saving 15 hours per week.',
                    'Managed and optimized SQL and NoSQL databases (MySQL, MongoDB), improving query performance by 30%.'
                ]
            },
            {
                role: 'Business Intelligence Analyst',
                company: 'High Radius',
                date: 'Jan 2021 - Dec 2022',
                points: [
                    'Developed interactive dashboards using Tableau and Power BI to track financial KPIs, reducing reporting time by 30%.',
                    'Built and optimized SQL-based data models from ERP systems (SAP, Oracle), improving process efficiency by 20%.',
                    'Applied predictive analytics using Python to forecast financial outcomes, reducing overdue payments by 15%.',
                ]
            }
        ],
        projects: [
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
                url: 'https://github.com/VamshiSunnam/BigData-PySpark-Analysis'
            }
        ],
        skills: {
            "Languages & Databases": ["Python", "Java", "SQL", "MySQL", "Oracle", "PostgreSQL", "MongoDB", "Snowflake"],
            "Cloud & Platforms": ["AWS", "Azure", "GCP", "Databricks", "OpenStack"],
            "Data Engineering & BI": ["ETL", "Apache Airflow", "Power BI", "Tableau", "Alteryx", "Excel"],
            "Machine Learning": ["Scikit-learn", "Keras", "TensorFlow", "AWS SageMaker"]
        }
    };

    // --- INITIALIZE ANIMATIONS ---
    AOS.init({
        duration: 800,
        once: true,
    });

    new Typed('#typing-animation', {
        strings: ['Data Platforms.', 'ETL Pipelines.', 'Cloud Analytics.', 'Actionable Insights.'],
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
