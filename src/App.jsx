// App.jsx
import React, { useState } from 'react';
import { ExternalLink, Github, Download, Mail, Phone, MapPin, Code, Server, Cloud, Award, BookOpen, Linkedin, Home } from 'lucide-react';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [expandedProjects, setExpandedProjects] = useState({});

  const projects = [
    {
      id: 1,
      title: "Cloud Infrastructure Automation",
      description: "Automated deployment of Azure cloud resources using Azure Bicep.",
      technologies: ["Azure", "Bicep"],
      github: "https://github.com/omiete01/vm-fleet-commander/blob/main/main.bicep",
      article: "https://omiete-projects.hashnode.dev/use-bicep-to-automate-and-deploy-azure-virtual-machines-and-associated-resources",
      image: "https://placehold.co/400x250/1f2937/10b981?text=Cloud+Automation",
      details: "This project involved creating virtual machines and its associated resources using Azure Bicep. The solution reduced deployment time by 80% and improved consistency across environments."
    },
    {
      id: 2,
      title: "Microservice Architecture with Observability and Monitoring",
      description: "Managed and optimized microservices for monitoring and observability.",
      technologies: ["Docker", "PostgresSQL", "Prometheus", "Grafana", "ELK Stack"],
      github: "https://github.com/omiete01/microservice",
//      article: "https://example.com/kubernetes-article",
      image: "https://placehold.co/400x250/1f2937/10b981?text=Microservice+Architecture",
      details: "Implemented and maintained production-grade microservice containers with auto-scaling, monitoring, and logging capabilities. Ensured logging, monitoring & observability for critical applications."
    }
//     {
//       id: 3,
//       title: "Serverless Data Processing",
//       description: "Built serverless data processing pipelines using AWS Lambda and Step Functions.",
//       technologies: ["AWS Lambda", "Step Functions", "S3"],
//       github: "https://github.com/example/serverless-processing",
//       article: "https://example.com/serverless-article",
//       image: "https://placehold.co/400x250/1f2937/10b981?text=Serverless+Data",
//       details: "Developed cost-effective serverless solutions for processing large-scale data workloads. The system handles over 100GB of data daily with automatic scaling and error handling."
//     },
//     {
//       id: 4,
//       title: "Multi-Cloud Monitoring Solution",
//       description: "Implemented comprehensive monitoring across AWS, Azure, and GCP environments.",
//       technologies: ["Prometheus", "Grafana", "CloudWatch"],
//       github: "https://github.com/example/monitoring",
//       article: "https://example.com/monitoring-article",
//       image: "https://placehold.co/400x250/1f2937/10b981?text=Monitoring",
//       details: "Designed and deployed a unified monitoring solution that provides real-time insights across multiple cloud providers. Reduced incident response time by 60% through proactive alerting and dashboard visualization."
//     }
  ];

  const articles = [
    {
      id: 1,
      title: "Use Bicep to Automate and Deploy Azure Virtual Machines and Associated Resources",
      description: "Upgrade from ARM Templates to Bicep for automating the deployment of Azure resources.",
      link: "https://omiete-projects.hashnode.dev/use-bicep-to-automate-and-deploy-azure-virtual-machines-and-associated-resources",
      date: "2025-07-12"
    },
    {
      id: 2,
      title: "Building a Simple Flask App with Docker and GitHub Actions: A Complete Guide",
      description: "Learn how to effectively containerize applications and push the docker image to DockerHub.",
      link: "https://omiete-projects.hashnode.dev/building-a-simple-flask-app-with-docker-and-github-actions-a-complete-guide",
      date: "2025-06-09"
    },
    {
      id: 3,
      title: "Deploy React App to Ubuntu Server: A Beginner's Guide",
      description: "A beginners guide to deploying a React App on AWS EC2.",
      link: "https://omiete-projects.hashnode.dev/deploy-react-app-to-ubuntu-server-a-beginners-guide",
      date: "2025-06-12"
    }
  ];

  const certificates = [
    { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", date: "2023" },
    { name: "Azure AI Fundamentals", issuer: "Microsoft", date: "2024" },
    { name: "Kubernetes Cloud Native Associate", issuer: "Cloud Native Computing Foundation", date: "2025" },
    { name: "Huawei Routing & Switching", issuer: "Huawei", date: "2020" },
    { name: "Google IT Support Professional", issuer: "Google", date: "2023" }
  ];

  const technicalSkills = [
    "Cloud Architecture", "Infrastructure as Code", "DevOps", "Security", "Monitoring/Observability", "Cost Optimization",
    "Containerization", "CI/CD Pipelines", "Logging", "PostgreSQL"
  ];

  const softSkills = [
    "Communication", "Problem Solving", "Team Collaboration", "Project Management", "Adaptability", "Critical Thinking"
  ];

  const techStack = [
    { name: "AWS", color: "bg-orange-500", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Azure", color: "bg-blue-500", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg" },
    { name: "GCP", color: "bg-green-500", icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" },
    { name: "Docker", color: "bg-blue-400", icon: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Docker_logo.svg" },
    { name: "Kubernetes", color: "bg-blue-600", icon: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" },
    { name: "Terraform", color: "bg-purple-600", icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/Terraform_Logo.svg" },
    { name: "Ansible", color: "bg-red-600", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Ansible_Logo.png" },
    { name: "Linux", color: "bg-yellow-500", icon: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg" },
    { name: "Jenkins", color: "bg-red-700", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg" },
    { name: "GitLab", color: "bg-orange-600", icon: "https://upload.wikimedia.org/wikipedia/commons/1/18/GitLab_Logo.svg" }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleProjectDetails = (projectId) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const ProjectCard = ({ project }) => (
    <div className="project-card">
      <div className="project-image-container">
        <img src={project.image} alt={project.title} className="project-image" />
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="tech-tags">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-actions">
          <button
            onClick={() => toggleProjectDetails(project.id)}
            className="btn-primary"
          >
            <ExternalLink size={16} />
            More
          </button>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={project.article}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <ExternalLink size={16} />
            Article
          </a>
        </div>
        {expandedProjects[project.id] && (
          <div className="project-details">
            <p>{project.details}</p>
          </div>
        )}
      </div>
    </div>
  );

  const ArticleItem = ({ article }) => (
    <div className="article-item">
      <div className="article-header">
        <h3 className="article-title">
          <a href={article.link} target="_blank" rel="noopener noreferrer">
            {article.title}
          </a>
        </h3>
        <span className="article-date">{article.date}</span>
      </div>
      <p className="article-description">{article.description}</p>
    </div>
  );

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">
            <span className="nav-title">CloudPortfolio</span>
          </div>
          <div className="nav-menu">
            <button onClick={scrollToTop} className="nav-link">
              <span>Home</span>
            </button>
            <button onClick={() => scrollToSection('about')} className="nav-link">
              <span>About</span>
            </button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">
              <span>Projects</span>
            </button>
            <button onClick={() => scrollToSection('skills')} className="nav-link">
              <span>Skills</span>
            </button>
            <button onClick={() => scrollToSection('certificates')} className="nav-link">
              <span>Certifications</span>
            </button>
            <button onClick={() => scrollToSection('articles')} className="nav-link">
              <span>Articles</span>
            </button>
          </div>
          <div className="nav-contact">
            <div className="tooltip-container">
              <a href="mailto:estheromiete01@gmail.com" className="contact-icon-link">
                <Mail className="contact-icon" size={20} />
              </a>
              <span className="tooltip">estheromiete01@gmail.com</span>
            </div>
            <div className="tooltip-container">
              <a href="tel:+1555" className="contact-icon-link">
                <Phone className="contact-icon" size={20} />
              </a>
              <span className="tooltip">+1 (555) 123-4567</span>
            </div>
            <div className="social-icons">
              <div className="tooltip-container">
                <a
                  href="https://github.com/omiete01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <Github size={20} />
                </a>
                <span className="tooltip">github.com/omiete01</span>
              </div>
              <div className="tooltip-container">
                <a
                  href="https://linkedin.com/in/esther-fyneface"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <Linkedin size={20} />
                </a>
                <span className="tooltip">linkedin.com/in/esther-fyneface</span>
              </div>
            </div>
            <a
              href="https://docs.google.com/document/d/1fkl_xlMjE-CWy6-P9ulXJ8VNXE1PIN2r/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary nav-resume-btn"
            >
              <Download size={16} />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Esther Fyneface</h1>
              <p className="hero-subtitle">Cloud Engineer & DevOps Specialist</p>
              <p className="hero-description">
                Passionate about building scalable, secure, and efficient cloud solutions.
                Automating DevOps pipelines and optimizing IT operations.
              </p>
            </div>
            <div className="hero-image">
              <div className="profile-circle">
                <img src="https://placehold.co/200x200/10b981/ffffff?text=JD" alt="Profile" className="profile-img" />
              </div>
            </div>
          </div>
        </section>

        {/* About Me */}
        <section id="about" className="section">
          <h2 className="section-title">
            <Code size={32} />
            About Me
          </h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a seasoned Cloud Engineer with over 3 years of experience in designing,
                implementing, and managing cloud infrastructure across multiple platforms.
                My expertise lies in creating scalable, secure, and cost-effective solutions
                that drive business growth and innovation.
              </p>
              <p>
                I specialize in AWS and Azure cloud environments with a strong focus on
                Infrastructure as Code, DevOps practices, and cloud security. My approach
                combines technical excellence with strategic thinking to deliver solutions
                that meet both current needs and future scalability requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section">
          <h2 className="section-title">
            <Cloud size={32} />
            Projects
          </h2>
          <div className="projects-grid">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="view-all-container">
            <a
              href="https://github.com/omiete01"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary view-all-btn"
            >
              <Github size={20} />
              View All Projects on GitHub
            </a>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section">
          <h2 className="section-title">
            <Server size={32} />
            Skills
          </h2>
          <div className="skills-content">
            <div className="skills-list">
              <h3 className="skills-subtitle">Technical Skills</h3>
              <div className="competencies">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="competency-item">
                    <div className="competency-dot"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="skills-list">
              <h3 className="skills-subtitle">Soft Skills</h3>
              <div className="competencies">
                {softSkills.map((skill, index) => (
                  <div key={index} className="competency-item">
                    <div className="competency-dot"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section id="tech-stack" className="section">
          <h2 className="section-title">
            <Code size={32} />
            Tech Stack
          </h2>
          <div className="tech-stack-icons">
            {techStack.map((tech, index) => (
              <div key={index} className="tech-icon-container">
                <div className="tech-icon-wrapper">
                  <img src={tech.icon} alt={tech.name} className="tech-icon" />
                </div>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Certificates */}
        <section id="certificates" className="section">
          <h2 className="section-title">
            <Award size={32} />
            Certifications
          </h2>
          <div className="certificates-grid">
            {certificates.map((cert, index) => (
              <div key={index} className="certificate-card">
                <h3 className="certificate-name">{cert.name}</h3>
                <p className="certificate-issuer">{cert.issuer}</p>
                <p className="certificate-date">{cert.date}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Articles */}
        <section id="articles" className="section">
          <h2 className="section-title">
            <BookOpen size={32} />
            Articles
          </h2>
          <div className="articles-list">
            {articles.map(article => (
              <ArticleItem key={article.id} article={article} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;