import { useState, FormEvent } from 'react';
import '../assets/css/routes.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setSubmitting(true);
    // Mock API call to simulate sending message
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
    }, 1200);
  };

  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p className="subtitle">Got questions or feedback about Workout Pro? Drop us a line.</p>
      </header>

      <div className="contact-layout">
        {/* Contact Form */}
        <div className="contact-form-container">
          {success ? (
            <div className="contact-success-card">
              <span className="success-icon">✉️</span>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. We will get back to you shortly.</p>
              <button className="primary-btn" onClick={() => setSuccess(false)}>Send Another Message</button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send a Message</h3>
              
              <div className="form-group">
                <label htmlFor="contact-name">Full Name</label>
                <input 
                  type="text" 
                  id="contact-name"
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  placeholder="e.g. Brian Mohr" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">Email Address</label>
                <input 
                  type="email" 
                  id="contact-email"
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="name@example.com" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea 
                  id="contact-message"
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)} 
                  placeholder="Tell us what you think or report a bug..." 
                  rows={5}
                  required 
                />
              </div>

              <button type="submit" className="contact-btn" disabled={submitting}>
                {submitting ? "Sending..." : "Submit Message"}
              </button>
            </form>
          )}
        </div>

        {/* Contact Info Cards */}
        <div className="contact-info-panel">
          <div className="info-item">
            <h4>📍 Headquarters</h4>
            <p>San Francisco, CA</p>
          </div>

          <div className="info-item">
            <h4>📧 Email Support</h4>
            <p>support@workoutpro.fit</p>
          </div>

          <div className="info-item">
            <h4>💻 Open Source</h4>
            <p>
              Find us on GitHub:<br />
              <a href="https://github.com/bvmohr/workout-pro-app" target="_blank" rel="noreferrer">
                github.com/bvmohr/workout-pro-app
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
