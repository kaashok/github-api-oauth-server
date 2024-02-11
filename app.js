const express = require('express');
const cors = require('cors');

const app = express();
const PORT=8080;

app.use(express.json());
app.use(cors());

app.get('/', (req,res)=>{
    res.send('Welcome to Github NodeJS API app!')
})

app.listen(PORT,()=>console.log(`Server started on port ${PORT}...`))