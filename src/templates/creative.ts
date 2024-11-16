import { UserData } from '../types';

export const creative = (data: UserData): string => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.name} - Portfolio</title>
    <style>
        :root {
            --primary: ${data.primaryColor};
            --secondary: ${data.secondaryColor};
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #1a1a1a;
            background-color: #000;
            overflow-x: hidden;
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 4rem 2rem;
        }

        header {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            padding: 4rem 2rem;
            background: radial-gradient(circle at center, var(--primary), var(--secondary));
        }

        .header-content {
            text-align: center;
            color: white;
            position: relative;
            z-index: 1;
        }

        h1 {
            font-size: 5rem;
            line-height: 1;
            margin-bottom: 1rem;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .title {
            font-size: 2rem;
            margin-bottom: 2rem;
            opacity: 0.9;
        }

        .bio {
            font-size: 1.25rem;
            max-width: 800px;
            margin: 0 auto 3rem;
            opacity: 0.8;
        }

        .social-links {
            display: flex;
            justify-content: center;
            gap: 1.5rem;
        }

        .social-link {
            color: white;
            text-decoration: none;
            padding: 1rem;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            transition: all 0.3s;
        }

        .social-link:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-4px) scale(1.1);
        }

        section {
            padding: 8rem 0;
            background: white;
        }

        section:nth-child(even) {
            background: #f9fafb;
        }

        h2 {
            font-size: 3rem;
            color: var(--primary);
            margin-bottom: 3rem;
            text-align: center;
            position: relative;
        }

        h2::after {
            content: '';
            position: absolute;
            bottom: -1rem;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 4px;
            background: var(--secondary);
            border-radius: 2px;
        }

        .skills {
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
            justify-content: center;
            padding: 0 2rem;
        }

        .skill {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
            padding: 1rem 2rem;
            border-radius: 3rem;
            font-size: 1.125rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: all 0.3s;
        }

        .skill:hover {
            transform: translateY(-4px) scale(1.05);
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }

        .projects {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 3rem;
            padding: 0 2rem;
        }

        .project {
            background: white;
            border-radius: 1.5rem;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: all 0.3s;
        }

        .project:hover {
            transform: translateY(-8px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        .project-content {
            padding: 2rem;
        }

        .project h3 {
            color: var(--primary);
            font-size: 1.75rem;
            margin-bottom: 1rem;
        }

        .project p {
            color: #4b5563;
            margin-bottom: 1.5rem;
            font-size: 1.125rem;
        }

        .project-link {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            color: white;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            text-decoration: none;
            padding: 0.75rem 1.5rem;
            border-radius: 2rem;
            font-weight: 500;
            transition: all 0.3s;
        }

        .project-link:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        footer {
            text-align: center;
            color: white;
            padding: 4rem 0;
            background: #000;
        }

        @media (max-width: 768px) {
            h1 {
                font-size: 3rem;
            }

            .title {
                font-size: 1.5rem;
            }

            .bio {
                font-size: 1.125rem;
            }

            .projects {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="header-content">
            <h1>${data.name}</h1>
            <div class="title">${data.title}</div>
            <p class="bio">${data.bio}</p>
            <div class="social-links">
                ${data.github ? `<a href="${data.github}" class="social-link" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                </a>` : ''}
                ${data.linkedin ? `<a href="${data.linkedin}" class="social-link" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                </a>` : ''}
                ${data.twitter ? `<a href="${data.twitter}" class="social-link" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                </a>` : ''}
                <a href="mailto:${data.email}" class="social-link">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                </a>
            </div>
        </div>
    </header>

    <section>
        <div class="container">
            <h2>Skills</h2>
            <div class="skills">
                ${data.skills.map(skill => `<span class="skill">${skill}</span>`).join('')}
            </div>
        </div>
    </section>

    <section>
        <div class="container">
            <h2>Projects</h2>
            <div class="projects">
                ${data.projects.map(project => `
                    <div class="project">
                        <div class="project-content">
                            <h3>${project.title}</h3>
                            <p>${project.description}</p>
                            ${project.link ? `
                                <a href="${project.link}" class="project-link" target="_blank" rel="noopener noreferrer">
                                    View Project
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                </a>
                            ` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    <footer>
        <p>© ${new Date().getFullYear()} ${data.name}. All rights reserved.</p>
    </footer>
</body>
</html>`;
};