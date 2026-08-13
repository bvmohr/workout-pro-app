'use client';

import Link from 'next/link';
import { useAuth } from './context/AuthContext';

export default function Home() {
  const { username } = useAuth();

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="badge">VERSION 2.0 IS LIVE</span>
          <h1 className="hero-title">
            Level Up Your Fitness with <span className="highlight">Workout Pro</span>
          </h1>
          <p className="hero-subtitle">
            The ultimate gym companion. Plan, organize, and check off your exercises using scientifically proven split routines. 
          </p>
          <div className="hero-actions">
            {username ? (
              <Link className="primary-btn" href="/dashboard">Go to Dashboard</Link>
            ) : (
              <>
                <Link className="primary-btn" href="/login">Start Free Journal</Link>
                <Link className="secondary-btn" href="/about">Learn More</Link>
              </>
            )}
          </div>
        </div>
        <div className="hero-graphic">
          <div className="workout-card-preview">
            <div className="card-header-preview">
              <h3>Push Day Split</h3>
              <span className="split-badge-preview">PPL Routine</span>
            </div>
            <div className="card-item-preview checked">
              <span className="checkbox-preview">✓</span>
              <span>Inclined Dumbbell Chest Press</span>
            </div>
            <div className="card-item-preview checked">
              <span className="checkbox-preview">✓</span>
              <span>Dumbbell Lateral Raise</span>
            </div>
            <div className="card-item-preview">
              <span className="checkbox-preview"></span>
              <span>Tricep Pulldown</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-section">
        <h2 className="section-title">Engineered for Fitness Enthusiasts</h2>
        <p className="section-subtitle">Ditch the notebook. Track your sessions with our interactive checklist.</p>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg className="icon-svg" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2M4 8H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2M6 5h2v14H6zm10 0h2v14h-2zM8 12h8" />
              </svg>
            </div>
            <h3>Structured Splits</h3>
            <p>Choose between Push-Pull-Legs, Classic Bro Split, or Upper-Lower configurations depending on your goals.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <svg className="icon-svg" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="var(--accent-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="9" y1="9" x2="15" y2="9" />
                <line x1="9" y1="13" x2="15" y2="13" />
                <line x1="9" y1="17" x2="15" y2="17" />
              </svg>
            </div>
            <h3>Interactive Checklist</h3>
            <p>Track your workouts in real time. Mark off exercises as you complete them and add custom performance notes.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg className="icon-svg" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h3>Secure Syncing</h3>
            <p>Your session is synced dynamically with our Next.js backend to keep your records consistent and secure.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to build your dream physique?</h2>
        <p>Register a free profile in 10 seconds and start checking off your splits today.</p>
        <Link className="cta-btn-large" href={username ? "/dashboard" : "/register"}>
          {username ? "Open Gym Dashboard" : "Register Now"}
        </Link>
      </section>
    </div>
  );
}
