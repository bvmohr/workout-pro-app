"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_session_1 = __importDefault(require("express-session"));
const path_1 = __importDefault(require("path"));
const api_1 = __importDefault(require("./routes/api"));
const app = (0, express_1.default)();
const distPath = __dirname.endsWith('dist')
    ? path_1.default.join(__dirname, "../../client/dist")
    : path_1.default.join(__dirname, "../client/dist");
// Server setup
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, express_session_1.default)({
    secret: "fingerprint",
    resave: true,
    saveUninitialized: true
}));
app.use(express_1.default.static(distPath));
// Configure routing
app.use('/api', api_1.default);
// Serve front-end for any non-API request (to support client-side React Router routing)
app.get(/.*/, (req, res) => {
    res.sendFile(path_1.default.join(distPath, "index.html"));
});
exports.default = app;
