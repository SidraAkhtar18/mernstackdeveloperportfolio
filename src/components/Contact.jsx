import { useState } from "react";
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // Clear status when user starts typing again
    if (status.message) setStatus({ type: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      // Using Web3Forms API (free email service)
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "166abcbf-dc49-4765-afa9-fd2da5a7a0f2", // You need to replace this
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to: "maliksidraakhtar18@gmail.com",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message: `Thank you, ${formData.name}! Your message has been sent successfully.`,
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Oops! Something went wrong. Please try again or email me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&family=Work+Sans:wght@300;400;600;700&display=swap');
        
        .contact-section {
          font-family: 'Work Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }
        
        .contact-section::before {
          content: '';
          position: absolute;
          top: -20%;
          left: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(0, 180, 216, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          animation: float 20s ease-in-out infinite;
        }
        
        .contact-section::after {
          content: '';
          position: absolute;
          bottom: -20%;
          right: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(144, 224, 239, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          animation: float 25s ease-in-out infinite reverse;
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(30px, -30px); }
          66% { transform: translate(-20px, 20px); }
        }
        
        .contact-content {
          position: relative;
          z-index: 1;
        }
        
        .contact-title {
          font-family: 'Space Mono', monospace;
          font-weight: 700;
          font-size: 2.5rem;
          line-height: 1.2;
          margin-bottom: 24px;
          animation: fadeInLeft 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .contact-description {
          font-size: 1.125rem;
          line-height: 1.7;
          margin-bottom: 32px;
          animation: fadeInLeft 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.1s backwards;
        }
        
        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
          animation: fadeInLeft 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s backwards;
        }
        
        .feature-item {
          position: relative;
          padding-left: 32px;
          margin-bottom: 16px;
          font-size: 1.0625rem;
          font-weight: 600;
          color: #0077B6;
        }
        
        .feature-item::before {
          content: '✓';
          position: absolute;
          left: 0;
          top: 0;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #00B4D8, #0077B6);
          color: white;
          border-radius: 50%;
          font-weight: bold;
          font-size: 14px;
        }
        
        .contact-form-wrapper {
          background: white;
          border-radius: 24px;
          padding: 40px;
          box-shadow: 
            0 20px 60px rgba(0, 119, 182, 0.15),
            0 0 0 1px rgba(0, 180, 216, 0.1);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          animation: fadeInRight 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s backwards;
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .contact-form-wrapper:hover {
          transform: translateY(-8px);
          box-shadow: 
            0 30px 80px rgba(0, 180, 216, 0.2),
            0 0 0 2px rgba(0, 180, 216, 0.15);
        }
        
        .form-group {
          margin-bottom: 24px;
        }
        
        .form-label {
          display: block;
          font-weight: 600;
          font-size: 0.9375rem;
          color: #03045E;
          margin-bottom: 8px;
          letter-spacing: 0.3px;
        }
        
        .form-input,
        .form-textarea {
          width: 100%;
          padding: 14px 18px;
          border: 2px solid rgba(0, 119, 182, 0.2);
          border-radius: 12px;
          background: rgba(202, 240, 248, 0.3);
          color: #03045E;
          font-size: 1rem;
          transition: all 0.3s ease;
          font-family: 'Work Sans', sans-serif;
        }
        
        .form-input::placeholder,
        .form-textarea::placeholder {
          color: rgba(0, 119, 182, 0.5);
        }
        
        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #00B4D8;
          background: white;
          box-shadow: 0 0 0 4px rgba(0, 180, 216, 0.1);
        }
        
        .form-textarea {
          resize: vertical;
          min-height: 140px;
        }
        
        .submit-button {
          width: 100%;
          padding: 16px;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1.0625rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        
        .submit-button:not(:disabled) {
          background: linear-gradient(135deg, #0077B6, #005f86);
          color: white;
          box-shadow: 0 4px 15px rgba(0, 119, 182, 0.3);
        }
        
        .submit-button:not(:disabled)::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }
        
        .submit-button:not(:disabled):hover::before {
          left: 100%;
        }
        
        .submit-button:not(:disabled):hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(0, 119, 182, 0.4);
        }
        
        .submit-button:disabled {
          background: #E5E7EB;
          color: #9CA3AF;
          cursor: not-allowed;
        }
        
        .submit-button svg {
          transition: transform 0.3s ease;
        }
        
        .submit-button:not(:disabled):hover svg {
          transform: translateX(3px);
        }
        
        .loading-spinner {
          width: 20px;
          height: 20px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        .status-message {
          margin-top: 16px;
          padding: 14px 18px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 500;
          animation: slideDown 0.3s ease;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .status-success {
          background: rgba(34, 197, 94, 0.1);
          color: #16A34A;
          border: 2px solid rgba(34, 197, 94, 0.3);
        }
        
        .status-error {
          background: rgba(239, 68, 68, 0.1);
          color: #DC2626;
          border: 2px solid rgba(239, 68, 68, 0.3);
        }
        
        @media (max-width: 768px) {
          .contact-title {
            font-size: 2rem;
          }
          
          .contact-form-wrapper {
            padding: 28px;
          }
        }
      `}</style>

      <section
        className="contact-section py-20 px-6"
        id="contact"
        style={{ backgroundColor: "#CAF0F8" }}
      >
        <div className="contact-content max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side Text */}
          <div>
            <h2 className="contact-title" style={{ color: "#03045E" }}>
             Turning Creativity into Code and Code into Experiences.
         
            </h2>
            <h1 style={{ color: "#163bc4" }}>Lets Connect and Build Something Amazing Together!</h1>
           
          </div>

          {/* Right Side Contact Form */}
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className="submit-button"
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>

              {status.message && (
                <div className={`status-message ${status.type === "success" ? "status-success" : "status-error"}`}>
                  {status.type === "success" ? (
                    <FaCheckCircle size={20} />
                  ) : (
                    <FaExclamationCircle size={20} />
                  )}
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;