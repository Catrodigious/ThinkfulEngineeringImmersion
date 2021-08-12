const express = require("express");
const app = express();
const getZoos = require("./utils/getZoos");
const validateZip = require('./middleware/validateZip');
const zooString = require('./utils/zooString');

app.get('/check/:zip', validateZip, (req, res, next)=>{
    const { zip } = req.params;
    const zoos = getZoos(zip);
    if (zoos)
        res.send(`${zip} exists in our records.`);
    else
        res.send(`${zip} does not exist in our records.`);
});


app.get('/zoos/all', (req, res, next)=>{
    const { admin } = req.query;

    if (admin === "true"){
        const msg = zooString();
        if (msg) res.send(msg);
    }
    res.send("You do not have access to that route.");
})

app.get('/zoos/:zip', validateZip, (req, res, next) => {
    const { zip } = req.params;
    const msg = zooString(zip);
    if (msg){
        res.send(msg);
    }else{
        res.send(`${zip} has no zoos.`);
    }
})

app.use((req, res, next) => {
    res.send('That route could not be found!');
})

app.use((err, req, res, next) => {
    res.send(`Zip ${err}`);
})

module.exports = app;