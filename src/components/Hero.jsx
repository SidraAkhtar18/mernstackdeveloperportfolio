import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&family=Work+Sans:wght@300;400;600;700;800&display=swap');
        
        .hero-section {
          font-family: 'Work Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }
        
        /* Animated Background */
        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(144, 224, 239, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(0, 180, 216, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, #0077B6 0%, #023E8A 50%, #03045E 100%);
          z-index: 0;
        }
        
        /* Floating Particles */
        .particle {
          position: absolute;
          border-radius: 50%;
          background: rgba(202, 240, 248, 0.1);
          animation: float-particle linear infinite;
          pointer-events: none;
        }
        
        .particle:nth-child(1) {
          width: 80px;
          height: 80px;
          top: 20%;
          left: 10%;
          animation-duration: 20s;
        }
        
        .particle:nth-child(2) {
          width: 120px;
          height: 120px;
          top: 60%;
          right: 15%;
          animation-duration: 25s;
          animation-delay: -5s;
        }
        
        .particle:nth-child(3) {
          width: 60px;
          height: 60px;
          bottom: 20%;
          left: 20%;
          animation-duration: 18s;
          animation-delay: -10s;
        }
        
        @keyframes float-particle {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.3;
          }
          25% {
            transform: translate(30px, -30px) rotate(90deg);
            opacity: 0.5;
          }
          50% {
            transform: translate(0, -60px) rotate(180deg);
            opacity: 0.3;
          }
          75% {
            transform: translate(-30px, -30px) rotate(270deg);
            opacity: 0.5;
          }
        }
        
        .hero-content {
          position: relative;
          z-index: 1;
        }
        
        /* Text Animations */
        .hero-title {
          font-weight: 800;
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          line-height: 1.1;
        }
        
        .hero-name {
          background: linear-gradient(135deg, #90E0EF, #CAF0F8, #90E0EF);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s ease-in-out infinite;
          display: inline-block;
        }
        
        @keyframes shimmer {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 100% center; }
        }
        
        .hero-subtitle {
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s backwards;
          font-weight: 300;
          line-height: 1.6;
        }
        
        .hero-buttons {
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s backwards;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* CTA Buttons */
        .btn-primary {
          position: relative;
          overflow: hidden;
          font-weight: 600;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }
        
        .btn-primary:hover::before {
          left: 100%;
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(255, 107, 107, 0.5);
        }
        
        .btn-secondary {
          position: relative;
          font-weight: 600;
          letter-spacing: 0.5px;
          background: rgba(0, 180, 216, 0.1);
          backdrop-filter: blur(10px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .btn-secondary:hover {
          background: #00B4D8;
          color: white;
          border-color: #00B4D8;
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(0, 180, 216, 0.4);
        }
        
        /* Image Section */
        .image-container {
          animation: fadeInScale 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s backwards;
          position: relative;
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
        
        .image-wrapper {
          position: relative;
          border-radius: 50%;
          padding: 6px;
          background: linear-gradient(135deg, #90E0EF, #00B4D8, #0077B6);
          box-shadow: 
            0 0 60px rgba(144, 224, 239, 0.4),
            0 20px 40px rgba(0, 0, 0, 0.2);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          animation: float-image 6s ease-in-out infinite;
        }
        
        @keyframes float-image {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .image-wrapper:hover {
          transform: scale(1.05) translateY(-10px);
          box-shadow: 
            0 0 80px rgba(144, 224, 239, 0.6),
            0 30px 60px rgba(0, 0, 0, 0.3);
        }
        
        .profile-image {
          border-radius: 50%;
          border: 4px solid white;
          transition: transform 0.5s ease;
        }
        
        .image-wrapper:hover .profile-image {
          transform: scale(1.05);
        }
        
        /* Decorative Ring */
        .image-ring {
          position: absolute;
          top: -20px;
          left: -20px;
          right: -20px;
          bottom: -20px;
          border: 2px dashed rgba(202, 240, 248, 0.3);
          border-radius: 50%;
          animation: rotate 30s linear infinite;
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        /* Social Links */
        .social-container {
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s backwards;
        }
        
        .social-link {
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          background: white;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        
        .social-link::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: linear-gradient(135deg, #00B4D8, #0077B6);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .social-link:hover::before {
          opacity: 1;
        }
        
        .social-link:hover {
          transform: translateY(-4px) scale(1.1);
          box-shadow: 0 8px 25px rgba(0, 180, 216, 0.4);
        }
        
        .social-link svg {
          position: relative;
          z-index: 1;
          transition: all 0.3s ease;
        }
        
        .social-link:hover svg {
          color: white !important;
        }
        
        /* Scroll Indicator */
        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          animation: bounce 2s ease-in-out infinite;
          cursor: pointer;
          z-index: 1;
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(10px); }
        }
        
        .scroll-indicator:hover {
          color: #90E0EF;
        }
        
        @media (max-width: 768px) {
          .particle {
            display: none;
          }
          
          .scroll-indicator {
            bottom: 20px;
          }
        }
      `}</style>

      <section
        id="hero"
        className="hero-section min-h-screen flex flex-col justify-center px-8 md:px-16 py-20"
      >
        {/* Floating Particles */}
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>

        {/* Main Content */}
        <div className="hero-content flex flex-col md:flex-row items-center gap-12 md:gap-16">
          
          {/* Left Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl" style={{ color: "#CAF0F8" }}>
              Hi, I'm <span className="hero-name">Sidra Akhtar</span>
            </h1>

            <p className="hero-subtitle text-lg md:text-xl lg:text-2xl mt-6 text-[#CAF0F8]">
              Full Stack Web App Developer (MERN) | Transforming Figma Designs into
              Responsive, High-Performance Web App | Building Modern & Intuitive
              User Experiences
            </p>
    
                 <div className="social-container flex gap-4 mt-8 justify-center md:justify-start">
             
              <a
                href="https://www.linkedin.com/in/sidraakhtar18/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link p-4 rounded-full"
                aria-label="Visit my LinkedIn profile"
              >
                <FaLinkedin size={24} color="#03045E" />
              </a>
               <a
                href="https://github.com/Sidraakhtar18/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link p-4 rounded-full"
                aria-label="Visit my GitHub profile"
              >
                <FaGithub size={24} color="#03045E" />
              </a>           
                        
            </div>
          

            </div>

            {/* Social Links */}
        

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <div className="image-container">
              <div className="image-ring"></div>
              <div className="image-wrapper">
                <img
                  src="20250806_1755_image.png"
                  alt="Sidra Akhtar - Full Stack Web App Developer"
                  className="profile-image w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a href="#experience" className="scroll-indicator text-[#CAF0F8]">
          <HiArrowDown size={32} />
        </a>
      </section>
    </>
  );
};

export default Hero;