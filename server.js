//___________________
//Dependencies
//___________________
const express = require('express');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
// const Carbon = require('./models/carbon.js')
const cors =require('cors')
require('dotenv').config()
app.use(cors())
//________________

//___________________
//Port
//___________________
const PORT = process.env.PORT
//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to Mongo &
// Fix Depreciation Warnings from Mongoose
// May or may not need these depending on your Mongoose version
mongoose.connect(MONGODB_URI)

//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project
//___________________
// Routes

app.post('/topic', (req, res)=>{
  Topic.create(req.body)
  .then((createdTopic)=>{
      res.json(createdTopic)
  })
});


app.get('/topic', (req, res)=>{
  Topic.find({})
  .then((foundTopic) => {
      res.json(foundTopic)
  })
});

app.delete('/topic/:id', (req, res)=>{
  Topic.findByIdAndRemove(req.params.id)
  .then((deletedTopic)=> {
      res.json(deletedTopic)
  })
});

app.put('/topic/:id', (req, res) => {
  Topic.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then((updatedTopic) => res.json(updatedTopic))
});

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));

