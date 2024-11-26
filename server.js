import express from 'express';
import connectDB from './backend/db.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
