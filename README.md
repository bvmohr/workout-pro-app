# Workout Pro



![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

# Workout Pro | Behind the Scenes

***Contributor***: Brian Mohr

## Summary
This project consists of the `Express.js` server that runs the backend for the *Workout Pro* application. 

## Prerequisites
- Must have [Docker](https://docs.docker.com/desktop/) installed
- Be familiar with making API requests with either `curl` or [`Postman`]()

## Setup
1. Clone the repo
```bash
git clone https://github.com/bvmohr/workout_pro_backend.git
```
2. Navigate to the root of the directory and build the image
```bash
docker build -t workout:server .
```
3. Run the container
```bash
docker run --name wp_server -d -p 3000:3000 workout:server
```

## Usage
1. Split your terminal to send `curl` requests. Register a new account in the application
```bash
curl -X POST http://localhost:3000/register \
  -H "Content-Type: application/json" \
  -d '{"username": "jonSnow", "password": "pwd123"}'
```
2. Login into the application
```bash
curl -X POST http://localhost:3000/login \
  -H "Content-Type: application/json" \
  -c cookies.txt \
  -d '{"username": "jonSnow", "password": "pwd123"}'
```
3. View the workouts provided
```bash
curl -X GET http://localhost:3000/workouts -b cookies.txt
```

## Aditional Notes

When making `curl` requests, be sure to have `cookies.txt` when making additional requests after registering.


![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

# Workout Pro | The Face of it All

***Contributor***: Brian Mohr

## Summary
This project consists of the `React.js` client that runs the frontend for the *Workout Pro* application. 

## Setup
1. Clone the repo
```bash
git clone https://github.com/bvmohr/workout_pro_frontend.git
```
2. Download the dependencies
```bash
npm install
```

## Usage
1. Run the React app and visit `http://localhost:5173` on your local machine
```bash
npm run dev
```