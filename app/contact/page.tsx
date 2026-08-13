'use client';

import { useState, FormEvent } from 'react';

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
              <span className="success-icon" style={{ stroke: 'var(--accent-cyan)', display: 'inline-flex' }}>
                <svg className="icon-svg" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
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
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg className="icon-svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Headquarters
            </h4>
            <p>Albany, NY</p>
          </div>

          <div className="info-item">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg className="icon-svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="var(--accent-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Email Support
            </h4>
            <p>bvmohr2@gmail.com</p>
          </div>

          <div className="info-item">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg className="icon-svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
              Open Source
            </h4>
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
