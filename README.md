Vamshi Sunnam - Personal Portfolio
A top-tier, animated, and fully responsive personal portfolio website built to showcase my skills, experience, and projects as a Data Engineer.

Features 📋
Sleek, Modern Design: A clean and professional layout designed to impress.

Fully Responsive: Looks great on all devices, from mobile phones to desktops.

Dynamic Animations: Smooth, scroll-based fade animations and a typing effect in the hero section to engage visitors.

Easily Customizable: All personal data (experience, projects, skills) is managed in a single JavaScript object for easy updates.

Interactive Timeline: A visually appealing timeline to showcase work experience.

Valid & Semantic HTML5: Clean, well-structured, and SEO-friendly code.

Getting Started 🚀
Follow these instructions to get a copy of the project up and running on your local machine for development and customization.

1. Installation
First, clone the repository to your local machine:

git clone https://github.com/<your-github-username>/<your-repository-name>.git

Next, navigate into the project directory:

cd <your-repository-name>

Open the folder in your favorite code editor (like VS Code) to start customizing. I recommend using the Live Server extension in VS Code to preview your changes in real-time.

2. Customization
This portfolio is designed to be easily customized. All your personal information is located in the portfolioData object at the top of the script.js file.

Open script.js:

Update the experience array with your work history.

Update the projects array with your personal projects.

Update the skills object with your technical skills, grouped by category.

Update Profile Picture:

In index.html, find the <img> tag inside the "About Me" section.

Replace the https://placehold.co/... URL with a link to your own profile picture.

Update Social Links:

In index.html, find the "Contact" section and update the href attributes for the social links (GitHub, LinkedIn, Email).

Deployment 📦
The easiest and fastest way to deploy this website is by using GitHub Pages.

Create a Repository:

Create a new public repository on GitHub with the name: <your-github-username>.github.io.

Push Your Code:

Push your customized project files (index.html, style.css, script.js) to the main branch of your new repository.

git init
git add .
git commit -m "Deploy portfolio"
git remote add origin https://github.com/<your-github-username>/<your-github-username>.github.io.git
git push -u origin main

Enable GitHub Pages:

Go to your repository's Settings tab.

Navigate to the Pages section.

Under "Build and deployment," select the source as Deploy from a branch.

Choose the main branch and / (root) folder, then click Save.

Your website will be live at https://<your-github-username>.github.io in a few minutes!

Tools Used 🛠️
HTML5

Tailwind CSS - For styling and layout.

JavaScript - For interactivity and dynamic content.

AOS (Animate On Scroll) - For scroll-triggered animations.

Typed.js - For the typing animation effect.

Font Awesome - For icons.
