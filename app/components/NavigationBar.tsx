'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

export default function NavigationBar() {
  const { username, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    await logout();
    router.push('/login');
  };

  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <svg className="icon-svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem', stroke: 'url(#cyan-blue-grad)' }}>
            <defs>
              <linearGradient id="cyan-blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--accent-cyan)" />
                <stop offset="100%" stopColor="var(--accent-blue)" />
              </linearGradient>
            </defs>
            <path d="M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2M4 8H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2M6 5h2v14H6zm10 0h2v14h-2zM8 12h8" />
          </svg>
          WorkoutPro
        </Link>
      </div>
      <div className="nav-links">
        <Link className={`nav-link ${pathname === '/' ? 'active' : ''}`} href="/">Home</Link>
        {username && <Link className={`nav-link ${pathname === '/dashboard' ? 'active' : ''}`} href="/dashboard">Dashboard</Link>}
        <Link className={`nav-link ${pathname === '/about' ? 'active' : ''}`} href="/about">About</Link>
        <Link className={`nav-link ${pathname === '/contact' ? 'active' : ''}`} href="/contact">Contact</Link>
      </div>
      <div className="nav-auth">
        {username ? (
          <div className="user-badge">
            <span className="welcome-text">Hi, <strong>{username}</strong></span>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Link className="cta-btn" href="/login">Get Started</Link>
        )}
      </div>
    </nav>
  );
}
