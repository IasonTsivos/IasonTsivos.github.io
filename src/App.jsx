import React, { useState, useEffect } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBookOpenReader,faFileDownload, faGlobe, faFile, faUser, faGraduationCap, faBriefcase, faProjectDiagram, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
library.add( faBookOpenReader, faUser, faGraduationCap, faBriefcase, faProjectDiagram, faEnvelope);

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS

    // Set sidebar default based on screen size
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsSidebarOpen(false); // Closed on mobile devices
      } else {
        setIsSidebarOpen(true); // Open on larger screens
      }
    };

    handleResize(); // Run on initial render
    window.addEventListener('resize', handleResize); // Update on resize

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="App">
      <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="main-content">
        <About />
        <Education />
        <Skills />
        <PreviousWork />
        <Projects />
        <Connect />
      </div>
    </div>
  );
}

const Header = ({ isSidebarOpen, toggleSidebar }) => (
  <header className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
    <button className="toggle-button" onClick={toggleSidebar}>
      {isSidebarOpen ? 'X' : '☰'}
    </button>
    <div className="header-content">
    {isSidebarOpen && (
        <img src="/tsivos-high-resolution-logo-white-transparent.png" className="profile-image" alt="Profile" />
      )}
      {isSidebarOpen && (
        <h1 className="logo">
          <span className="greeting">Hello, I'm</span>
          <br />
          Iason Tsivos
        </h1>
      )}
    </div>
    <nav className="nav">
        <ul className="nav-links">
          <li>
            <a href="#about">
              <span className="icon"><FontAwesomeIcon icon="user" /></span>
              {isSidebarOpen && <span className="text">About</span>}
            </a>
          </li>
          <li>
            <a href="#education">
              <span className="icon"><FontAwesomeIcon icon="graduation-cap" /></span>
              {isSidebarOpen && <span className="text">Education</span>}
            </a>
          </li>
          <li>
            <a href="#skills">
              <span className="icon"><FontAwesomeIcon icon="book-open-reader" /></span>
              {isSidebarOpen && <span className="text">Skills</span>}
            </a>
          </li>
          <li>
            <a href="#work">
              <span className="icon"><FontAwesomeIcon icon="briefcase" /></span>
              {isSidebarOpen && <span className="text">Work</span>}
            </a>
          </li>
          <li>
            <a href="#projects">
              <span className="icon"><FontAwesomeIcon icon="project-diagram" /></span>
              {isSidebarOpen && <span className="text">Projects</span>}
            </a>
          </li>
          <li>
            <a href="#contact">
              <span className="icon"><FontAwesomeIcon icon="envelope" /></span>
              {isSidebarOpen && <span className="text">Connect</span>}
            </a>
          </li>
        </ul>
      </nav>
  </header>
);


const About = () => (
  <section id="about" className="about" data-aos="fade-up">
    <div className="about-content">
      <h2>About Me</h2>
      <p>
        I'm Iason Tsivos, a Tech enthusiast with love for learning and growing in the IT space.
        I enjoy tackling challenging problems and learning new technologies to enhance my skills.
        My curiosity drives me to constantly explore emerging trends, from cloud computing to Coding,
        and I strive to integrate them into practical solutions.
      </p>
      <p>
        From working on Automating processes to creating VR environments, I’m driven by the belief
        that technology can solve real-world problems and transform the way we live and work.
      </p>
    </div>
  </section>
);

const Education = () => (
  <section id="education" className="education" data-aos="fade-up">
    <h2><FontAwesomeIcon icon="graduation-cap" /> Education</h2>
    <div className="education-content">
      <div className="education-item" style={{ display: 'flex', alignItems: 'center' }}>

        {/* Education Image with link to uniwa.gr */}
        <a href="https://ice.uniwa.gr/en/home/" target="_blank" rel="noopener noreferrer">
          <img
            src="/pada.png"
            alt="Education"
            className="education-image"
            style={{ width: '200px', height: '200px', marginRight: '10px' }}
          />
        </a>

        {/* Education Text */}
        <div className="education-text">
          <h3>Masters Degree in Informatics and Computer Engineering</h3>
          <p>University of Western Attica, 2023</p>
          <p>Specialized in Software Engineering and Cloud Computing.</p>
        </div>

        {/* Download Button */}
        <a
          href="/path/to/your-degree.pdf"  // Update with the actual path to your degree file
          download
          className="download-button"
          style={{ display: 'flex', alignItems: 'center', marginRight: '20px', textDecoration: 'none', color: '#333' }}
        >
          <FontAwesomeIcon icon={faFileDownload} style={{ fontSize: '24px', marginRight: '8px' }} />
        </a>
      </div>
    </div>
  </section>
);


const Skills = () => {
  const skillList = [
    { name: "C++", image: "/logos/c++.png" },
    { name: "Arduino", image: "/logos/arduino.png" },
    { name: "Python", image: "/logos/pyhton.png" },
    { name: "React", image: "/logos/react.png" },
    { name: "Android Studio", image: "/logos/android.png" },
  ];

  return (
    <section id="skills" className="skills-section" data-aos="fade-up">
      <h2><FontAwesomeIcon icon="book-open-reader" /> Skills</h2>
      <div className="skills-list">
        {skillList.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.image} alt={skill.name} className="skill-image" />
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const PreviousWork = () => {
  const companies = [
    {
      name: 'Company A',
      image: '/logos/image-removebg-preview (8).png',
      url: 'https://tempoevents.gr',
      role: 'Audiovisual Technician'
    },
    {
      name: 'Company B',
      image: '/logos/image-removebg-preview (10).png',
      url: 'https://avitron.gr',
      role: 'Equipment Transportation & Installation'
    },
    {
      name: 'Company C',
      image: '/logos/image-removebg-preview (13).png',
      url: 'https://projector-web.gr/gr/home',
      role: 'Live-Stream Operator'
    },
    {
      name: 'Company D',
      image: '/logos/image-removebg-preview (9).png',
      url: 'https://www.utg-greece.com',
      role: 'LED Screen Technician'
    },
    {
      name: 'Company E',
      image: '/logos/image-removebg-preview (14).png',
      url: 'https://www.podimatas.gr',
      role: 'Conference Organization Assistant'
    },
  ];

  return (
    <section id="work" className="work-section" data-aos="fade-up">
      <h2><FontAwesomeIcon icon="briefcase" /> Previous Work</h2>
      <p className="work-description">
        Here are some of the amazing companies I have had the pleasure of working with,
        each offering unique opportunities to grow and make impactful contributions.
      </p>
      <div className="work-logos">
        {companies.map((company, index) => (
          <div className="company-wrapper" key={index}>
            <a href={company.url} target="_blank" rel="noopener noreferrer" className="company-link">
              <img src={company.image} alt={company.name} className="company-logo" />
              <div className="tooltip">
                {company.role}
                <div className="tooltip-arrow"></div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectData = [
    {
      title: "Application of IOT Technology and Cloud Computing for the Automation of Olive Oil Production Processes",
      description: "This project aims to demonstrate how IOT and Cloud technologies can be combined to improve the Olive Oil production processes and achieve quality and reliability.",
      image: "/oil1.JPG",
      link: "https://polynoe.lib.uniwa.gr/xmlui/handle/11400/6238?locale-attribute=en",
      link2: "https://polynoe.lib.uniwa.gr/xmlui/bitstream/handle/11400/6238/Tsivos_242017028.pdf?sequence=1&isAllowed=y",
      details: "This thesis focuses on the development of an advanced application that integrates Cloud Computing and the Internet of Thing for monitoring and automating Olive Oil production processes. The main functionality of the system is the continuous measurement of temperatures at various stages of the production while providing reliable data that confirms and reassures the quality of the produced Olive Oil based on specifications defined by the European Union.",
    },
    {
      title: "Virtual Reality Museum with interactive exhibits & Programmed Guide",
      description: "Visitors can explore artifacts, artworks, and historical displays in a realistic 3D environment, while the guide provides information, insights, and a seamless, interactive educational experience.",
      image: "/logos/vr.PNG",
      details: "The Virtual Reality Museum is an immersive experience designed to make cultural and historical artifacts accessible from anywhere. Users enter a fully 3D-rendered environment that replicates the feel of a real museum, complete with lifelike textures. It features Interactive Exhibits, a Programmed Guide, Virtual Navigation and Educational Content",
    },
    {
      title: "Website for Real Estate Advertisement",
      description: "This is a brief description of Project Three.",
      image: "/logos/site1.png",
      details: "Additional insights into Project Three, covering project goals, technical details, and user feedback.",
    },

  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects" data-aos="fade-up">
      <h2><FontAwesomeIcon icon="project-diagram" /> Projects</h2>
      <div className="project-list">
        {projectData.map((project, index) => (
          <Project key={index} project={project} openModal={openModal} />
        ))}
      </div>
      {selectedProject && <ProjectModal project={selectedProject} closeModal={closeModal} />}
    </section>
  );
};

const Project = ({ project, openModal }) => (
  <div className="project">
    <img src={project.image} alt={project.title} className="project-image" />
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <button className="btn" onClick={() => openModal(project)}>
      View Project
    </button>
  </div>
);

const ProjectModal = ({ project, closeModal }) => (
  <div className="modal-overlay">
    <div className="modal-content">
      <button className="modal-close" onClick={closeModal}>
        &times;
      </button>
      <h3>{project.title}</h3>
      <img src={project.image} alt={project.title} className="modal-image" />
      <p>{project.details}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">
        <FontAwesomeIcon icon={faGlobe} /> Visit Website
      </a>
      <a href={project.link2} target="_blank" rel="noopener noreferrer" className="btn">
        <FontAwesomeIcon icon={faFile} /> View File
      </a>
    </div>
  </div>
);

const Connect = () => (
  <section className="connect" id="contact">
    <h2 className="connect-title">Let’s Connect!</h2>
    <div className="connect-cards">

      {/* LinkedIn Card */}
      <div className="connect-card">
        <div className="card-content">
          <h3>LinkedIn</h3>
          <p>Stay updated with my professional journey.</p>
          <a href="https://www.linkedin.com/in/iasonas-tsivos-1b32b61b9/" target="_blank" rel="noopener noreferrer">
            Visit Profile
          </a>
        </div>
      </div>

      {/* GitHub Card */}
      <div className="connect-card">
        <div className="card-content">
          <h3>GitHub</h3>
          <p>Check out my latest projects and collaborations.</p>
          <a href="https://github.com/IasonTsivos" target="_blank" rel="noopener noreferrer">
            View Projects
          </a>
        </div>
      </div>

      {/* Email Card */}
      <div className="connect-card">
        <div className="card-content">
          <h3>Email Me</h3>
          <p>Have a question? Let’s chat!</p>
          <a href="mailto:ias-i@hotmail.com">
            Send Email
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default App;

