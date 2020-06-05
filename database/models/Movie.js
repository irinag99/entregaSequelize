module.exports = (sequelize, dataTypes) => {
    
    const alias = 'Movie';
    const cols = {
        //columnas de nuestra tabla. que necesitamos usar en la vista o dentro de la consulta en el controlador, generalmente se escriben todas las columnas de la table
        title: dataTypes.STRING,
        id: {
            type:dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        rating: dataTypes.INTEGER,
        awards: dataTypes.INTEGER,
        length: dataTypes.INTEGER,
        releaseDate: dataTypes.INTEGER
    }

    const config = {
        timestamp: true //columnas adicionales de cada una de las tablas. permiten guardar una fechad e cuando se creo el registro y cuando fue la ultima modificacion del registro. con true asume que las tiene 
    }
    
    const Movie = sequelize.define(alias, cols, config);

    return Movie;
}