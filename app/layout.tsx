import type { Metadata } from 'next';
import { AuthProvider } from './context/AuthContext';
import NavigationBar from './components/NavigationBar';
import './styles/index.css';
import './styles/App.css';
import './styles/routes.css';

export const metadata: Metadata = {
  title: 'Workout Pro',
  description: 'A daily fitness journal application built to track your workouts, manage split routines, and log notes for individual exercises.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <div className="app-container">
            <NavigationBar />
            
            <main className="main-content">
              {children}
            </main>

            <footer className="app-footer">
              <p>&copy; {new Date().getFullYear()} Workout Pro. All rights reserved.</p>
            </footer>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
