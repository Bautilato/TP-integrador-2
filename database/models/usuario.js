module.exports = function(sequelize, DataTypes){
    const usuario = sequelize.define(
        //nombre del modelo
        'Usuarios',
        //columnas de la tabla
        {
            nombre : DataTypes.STRING,
            email : DataTypes.STRING,
            password: DataTypes.INTEGER,
            fecha_de_nacimiento: DataTypes.DATE,
        },
        //configuracion adicional
        {
            timestamps: false 
        }

    );

    return usuario;

}