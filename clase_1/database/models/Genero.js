module.exports = (sequelize, dataTypes) => {
    
    const alias = 'Genero';
    const cols = {
        //columnas de nuestra tabla. que necesitamos usar en la vista o dentro de la consulta en el controlador, generalmente se escriben todas las columnas de la table
        name: dataTypes.STRING,
        id: {
            type:dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    }

    const config = {
        tableName: 'genres',
        timestamps: false //columnas adicionales de cada una de las tablas. permiten guardar una fechad e cuando se creo el registro y cuando fue la ultima modificacion del registro. con true asume que las tiene 
    }
    
    const Genero = sequelize.define(alias, cols, config);

    Genero.associate = function(models){
        Genero.hasMany(models.Movie, {
            as: 'Peliculas',
            foreignKey: 'genre_id'
        });
    }

    return Genero;
}