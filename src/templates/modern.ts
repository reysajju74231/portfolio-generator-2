import { UserData } from '../types';

export const modern = (data: UserData): string => {
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
            background-color: #fafafa;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 4rem 2rem;
        }

        header {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
            margin-bottom: 6rem;
            position: relative;
        }

        @media (min-width: 768px) {
            header {
                grid-template-columns: 1fr 1fr;
                align-items: center;
            }
        }

        .header-content {
            position: relative;
            z-index: 1;
        }

        h1 {
            font-size: 3.5rem;
            line-height: 1.1;
            background: linear-gradient(to right, var(--primary), var(--secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 1rem;
        }

        .title {
            font-size: 1.5rem;
            color: #666;
            margin-bottom: 2rem;
        }

        .bio {
            font-size: 1.125rem;
            color: #444;
            margin-bottom: 2rem;
            max-width: 600px;
        }

        .social-links {
            display: flex;
            gap: 1rem;
        }

        .social-link {
            color: var(--primary);
            text-decoration: none;
            padding: 0.75rem;
            border-radius: 0.5rem;
            transition: all 0.2s;
            background-color: white;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .social-link:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .header-image {
            position: relative;
        }

        .header-image::before {
            content: '';
            position: absolute;
            top: -20px;
            right: -20px;
            width: 100%;
            height: 100%;
            background: var(--primary);
            border-radius: 1rem;
            z-index: 0;
        }

        .header-image::after {
            content: '';
            position: absolute;
            bottom: -20px;
            left: -20px;
            width: 100%;
            height: 100%;
            background: var(--secondary);
            border-radius: 1rem;
            z-index: 0;
        }

        section {
            margin-bottom: 6rem;
        }

        h2 {
            font-size: 2.5rem;
            color: var(--primary);
            margin-bottom: 2rem;
            text-align: center;
        }

        .skills {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            justify-content: center;
        }

        .skill {
            background-color: white;
            color: var(--primary);
            padding: 0.75rem 1.5rem;
            border-radius: 2rem;
            font-size: 1rem;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            transition: all 0.2s;
        }

        .skill:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .projects {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .project {
            background-color: white;
            border-radius: 1rem;
            padding: 2rem;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            transition: all 0.2s;
        }

        .project:hover {
            transform: translateY(-4px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .project h3 {
            color: var(--primary);
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }

        .project p {
            color: #4b5563;
            margin-bottom: 1.5rem;
        }

        .project-link {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--secondary);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.2s;
        }

        .project-link:hover {
            color: var(--primary);
        }

        footer {
            text-align: center;
            color: #6b7280;
            padding: 2rem 0;
            border-top: 1px solid #e5e7eb;
        }

        @media (max-width: 640px) {
            .container {
                padding: 2rem 1rem;
            }

            h1 {
                font-size: 2.5rem;
            }

            .projects {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
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
            <div class="header-image">
                <div style="width: 100%; padding-top: 100%; background: #f3f4f6; border-radius: 1rem; position: relative; z-index: 1;"></div>
            </div>
        </header>

        <section>
            <h2>Skills</h2>
            <div class="skills">
                ${data.skills.map(skill => `<span class="skill">${skill}</span>`).join('')}
            </div>
        </section>

        <section>
            <h2>Projects</h2>
            <div class="projects">
                ${data.projects.map(project => `
                    <div class="project">
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
                `).join('')}
            </div>
        </section>

        <footer>
            <p>© ${new Date().getFullYear()} ${data.name}. All rights reserved.</p>
        </footer>
    </div>
</body>
</html>`;
};