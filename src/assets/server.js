// Import required modules
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

// Create Express app
const app = express();
const port = 3000; // Choose any port you prefer

// Middleware
app.use(bodyParser.json());

// Database connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'webshop',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Endpoint to handle form submission
app.post('/api/checkout', (req, res) => {
    // Extract form data from request body
    const { fullName, email, address, city, state, zipCode, nameOnCard, cardNumber, expMonth, expYear, cvv } = req.body;

    // Validate form data
    if (!fullName || !email || !address || !city || !state || !zipCode || !nameOnCard || !cardNumber || !expMonth || !expYear || !cvv) {
        res.status(400).json({ error: 'Missing required fields' });
        return;
    }

    // Insert form data into the database
    pool.query(
        'INSERT INTO checkout_info (fullName, email, address, city, state, zipCode, nameOnCard, cardNumber, expMonth, expYear, cvv) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [fullName, email, address, city, state, zipCode, nameOnCard, cardNumber, expMonth, expYear, cvv],
        (error, results) => {
            if (error) {
                console.error('Error inserting checkout information:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }
            res.json({ message: 'Checkout information saved successfully' });
        }
    );
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
