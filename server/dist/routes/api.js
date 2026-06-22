"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const workouts_1 = __importDefault(require("./workouts"));
require("express-session");
const apiRouter = (0, express_1.Router)();
let users = [];
/**
 * @description Check if a user already exists
 * @param username to look for
 * @returns {Boolean}
 */
const doesExist = (username) => {
    const foundUser = users.filter(user => user.name === username);
    return foundUser.length > 0;
};
/**
 * @description Check if a given user has already been authenticated
 * @param username to look for
 * @param password assigned to username
 * @returns {Boolean}
 */
const authenticatedUser = (username, password) => {
    const validUser = users.filter(user => {
        return user.name === username && user.password === password;
    });
    return validUser.length > 0;
};
// Authentication checking middleware
apiRouter.use('/workouts', (req, res, next) => {
    // Check if user is logged in and has valid access token
    if (req.session && req.session.authorization) {
        const token = req.session.authorization.accessToken;
        // Verify JWT token
        jsonwebtoken_1.default.verify(token, "access", (err, user) => {
            if (!err && user) {
                req.user = user;
                next();
            }
            else {
                res.status(403).json({ message: "User not authenticated" });
            }
        });
    }
    else {
        res.status(401).json({ message: "User not logged in" });
    }
});
// Login endpoint
apiRouter.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Check validity of input
    if (!username || !password) {
        res.status(404).json({ message: "Error logging in" });
        return;
    }
    // Authenticate user
    if (authenticatedUser(username, password)) {
        // Generate JWT access
        const accessToken = jsonwebtoken_1.default.sign({ data: password }, 'access', { expiresIn: 60 * 60 });
        // Store access token and username in session
        req.session.authorization = {
            accessToken,
            username
        };
        res.status(200).json({ message: "User successfully logged in" });
    }
    else {
        res.status(208).json({ message: "Invalid Login. Check username and password" });
    }
});
// Register endpoint
apiRouter.post('/register', (req, res) => {
    const { username, password } = req.body;
    // Check validity of input
    if (username && password) {
        // Check if user already exists
        if (!doesExist(username)) {
            // Add user to users array
            users.push({ name: username, password: password });
            res.status(200).json({ message: "User successfully registered. Now you can login" });
        }
        else {
            res.status(404).json({ message: "User already exists!" });
        }
    }
    else {
        // Invalid input
        res.status(404).json({ message: "Error registering user" });
    }
});
// Get current user endpoint
apiRouter.get('/me', (req, res) => {
    if (req.session && req.session.authorization) {
        res.status(200).json({ username: req.session.authorization.username });
    }
    else {
        res.status(401).json({ message: "Not logged in" });
    }
});
// Logout endpoint
apiRouter.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            res.status(500).json({ message: "Could not log out" });
        }
        else {
            res.clearCookie('connect.sid'); // Clear session cookie
            res.status(200).json({ message: "Logged out successfully" });
        }
    });
});
// Link workoutRouter
apiRouter.use('/workouts', workouts_1.default);
exports.default = apiRouter;
