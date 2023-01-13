const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/answers', (req, res) => {
    res.sendFile(__dirname + '/api/answers.json');
});