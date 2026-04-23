import React from "react";
import { FaReact, FaCode, FaLaptopCode } from "react-icons/fa";
import { SiNextdotjs, SiRedux, SiTailwindcss, SiMongodb, SiExpress, SiNodedotjs, SiContactlesspayment } from "react-icons/si";

const Experience = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&family=Work+Sans:wght@300;400;600;700&display=swap');
        
        .experience-section {
          font-family: 'Work Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }
        
        .experience-section::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(0, 180, 216, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          animation: float 15s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-50px, 50px); }
        }
        
        .section-title {
          font-family: 'Space Mono', monospace;
          font-weight: 700;
          letter-spacing: 1px;
          position: relative;
          display: inline-block;
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
        
        .experience-card {
          position: relative;
          background: white;
          border-radius: 24px;
          padding: 40px;
          box-shadow: 
            0 10px 40px rgba(0, 119, 182, 0.12),
            0 0 0 1px rgba(0, 180, 216, 0.1);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          animation: slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s backwards;
          overflow: hidden;
          margin-bottom: 24px;
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .experience-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 6px;
          height: 100%;
          background: linear-gradient(180deg, #00B4D8, #0077B6);
        }
        
        .experience-card::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: linear-gradient(135deg, rgba(0, 180, 216, 0.03) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }
        
        .experience-card:hover::after {
          opacity: 1;
        }
        
        .experience-card:hover {
          transform: translateY(-8px);
          box-shadow: 
            0 20px 60px rgba(0, 180, 216, 0.2),
            0 0 0 2px rgba(0, 180, 216, 0.3);
        }
        
        .job-header {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 24px;
          animation: fadeIn 0.8s ease 0.5s backwards;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .icon-container {
          flex-shrink: 0;
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #00B4D8, #0077B6);
          border-radius: 16px;
          box-shadow: 0 8px 20px rgba(0, 180, 216, 0.3);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .experience-card:hover .icon-container {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 12px 30px rgba(0, 180, 216, 0.4);
        }
        
        .icon-container svg {
          color: white;
          font-size: 32px;
        }
        
        .job-title {
          font-weight: 700;
          font-size: 1.75rem;
          margin-bottom: 8px;
          animation: fadeIn 0.8s ease 0.6s backwards;
        }
        
        .job-duration {
          font-weight: 600;
          font-size: 1rem;
          margin-bottom: 6px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          animation: fadeIn 0.8s ease 0.7s backwards;
        }
        
        .duration-badge {
          display: inline-block;
          padding: 4px 12px;
          background: rgba(0, 180, 216, 0.1);
          border-radius: 12px;
          font-size: 0.875rem;
          color: #0077B6;
          font-weight: 600;
        }
        
        .job-company {
          font-weight: 500;
          font-size: 1.125rem;
          margin-bottom: 16px;
          animation: fadeIn 0.8s ease 0.8s backwards;
        }
        
        .tools-section {
          margin-bottom: 24px;
          padding: 20px;
          background: linear-gradient(135deg, rgba(0, 180, 216, 0.05) 0%, rgba(144, 224, 239, 0.05) 100%);
          border-radius: 16px;
          border: 1px solid rgba(0, 180, 216, 0.1);
          animation: fadeIn 0.8s ease 0.9s backwards;
        }
        
        .tools-label {
          font-weight: 600;
          font-size: 0.875rem;
          margin-bottom: 12px;
          letter-spacing: 0.5px;
          color: #0077B6;
        }
        
        .tech-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        
        .tech-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: white;
          border: 2px solid #00B4D8;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.875rem;
          color: #0077B6;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 2px 8px rgba(0, 180, 216, 0.1);
        }
        
        .tech-badge:hover {
          transform: translateY(-2px);
          background: #00B4D8;
          color: white;
          box-shadow: 0 4px 12px rgba(0, 180, 216, 0.3);
        }
        
        .tech-badge svg {
          font-size: 18px;
        }
        
        .responsibilities {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .responsibility-item {
          position: relative;
          padding-left: 32px;
          margin-bottom: 16px;
          line-height: 1.7;
          color: #333;
          animation: fadeInLeft 0.6s cubic-bezier(0.4, 0, 0.2, 1) backwards;
        }
        
        .responsibility-item:nth-child(1) { animation-delay: 1s; }
        .responsibility-item:nth-child(2) { animation-delay: 1.1s; }
        .responsibility-item:nth-child(3) { animation-delay: 1.2s; }
        .responsibility-item:nth-child(4) { animation-delay: 1.3s; }
        .responsibility-item:nth-child(5) { animation-delay: 1.4s; }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .responsibility-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 9px;
          width: 12px;
          height: 12px;
          background: linear-gradient(135deg, #00B4D8, #0077B6);
          border-radius: 50%;
          box-shadow: 0 0 0 4px rgba(0, 180, 216, 0.1);
        }
        
        .responsibility-item:hover::before {
          animation: pulse 1s ease infinite;
        }
        
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 4px rgba(0, 180, 216, 0.1); }
          50% { box-shadow: 0 0 0 8px rgba(0, 180, 216, 0.2); }
        }
      `}</style>

      <section id="experience" className="experience-section py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            className="section-title text-4xl md:text-5xl text-center mb-16"
            style={{ color: "#0077B6" }}
          >
            Experience
          </h2>

          <div className="experience-card">
            <div className="job-header">
              <div className="icon-container">
                <FaLaptopCode />
              </div>
              <div className="flex-1">
                <h3 className="job-title" style={{ color: "#0077B6" }}>
                  Web Developer
                </h3>
                <div className="job-duration" style={{ color: "#00B4D8" }}>
                  April 2025 – September 2025
                  <span className="duration-badge">6 months</span>
                </div>
                <p className="job-company" style={{ color: "#666" }}>
                  Orix Tech (Pvt) Ltd, Lahore (Remote)
                </p>
              </div>
            </div>

            <div className="tools-section">
              <h4 className="tools-label">TECH STACK</h4>
              <div className="tech-grid">
                <div className="tech-badge">
                  <FaReact /> React.js
                </div>
                <div className="tech-badge">
                  <FaCode /> React Native
                </div>
                <div className="tech-badge">
                  <SiNextdotjs /> Next.js
                </div>
                <div className="tech-badge">
                  <SiRedux /> Redux Toolkit
                </div>
                <div className="tech-badge">
                  <SiTailwindcss /> Tailwind CSS
                </div>
              </div>
            </div>

            <ul className="responsibilities">
              <li className="responsibility-item">
                Developed responsive web applications using React.js, Next.js, and Tailwind CSS.
              </li>
              <li className="responsibility-item">
                Built reusable component libraries and integrated RESTful APIs for dynamic data rendering.
              </li>
              <li className="responsibility-item">
                Converted Figma design mockups into pixel-perfect, interactive user interfaces.
              </li>
              <li className="responsibility-item">
                Improved debugging and problem-solving skills through collaborative team projects.
              </li>
            </ul>
          </div>

          <div className="experience-card">
            <div className="job-header">
              <div className="icon-container">
                <FaCode />
              </div>
              <div className="flex-1">
                <h3 className="job-title" style={{ color: "#0077B6" }}>
                  MERN Stack Developer
                </h3>
                <div className="job-duration" style={{ color: "#00B4D8" }}>
                  September 2025 – March 2026
                  <span className="duration-badge">7 months</span>
                </div>
                <p className="job-company" style={{ color: "#666" }}>
                  Self-Employed
                </p>
              </div>
            </div>

            <div className="tools-section">
              <h4 className="tools-label">TECH STACK</h4>
              <div className="tech-grid">
                <div className="tech-badge">
                  <SiMongodb /> MongoDB
                </div>
                <div className="tech-badge">
                  <SiExpress /> Express.js
                </div>
                <div className="tech-badge">
                  <FaReact /> React.js
                </div>
                <div className="tech-badge">
                  <SiNodedotjs /> Node.js
                </div>
                <div className="tech-badge">
                  <SiTailwindcss /> Tailwind CSS
                </div>
                <div className="tech-badge">
                  <SiContactlesspayment /> Stripe
                </div>
              </div>
            </div>

            <ul className="responsibilities">
              <li className="responsibility-item">
                Delivered full-stack web and application solutions using the MERN stack (MongoDB, Express.js, React.js, Node.js).
              </li>
              <li className="responsibility-item">
                Developed responsive and scalable applications with modern UI/UX and integrated RESTful APIs.
              </li>
              <li className="responsibility-item">
                Managed multiple client projects, while ensuring timely delivery.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;