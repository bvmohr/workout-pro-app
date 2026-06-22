import { Link } from 'react-router-dom';
import { useAuth } from '../App';
import '../assets/css/routes.css';

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
              <Link className="primary-btn" to="/dashboard">Go to Dashboard</Link>
            ) : (
              <>
                <Link className="primary-btn" to="/login">Start Free Journal</Link>
                <Link className="secondary-btn" to="/about">Learn More</Link>
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
            <div className="feature-icon">🏋️‍♂️</div>
            <h3>Structured Splits</h3>
            <p>Choose between Push-Pull-Legs, Classic Bro Split, or Upper-Lower configurations depending on your goals.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📝</div>
            <h3>Interactive Checklist</h3>
            <p>Track your workouts in real time. Mark off exercises as you complete them and add custom performance notes.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure Syncing</h3>
            <p>Your session is synced dynamically with our Express backend to keep your records consistent and secure.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to build your dream physique?</h2>
        <p>Register a free profile in 10 seconds and start checking off your splits today.</p>
        <Link className="cta-btn-large" to={username ? "/dashboard" : "/register"}>
          {username ? "Open Gym Dashboard" : "Register Now"}
        </Link>
      </section>
    </div>
  );
}
