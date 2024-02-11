const express = require('express');
const cors = require('cors');
const dotenv=require('dotenv').config({path: './.env'});

const app = express();
const PORT=8080;

app.use(express.json());
app.use(cors());

app.get('/', (req,res)=>{
    res.send(`Welcome ${process.env.GITHUB_ACCESS_TOKEN} to Github NodeJS API app!`)
})

app.listen(PORT,()=>console.log(`Server started on port ${PORT}...`))