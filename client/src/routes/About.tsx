import '../assets/css/routes.css';

export default function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Workout Pro</h1>
        <p className="subtitle">The science of structured fitness journal tracking</p>
      </header>

      <section className="about-section">
        <h2>What are workout splits?</h2>
        <p>
          A workout split refers to how you divide your muscle groups across training sessions throughout the week. 
          By organizing exercises into specific training days, you allow worked muscle groups adequate time to rest and recover, 
          which is crucial for strength and muscular growth.
        </p>

        <div className="splits-info-grid">
          <div className="info-card">
            <h3>Push / Pull / Legs (PPL)</h3>
            <p>
              Divided into upper body pushing exercises (chest, shoulders, triceps), 
              upper body pulling exercises (back, rear delts, biceps), and leg exercises (quads, hamstrings, glutes, calves).
            </p>
            <span className="info-frequency">Recommended: 3 to 6 days/week</span>
          </div>

          <div className="info-card">
            <h3>Classic Bro Split</h3>
            <p>
              Focuses on one or two major muscle groups per session. 
              Examples include separate days for Chest, Back, Shoulders, Arms, and Legs. Highly popular for targeted isolation.
            </p>
            <span className="info-frequency">Recommended: 5 days/week</span>
          </div>

          <div className="info-card">
            <h3>Upper / Lower (UL)</h3>
            <p>
              Splits training sessions into upper body workouts (chest, back, shoulders, arms) and lower body workouts (legs, core). 
              Excellent for frequency and balanced recovery.
            </p>
            <span className="info-frequency">Recommended: 4 days/week</span>
          </div>
        </div>
      </section>

      <section className="about-section tech-stack">
        <h2>Technology & Architecture</h2>
        <p>
          Workout Pro is designed with high performance and security in mind. It implements:
        </p>
        <ul>
          <li><strong>TypeScript:</strong> Type-safety across the front and backend layers.</li>
          <li><strong>React:</strong> A responsive SPA built with Vite for optimal compile performance.</li>
          <li><strong>Express Backend:</strong> Node API router using secure express-session tokens and JSON Web Token (JWT) authorizations.</li>
          <li><strong>Pure Vanilla CSS:</strong> Fully responsive design custom-built with curated dark mode color systems.</li>
        </ul>
      </section>
    </div>
  );
}
