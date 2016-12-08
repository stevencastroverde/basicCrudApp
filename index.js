const knex = require('./knexConnect');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();


app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.listen(process.env.PORT || 3000, () => console.log('I BE HERE'))


app.get('/movie', function(req, res) {
    knex('movie').then((movies) => {

        res.json(movies)
      })
})

app.get('/movie/:id', function(req,res){
  knex('movie')
  .where('id', req.params.id)
  .then((movie) => {
    res.json(movie);


  })
})


app.post('/movie', function(req, res){
console.log(req.body)
knex('movie')
.insert({title: req.body.title,dateReleased: req.body.dateReleased},'*')
.then((movie) => res.json(movie[0]));


})

app.delete('/movie/:id', function(req,res){

knex('movie')
.where('id' , req.params.id)
.del()
.then(() => knex('movie').orderBy('id','ASC'))
.then((movies) => res.json(movies));
})


// app.put('/movie/:id', fucntion(req, res){
//   knex('movie')
//   .where()
//
//
//
//
//
// })
