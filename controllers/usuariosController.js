const db = require('../database/models');
const op = db.Sequelize.Op;
const bcryptjs = require('bcryptjs');
const moduloLogin = require("../modulo-login");

module.exports = {
    index: (req,res) => {
        db.Usuarios
            .findAll()
            .then(usuarios =>{
                res.render('usuarios', {
                    listaDeUsuarios : usuarios
                })
            }) 
            .catch(error =>{
                res.send(error)
            } )
    },
    registracion: function(req, res){
        res.render("registracion")
        

    },
    guardar:(req, res) => {
        db.Usuarios
            .create({
                nombre: req.body.name,
                email: req.body.email,
                fecha_de_nacimiento: req.body.fechaDeNacimiento,
                password: bcryptjs.hashSync(req.body.password,10),
                
            
            
            })
            .then(usuarioGuardado =>{
                return res.redirect('/usuarios')
            })
            .catch(error =>{
                res.send(error)
            } )
    },
    
        buscador: function(req, res){
            res.render("buscadorUsuarios")
        },

        buscar: function(req, res){
            let loQueSeBusco = req.query.search;
            db.Usuarios
            .findAll({
                where: {
                    [op.or] : {
                    nombre: {[op.like] : "%" + loQueSeBusco + "%" },
                    email: {[op.like]:"%" + loQueSeBusco + "%" }

                }
                }})
            .then(resultados =>{
                res.render('usuariosResult', {usuarioEncontrado : resultados})
            }) 
            .catch(error =>{
                res.render("errorbusq", {error : error})
            } )
        
        },
        detalle: function (req,res){
            
            // db.Usuarios
            // .findByPk(req.params.id)
            // .then(function(usuario){
            //     db.Resenias.findAll({
            //         where : [
            //             id_usuario == req.params.id
            //         ]})
            // })
            // .then(function(reviews){
            //     res.render('detalle', {
            //         usuarioDet:results, 
            //         reviews:reviews,
            //     })})
    
            db.Usuarios.findByPk(req.params.id, {
                include :[{association : 'resenias'}]
            })
            .then(user => {
                
                res.render('detalle', {usuarioDet:user})


            })

        },
        logUsuario: function(req,res){
            res.render("login", {tipo: "log",})

        },
        confirmUsuario: function(req, res){
            moduloLogin.validar(req.body.email, req.body.password)
            .then(resultado=>{
                if(resultado==undefined){
                    res.redirect("/usuarios/reviews");

                } else {
                   res.redirect("/usuarios/reviews/" + resultado.id) 
                }
      
            })

        },

        userReviews: function(req, res) {
            db.Resenias.findAll({
                where: [{
                    id_usuario: req.params.id
                }
            ]
                
            })
           .then(resultado=>{
               res.render("reviews", {
                   resultado: resultado
               })

           })
            
        },

        editar: function(req,res){
            db.Resenias.findOne({  
                where: [{id: req.params.id}]
            })
            .then(resultado=>{
                res.render('editReview',{resultado:resultado})
            })
        
        },

        confirmacionEdit: function(req,res){
            moduloLogin.validar(req.body.email, req.body.password)
            .then(resultado=>{
                if(resultado != undefined){
                    db.Resenias.update({
                        resenia_texto: req.body.resena,
                        rating: req.body.rating,
                    }, {
                            where:{
                                id: req.params.id
                            }

                    })
                    
                    .then(() => {
                        res.redirect('/usuarios/reviews/' + resultado.id);
                    })
                }else{
                        return res.redirect('/usuarios/registracion')
                    }
                
            })




        },
        borrarReview: function(req,res){
            res.render("login", {
                tipo:"delete", deleteId: req.params.id
            })
        },

        confirmacionBorrar: function(req,res){
            moduloLogin.validar(req.body.email, req.body.password)
            .then(resultado=> {
                if(resultado!=null ){
                    db.Resenias.destroy({
                        where:{
                            id: req.params.id, 
                        }


                    }) 
                    res.redirect("/usuarios/reviews/ " + resultado.id)
                    } else {
                        res.redirect("/usuarios/registracion")
                    }                   
                
            })
        }

        
       
       

       }
   
   

