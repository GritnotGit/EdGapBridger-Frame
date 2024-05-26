const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Handle form submission
app.post('/signup', (req, res) => {
    const { name, email, matrix, social, skills, interests, location } = req.body;

    // Save the form data to a file or a database
    const data = { name, email, matrix, social, skills, interests, location };
    fs.appendFile('signups.json', JSON.stringify(data) + '\n', (err) => {
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
