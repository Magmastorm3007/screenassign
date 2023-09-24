import React from 'react';
import './footer.css'; // Import the CSS file

function Footer() {
  return (
    <div>
      <footer className="footer-wrapper">
        <div className="footer-section-left">
          <div className="footer-logo-wrapper">
            <img
              src="https://uploads-ssl.webflow.com/649bf96c5b6b6eedce71de31/649d30b1f8d3068ddb75721e_ioni_light.svg"
              alt=""
            />
          </div>
          <p className="color-neutral-400 mg-bottom-24px">Boost your customer support productivity with ChatGPT-4</p>
        </div>
        <div className="footer-section-right">
          <div className="footer-column">
            <div className="text-300 bold footer-title">Features</div>
            <ul role="list" className="footer-list-wrapper">
              {/* Features list items */}
              <li className="footer-list-item"><a href="ai-assistant" className="footer-link">AI Assistant</a></li>
              <li className="footer-list-item"><a href="ai-chatbot" className="footer-link">AI Chatbot</a></li>
              {/* Add more feature links */}
            </ul>
          </div>
          <div className="footer-column">
            <div className="text-300 bold footer-title">Resources</div>
            <ul role="list" className="footer-list-wrapper">
              {/* Resources list items */}
              <li className="footer-list-item"><a href="pricing" className="footer-link">Pricing</a></li>
              <li className="footer-list-item"><a href="contact" className="footer-link">Contact</a></li>
              {/* Add more resource links */}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
