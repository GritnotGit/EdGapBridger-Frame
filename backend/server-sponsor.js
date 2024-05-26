const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001; // Use a different port for the sponsor signup

// Middleware to parse JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public-sponsor')));

// Handle form submission
app.post('/signup', (req, res) => {
    const { name, email, matrix, social, supportType, interests, location } = req.body;

    // If I wld be a fullstack dev with more time, then here cld be the Allo Protocoll implemented or some fun mint

    // Save the form data to a file or a database
    const data = { name, email, matrix, social, supportType, interests, location };
    fs.appendFile('signups-sponsor.json', JSON.stringify(data) + '\n', (err) => {
        if (err) {
            console.error('Error saving data', err);
            res.status(500).send('Error saving data');
            return;
        }
        res.send('Thank you for signing up!');
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
