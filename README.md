
# Protein Folding Application

This application simulates and manages protein folding data, utilizing a backend built with Node.js and MongoDB, and a frontend with React. The app allows users to manage protein data, simulate folding, and visualize protein structures.

## Features

- **Backend API** for managing protein data (CRUD operations).
- **MongoDB** for storing protein information.
- **React frontend** for visualizing and interacting with protein data.
- **CSS styling** for a clean and responsive UI.
- **User Authentication** (optional).

## Tech Stack

- **Backend**: Node.js, Express, MongoDB
- **Frontend**: React, Axios
- **Styling**: CSS
- **Database**: MongoDB

## Installation

### Backend

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/protein-folding-app.git
   cd protein-folding-app/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up MongoDB and environment variables:
   - Create a `.env` file and add your MongoDB URI:
     ```plaintext
     MONGO_URI=mongodb://localhost:27017/protein_db
     ```

4. Start the backend server:
   ```bash
   node app.js
   ```

### Frontend

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

## Usage

- Access the frontend at [http://localhost:3000](http://localhost:3000).
- The backend API is available at [http://localhost:5000/api/proteins](http://localhost:5000/api/proteins).

## Future Features

- Advanced protein structure visualization.
- Protein folding simulation algorithms.
- User authentication with JWT.
- API documentation.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
