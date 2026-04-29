import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './routes/Home';
import Login from './routes/Login';
import Register from './routes/Register';
import About from './routes/About';
import Contact from './routes/Contact';
import './assets/css/App.css';

export default function App() {
	return (
		<BrowserRouter>
			{/* Navigation Bar */}
			<nav>
				<Link className="nav-link" to="/">Home</Link>
				<Link className="nav-link" to="/about">About</Link>
				<Link className="nav-link" to="/contact">Contact Us</Link>
				<Link className="nav-link" to="/login">Get Started</Link>
			</nav>

			{/* Routes */}
			<Routes>
				<Route path="/" element={<Home className="home" />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>

		</BrowserRouter>
	);
}
