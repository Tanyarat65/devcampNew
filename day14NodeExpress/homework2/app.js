const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(bodyParser.json());



app.get('/api/users', (req, res) => {
    res.sendFile(path.resolve(__dirname,'user.json'));
   });
   



app.listen(3000, () => {
 console.log('server started on port 3000!');
});
