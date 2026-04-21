import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaHeart } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#Navbar" },
    { name: "Projects", href: "#projects" },
    { name: "Technologies", href: "#technologies" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/sidraakhtar18/", icon: FaLinkedin, color: "#0077B6" },
    { name: "GitHub", href: "https://github.com/SidraAkhtar18", icon: FaGithub, color: "#333" },
   
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&family=Work+Sans:wght@300;400;600;700&display=swap');
        
        .footer-section {
          font-family: 'Work Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }
        
        .footer-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, #03045E 0%, #001A4D 100%);
        }
        
        .footer-background::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
          opacity: 0.5;
        }
        
        .footer-background::after {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(0, 180, 216, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          animation: float 20s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-50px, 50px); }
        }
        
        .footer-content {
          position: relative;
          z-index: 1;
        }
        
        .footer-section-title {
          font-weight: 700;
          font-size: 1.125rem;
          margin-bottom: 20px;
          color: #CAF0F8;
          position: relative;
          display: inline-block;
        }
        
        .footer-section-title::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, #00B4D8, transparent);
          border-radius: 2px;
        }
        
        .about-text {
          font-size: 0.9375rem;
          line-height: 1.7;
          color: #90E0EF;
          margin-bottom: 24px;
        }
        
        .social-links {
          display: flex;
          gap: 12px;
        }
        
        .social-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 180, 216, 0.1);
          border: 2px solid rgba(0, 180, 216, 0.2);
          border-radius: 50%;
          color: #90E0EF;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .social-icon::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--social-color);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 50%;
        }
        
        .social-icon:hover::before {
          opacity: 1;
        }
        
        .social-icon:hover {
          transform: translateY(-4px);
          border-color: transparent;
          box-shadow: 0 8px 20px rgba(0, 180, 216, 0.3);
        }
        
        .social-icon svg {
          position: relative;
          z-index: 1;
          transition: all 0.3s ease;
        }
        
        .social-icon:hover svg {
          color: white;
          transform: scale(1.1);
        }
        
        .quick-links-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        
        .quick-link-item {
          position: relative;
        }
        
        .quick-link {
          display: inline-block;
          color: #90E0EF;
          font-size: 0.9375rem;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          padding-left: 16px;
        }
        
        .quick-link::before {
          content: '▸';
          position: absolute;
          left: 0;
          color: #00B4D8;
          transition: transform 0.3s ease;
        }
        
        .quick-link:hover {
          color: #CAF0F8;
          transform: translateX(4px);
        }
        
        .quick-link:hover::before {
          transform: translateX(4px);
        }
        
        .contact-info {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          color: #90E0EF;
          font-size: 0.9375rem;
        }
        
        .contact-icon {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 180, 216, 0.15);
          border-radius: 8px;
          color: #00B4D8;
        }
        
        .contact-link {
          color: #90E0EF;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .contact-link:hover {
          color: #CAF0F8;
        }
        
        .footer-bottom {
          margin-top: 48px;
          padding-top: 32px;
          border-top: 1px solid rgba(144, 224, 239, 0.1);
          position: relative;
          z-index: 1;
        }
        
        .footer-brand {
          font-family: 'Space Mono', monospace;
          font-weight: 700;
          font-size: 1.5rem;
          color: #90E0EF;
          margin-bottom: 8px;
          text-align: center;
        }
        
        .footer-copyright {
          text-align: center;
          color: #66B2C7;
          font-size: 0.875rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          flex-wrap: wrap;
        }
        
        .heart-icon {
          color: #FF6B6B;
          animation: heartbeat 1.5s ease-in-out infinite;
        }
        
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          10%, 30% { transform: scale(1.1); }
          20%, 40% { transform: scale(1); }
        }
        
        @media (max-width: 768px) {
          .quick-links-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <footer className="footer-section py-16" id="footer">
        <div className="space-evenly footer-background"></div>
        
        <div className="footer-content max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">

            {/* Quick Links */}
            <div>
              <h3 className="footer-section-title">Quick Links</h3>
              <ul className="quick-links-list">
                {quickLinks.map((link) => (
                  <li key={link.name} className="quick-link-item">
                    <a href={link.href} className="quick-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="footer-section-title">Contact</h3>
              <ul className="contact-info">
                <li className="contact-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt size={16} />
                  </div>
                  <span>Islamabad, Pakistan</span>
                </li>
                <li className="contact-item">
                  <div className="contact-icon">
                    <FaEnvelope size={16} />
                  </div>
                  <a 
                    href="mailto:maliksidraakhtar18@gmail.com" 
                    className="contact-link"
                  >
                    maliksidraakhtar18@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <div className="footer-brand">Portfolio</div>
            <p className="footer-copyright">
              © {currentYear} Sidra Akhtar. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}