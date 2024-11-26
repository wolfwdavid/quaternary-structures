const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, '../frontend')));

// Handle all routes and send the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
