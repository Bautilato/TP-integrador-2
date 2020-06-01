const db = require('../database/models');
const op = db.Sequelize.Op;
const bcryptjs = require('bcryptjs');

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

        }
        
       
       

       }
   
   

