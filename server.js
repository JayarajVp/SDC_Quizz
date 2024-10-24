const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from the public directory
app.use(express.static('public'));
app.use(express.json());

// Save student score to JSON file
app.post('/submit-score', (req, res) => {
    const newScore = req.body;
    const scoresFile = path.join(__dirname, 'data', 'scores.json');
    
    // Read existing scores
    fs.readFile(scoresFile, 'utf8', (err, data) => {
        let scores = [];
        if (!err && data) {
            scores = JSON.parse(data);
        }

        // Add new score
        scores.push(newScore);
        
        // Save updated scores
        fs.writeFile(scoresFile, JSON.stringify(scores, null, 2), err => {
            if (err) return res.status(500).send('Error saving score');
            res.send('Score saved successfully');
        });
    });
});

// Display scores on main computer
app.get('/main_score.html', (req, res) => {
    const scoresFile = path.join(__dirname, 'data', 'scores.json');
    fs.readFile(scoresFile, 'utf8', (err, data) => {
        if (err) return res.status(500).send('Error loading scores');
        
        const scores = JSON.parse(data);
        let html = '<h1>Quiz Results</h1><ul>';
        scores.forEach(score => {
            html += `<li>${score.name}: ${score.score}, Time: ${score.time} seconds</li>`;
        });
        html += '</ul>';
        res.send(html);
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
