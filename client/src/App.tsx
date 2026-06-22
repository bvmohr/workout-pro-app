import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import Home from './routes/Home';
import Login from './routes/Login';
import Register from './routes/Register';
import About from './routes/About';
import Contact from './routes/Contact';
import Dashboard from './routes/Dashboard';
import './assets/css/App.css';

interface AuthContextType {
  username: string | null;
  login: (username: string) => void;
  logout: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

function AuthProvider({ children }: { children: ReactNode }) {
  const [username, setUsername] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Check if session is already active
  useEffect(() => {
    fetch('/api/me')
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Not logged in');
      })
      .then(data => {
        setUsername(data.username);
      })
      .catch(() => {
        setUsername(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const login = (user: string) => {
    setUsername(user);
  };

  const logout = async () => {
    try {
      await fetch('/api/logout', { method: 'POST' });
    } catch (e) {
      console.error("Logout request failed", e);
    }
    setUsername(null);
  };

  return (
    <AuthContext.Provider value={{ username, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

// Separate component for navigation to access the useAuth hook inside BrowserRouter context
function NavigationBar() {
  const { username, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <Link to="/">🏋️‍♂️ WorkoutPro</Link>
      </div>
      <div className="nav-links">
        <Link className="nav-link" to="/">Home</Link>
        {username && <Link className="nav-link" to="/dashboard">Dashboard</Link>}
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
      </div>
      <div className="nav-auth">
        {username ? (
          <div className="user-badge">
            <span className="welcome-text">Hi, <strong>{username}</strong></span>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Link className="cta-btn" to="/login">Get Started</Link>
        )}
      </div>
    </nav>
  );
}

// Protected route wrapper
function ProtectedRoute({ children }: { children: ReactNode }) {
  const { username, loading } = useAuth();

  if (loading) {
    return <div className="loader-container"><div className="loader"></div></div>;
  }

  if (!username) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="app-container">
          <NavigationBar />
          
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } 
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <footer className="app-footer">
            <p>&copy; {new Date().getFullYear()} Workout Pro. All rights reserved.</p>
          </footer>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}
