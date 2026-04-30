![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

# Workout Pro

***Contributor***: Brian Mohr

## Summary
Welcome to `Workout Pro`, the daily fitness journal meant for you! This project consits of a monolithic wep application developed with the sole purpose of exploring web development.

Tech stack:
- `Express.js`, the backend which statically serves 
- `React.js`, the frontend. 

While large scale operations prefer a micro-service paradigm, i.e., the logical separation between the backend, frontend, and database servers, this is a small project focusing on the creativity aspect of app development. 

If the app is scaling larger than expected, I will consider a more robust, public facing, webapp which considers the following:
- `micro-service` architecture (making use of services like Docker Compose)
- `nginx` loadbalancer/http proxy between frontend and backend
- `https` support
- `OIDC` support

## Prerequisits

- You must have `Node v24` installed as that is the current LTS version I am working with

## Setup
1. Clone the repo
```bash
git clone https://github.com/bvmohr/workout-pro-app.git
```
2. Navigate to the root of the directory and install the dependencies
```bash
npm run install:all
```
3. Build the React client distribution
```bash
npm run build
```
4. Run the Express server (entry point for `Workout Pro`)
```bash
npm start
```
***Note***: Instructions for running in dev mode soon to come...

## Usage

1. To view the running web application, navigate to browser and find the local instance:
```bash
http://localhost:3000
```