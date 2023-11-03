const express=require('express');
const server=express();
const workout=require('./routes/workout');
const mongoose=require('mongoose');
// middleware
server.use(express.json());
// require('dotenv').config();

mongoose.connect('mongodb://127.0.0.1:27017', {
    dbName: 'netninja'
}).then(() => {
    console.log('data is connected')
}).catch((e) => {
    console.log(e)
})

// routes
server.use( '/api/workout' ,workout);

server.listen(4040,()=>{
    console.log('server is on fire')
})