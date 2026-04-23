import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const projectData = [
   

     {
  title: "Farm2Market",
  description:
    "Farm2Market is a mobile platform that connects farmers directly with shopkeepers, eliminating middlemen and enabling fair pricing, faster delivery, and easier ordering of fresh agricultural products.",
  tech: ["React Native", "Node.js", "MongoDB", "Express", "Stripe Payment Gateway", "Render","Vercel"],
  img: "FARM2MARKET.png",
  live: "https://drive.google.com/drive/folders/1uOnCDN8jtYjrww0m-mzgCBDxyHdl1dAs",
  status: "Completed",
},
     {
      title: "Doctor On Call",
      description: "A healthcare platform for booking doctor appointments and managing patient records.",
      tech: ["Reactjs", "Tailwind CSS","Web3form", "Node.js", "MongoDB", "Express", "Stripe Payment Gateway"  ],
      img: "image.png",
      Github:"https://github.com/SidraAkhtar18/DoctorOnCall",
      live: "https://github.com/SidraAkhtar18/DoctorOnCall",    
      status: "Onprogress",
    },
    {
      title: "HMA KHADDER-ECOMMERCE SITE",
      description:
        "A fully responsive ecommerce website offering smooth shopping experience with advanced product features and fast performance.",
      tech: ["ReactJS", "Tailwind CSS", "Node.js", "MongoDB", "Redux Toolkit"],
      img: "YouTube Thumbnail - Professional React JS Website Design with Next.js.jpg",
      live: "https://hmakhadder-store.vercel.app/",
      status: "Complete",
    },

     {
      title: "Global Beats-Music Streaming App Design",
      description: "A modern music streaming app design with a focus on user experience and seamless playback.",
      tech: ["Figma", "Tailwind CSS", "ReactJS"],
      img: "YouTube Thumbnail - Professional React JS Website Design with Next.js (3).png",
      live: "https://www.figma.com/proto/ESK8PvnpDfPxNuq082GS1J/Global-Beats?node-id=0-1&t=tTXBYnpqnxxVkZ66-1",
      status: "Completed",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&family=Work+Sans:wght@300;400;600;700&display=swap');
        
        .projects-section {
          font-family: 'Work Sans', sans-serif;
          position: relative;
        }
        
        .section-title {
          font-family: 'Space Mono', monospace;
          font-weight: 700;
          font-size: 1.625rem;
          letter-spacing: 1px;
          position: relative;
          display: block;
          text-align: center;
          animation: fadeInDown 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -12px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #00B4D8, #0077B6);
          border-radius: 2px;
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .projects-grid {
          animation: fadeIn 0.8s ease 0.3s backwards;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .project-card {
          position: relative;
          background: linear-gradient(135deg, #0077B6 0%, #023E8A 100%);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid transparent;
          animation: slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) backwards;
        }
        
        .project-card:nth-child(1) { animation-delay: 0.1s; }
        .project-card:nth-child(2) { animation-delay: 0.2s; }
        .project-card:nth-child(3) { animation-delay: 0.3s; }
        .project-card:nth-child(4) { animation-delay: 0.4s; }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0, 180, 216, 0.1) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }
        
        .project-card:hover::before {
          opacity: 1;
        }
        
        .project-card:hover {
          transform: translateY(-12px);
          box-shadow: 
            0 20px 50px rgba(0, 180, 216, 0.4),
            0 0 0 2px #00B4D8;
          border-color: #00B4D8;
        }
        
        .project-image-wrapper {
          position: relative;
          overflow: hidden;
          height: 280px;
        }
        
        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .project-card:hover .project-image {
          transform: scale(1.1);
        }
        
        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(3, 4, 94, 0.7) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        
        .project-card:hover .image-overlay {
          opacity: 1;
        }
        
        .status-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(144, 224, 239, 0.95);
          backdrop-filter: blur(10px);
          color: #03045E;
          padding: 6px 16px;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.875rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          z-index: 2;
          animation: fadeInScale 0.5s ease 0.3s backwards;
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .project-content {
          padding: 24px;
        }
        
        .project-title {
          font-weight: 700;
          font-size: 1.5rem;
          margin-bottom: 12px;
          transition: color 0.3s ease;
        }
        
        .project-card:hover .project-title {
          color: #90E0EF;
        }
        
        .project-description {
          font-weight: 300;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        
        .tech-label {
          font-weight: 600;
          font-size: 0.875rem;
          margin-bottom: 12px;
          letter-spacing: 0.5px;
        }
        
        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }
        
        .tech-tag {
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 500;
          background: rgba(0, 180, 216, 0.9);
          color: #CAF0F8;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }
        
        .tech-tag:hover {
          background: #00B4D8;
          border-color: #90E0EF;
          transform: translateY(-2px);
        }
        
        .project-links {
          display: flex;
          gap: 12px;
          margin-top: auto;
        }
        
        .btn-live {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: 10px;
          font-weight: 600;
          background: #FF6B6B;
          color: #CAF0F8;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
        }
        
        .btn-live:hover {
          background: #FF5252;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 107, 107, 0.5);
        }
        
        .btn-github {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: 10px;
          font-weight: 600;
          background: #03045E;
          color: #CAF0F8;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(3, 4, 94, 0.3);
        }
        
        .btn-github:hover {
          background: #001A4D;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(3, 4, 94, 0.5);
        }
        
        .btn-live svg, .btn-github svg {
          transition: transform 0.3s ease;
        }
        
        .btn-live:hover svg {
          transform: translateX(3px) translateY(-3px);
        }
        
        .btn-github:hover svg {
          transform: rotate(360deg);
        }
      `}</style>

      <section
        className="projects-section py-20 px-6 md:px-12"
        id="projects"
        style={{ backgroundColor: "#CAF0F8" }}
      >
        <h2 className="section-title mb-12" 
         style={{ color: "#03045E" }}>
          My Projects
        </h2>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projectData.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-wrapper">
                <img
                  src={project.img}
                  alt={project.title}
                  className="project-image"
                />
                <div className="image-overlay"></div>
                <span className="status-badge">{project.status}</span>
              </div>

              <div className="project-content flex flex-col">
                <h3 className="project-title" style={{ color: "#CAF0F8" }}>
                  {project.title}
                </h3>

                <p className="project-description" style={{ color: "#90E0EF" }}>
                  {project.description}
                </p>

                <div>
                  <h4 className="tech-label" style={{ color: "#CAF0F8" }}>
                    Technologies
                  </h4>
                  <div className="tech-tags">
                    {project.tech.map((t, i) => (
                      <span key={i} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-links">
               
                  {project.Github && (
                    <a
                      href={project.Github} 
                      className="btn-github"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View GitHub repository of ${project.title}`}
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}
                     <a
                    href={project.live}
                    className="btn-live"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;