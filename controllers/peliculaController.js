const db = require('../database/models');
const op = db.Sequelize.Op;
const bcryptjs = require('bcryptjs');
const moduloLogin = require("../modulo-login");

module.exports = {
    peliculas:function(req,res){
    let peliculaBuscada = req.query.idDePelicula;
     
       
    db.Resenias
    .findAll({
        
        where:{
            id_pelicula: peliculaBuscada 
      },
      include :[{association : 'usuario'}]
    })
    
   .then(resena=>{
       res.render("pelicula",{reseniasEncontradas: resena})
   }) 
       
   
},
   crear: function(req,res) {
       moduloLogin.validar(req.body.email, req.body.password )
       .then(function(usuario ){
           db.Resenias.create ({
             id_pelicula: req.query.idDePelicula,
             id_usuario: usuario.id,
             resenia_texto: req.body.resenia,
             rating: req.body.rating,
            
           })
           .then(function(resultado){
               res.redirect("/home")
           })


       })
 },

   // buscar: function(req, res){
     // let peliculaBuscada = req.params.idDePelicula;
     
       
       // db.Resenias
        //.findAll({
          //  where:{
               // id_pelicula: peliculaBuscada 
          //}})
        
       //.then(resena=>{
         //  res.render("pelicula",{reseniasEncontradas: resena})
       //}) 
           
       
    //},

   };