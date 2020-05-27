module.exports = function(sequelize, DataTypes){
    const resenia = sequelize.define(
        //nombre del modelo
        'Resenias',
        //columnas de la tabla
        {
            id_pelicula : DataTypes.INTEGER,
            id_usuario: DataTypes.INTEGER,
            resenia_texto: DataTypes.STRING,
            fecha_de_creacion: DataTypes.DATE,
            fecha_de_actualizacion: DataTypes.DATE,
            rating: DataTypes.INTEGER,
        },
        //configuracion adicional
        {
            timestamps: false 
        }

    );
        resenia.associate = function(models){
            resenia.belongsTo(models.Usuarios,{
                as: "usuario" ,
                foreingKey: "id_usuario",

            })
        };



    }
    return resenia;