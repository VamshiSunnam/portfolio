document.addEventListener('DOMContentLoaded', function () {
    // --- DATA ---
    const portfolioData = {
        experience: [
            {
                role: 'Data Engineer',
                company: 'Salient Global Technologies',
                date: 'Jan 2024 - Present',
                description: 'Designed and implemented scalable ETL pipelines using Apache Airflow, processing over 10TB+ of daily data and optimizing real-time workflows on AWS, Azure, and Snowflake.'
            },
            {
                role: 'Business Intelligence Analyst',
                company: 'High Radius',
                date: 'Jan 2021 - Dec 2022',
                description: 'Developed interactive dashboards using Tableau and Power BI to track financial KPIs, reducing reporting time by 30%. Built and optimized SQL-based data models from ERP systems.'
            }
        ],
        projects: [
            {
                title: 'Credit Card Fraud Detection',
                description: 'Developed a machine learning model to detect fraudulent credit card transactions with high accuracy.',
                tools: ['Python', 'Scikit-learn', 'Pandas'],
                url: 'https://github.com/VamshiSunnam/Credit-Card-Fraud-Detection'
            },
            {
                title: 'Customer Churn Prediction',
                description: 'Built a predictive model to identify customers likely to churn, involving data preprocessing and model evaluation.',
                tools: ['Python', 'TensorFlow', 'Keras'],
                url: 'https://github.com/VamshiSunnam/Customer-Churn-Prediction'
            },
            {
                title: 'Big Data Analysis with PySpark',
                description: 'Engineered a data processing pipeline using PySpark for large-scale data analysis and distributed computing.',
                tools: ['PySpark', 'SQL', 'Big Data'],
                url: 'https://github.com/VamshiSunnam/BigData-PySpark-Analysis'
            }
        ],
        skills: [
            'Python', 'Java', 'SQL', 'MySQL', 'MongoDB', 'Snowflake', 'AWS', 'Azure', 'GCP', 'Databricks', 'Power BI', 'Tableau', 'ETL', 'Airflow', 'Scikit-learn', 'TensorFlow'
        ]
    };

    // --- TYPING ANIMATION ---
    new Typed('#typing-animation', {
        strings: ['Data Engineer', 'BI Analyst', 'Cloud Specialist', 'Problem Solver'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        smartBackspace: true,
    });

    // --- RENDER DYNAMIC CONTENT ---
    const experienceContainer = document.getElementById('experience-container');
    portfolioData.experience.forEach(exp => {
        const expCard = document.createElement('div');
        expCard.className = 'experience-card';
        expCard.innerHTML = `
            <div class="flex justify-between items-center mb-2">
                <h3 class="text-xl font-bold">${exp.role}</h3>
                <p class="text-sm text-gray-500">${exp.date}</p>
            </div>
            <p class="font-semibold text-blue-600 mb-2">${exp.company}</p>
            <p class="text-gray-600">${exp.description}</p>
        `;
        experienceContainer.appendChild(expCard);
    });

    const projectContainer = document.getElementById('project-container');
    portfolioData.projects.forEach(proj => {
        const projCard = document.createElement('a');
        projCard.href = proj.url;
        projCard.target = '_blank';
        projCard.rel = 'noopener noreferrer';
        projCard.className = 'project-card';
        projCard.innerHTML = `
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2">${proj.title}</h3>
                <p class="text-gray-600 mb-4">${proj.description}</p>
                <div class="flex flex-wrap gap-2">
                    ${proj.tools.map(tool => `<span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-gray-200 text-gray-800">${tool}</span>`).join('')}
                </div>
            </div>
        `;
        projectContainer.appendChild(projCard);
    });

    const skillsContainer = document.getElementById('skills-container');
    portfolioData.skills.forEach(skill => {
        const skillBadge = document.createElement('div');
        skillBadge.className = 'skill-badge';
        skillBadge.textContent = skill;
        skillsContainer.appendChild(skillBadge);
    });
    
    // --- MOBILE MENU ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // --- HEADER SCROLL EFFECT ---
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('py-2');
            header.classList.remove('py-4');
        } else {
            header.classList.add('py-4');
            header.classList.remove('py-2');
        }
    });
});
