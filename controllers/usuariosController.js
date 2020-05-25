const db = require('../database/models');

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
    }
   
   
   }