const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { Router } = require('express');

app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.json([
        {id: 1, name: 'A'},
        {id: 2, name: 'B'}
    ]);
});

app.post('/savedata',(req,res)=>{
    // const user ={name: req.body.name}
    res.json({result:'ok'})
})

Router.post('/',(req,res)=>{
    const user ={name: req.body.name}
    res.json({result:'ok'})
})



app.use((req,res)=>{
    res.type('text/plain');
    res.status(404);
    res.send('404 Not Found');
});

app.listen(3000,()=>{
    console.log('start server port 3000');
});