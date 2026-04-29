import { Link } from 'react-router-dom';
import '../assets/css/routes.css'

function Home({ className }) {
    
    // !(loggedIn) ? display welcome message : workouts home
    // !(registered) ? display register page : login page
    return (
        <div className={className}>
            <h1>Welcome to Workout Pro</h1>
            <button><Link className="button-link" to="/login">Get Started</Link></button>
	    </div>
    );
}

export default Home;
