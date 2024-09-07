# PharmaFlow

## Problem Statement: PS 1627

PharmaFlow is designed to ensure the efficient and effective procurement and distribution of drugs within the healthcare system. The system aims to ensure the availability of drugs at all times by providing the "Right Quantity of the Right Product" at the "Right Place" at the "Right Time" under the "Right Conditions" at the "Right Cost" for the "Right People."

### Objectives:
- Streamline the distribution of drugs to institutions.
- Improve efficiency and effectiveness of procurement and distribution systems through robust quality controls.
- Provide dashboard-based online monitoring of all activities at each level.
- Track vendor activities like preparation of supply orders, shipments, etc.
- Monitor drug consumption patterns at hospitals/medical institutions.

### Technologies Used:
- **Node.js**: For building the backend server.
- **Express.js**: A web framework for Node.js.
- **MongoDB Atlas**: A cloud-based NoSQL database for storing data.
- **Mongoose**: An ODM library for MongoDB and Node.js.
- **JSON Web Tokens (JWT)**: For user authentication.
- **bcrypt**: For password hashing.
- **Nodemon**: For automatic server restarts during development.
- **dotenv**: For managing environment variables.
- **Helmet**: For security best practices.
- **Morgan**: For logging HTTP requests.
- **CORS**: For handling cross-origin requests.

### Setup Instructions

Follow these commands to set up the project:

```bash
# Navigate to the backend directory
cd backend

# Initialize a new Node.js project
npm init -y

# Install required dependencies
npm install body-parser dotenv express helmet morgan cors mongoose

# Install nodemon as a development dependency
npm install --save-dev nodemon

# Install additional dependencies
npm install mongodb
npm install bcryptjs
npm install jsonwebtoken
