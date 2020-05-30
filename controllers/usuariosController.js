const db = require('../database/models');
const op = db.Sequelize.Op;

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
            .create(req.body)
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
                where:[ {
                    nombre: {[op.like] : "% loQueSeBusco%" },

                }]
            })
            .then(resultados =>{
                res.render('usuariosResult', {usuarioEncontrado : resultados})
            }) 
            .catch(error =>{
                res.render("errorbusq", {error : error})
            } )
        
        },
        
       
       

       }
   
   

