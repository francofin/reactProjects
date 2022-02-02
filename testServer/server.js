const express = require('express');
require('dotenv').config()
const PORT = process.env.PORT || 3001;
const app = express();

app.get('/rest', function(req, res){
    res.json({
        data:'You hit this endpoint, updated'
    })
})

app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    // log where we can go to test our GQL API);
  });