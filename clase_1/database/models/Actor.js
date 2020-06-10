module.exports = (sequelize, dataTypes) => {
    
    const alias = 'Actor';
    const cols = {
        //columnas de nuestra tabla. que necesitamos usar en la vista o dentro de la consulta en el controlador, generalmente se escriben todas las columnas de la table
        first_name: dataTypes.STRING,
        id: {
            type:dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        last_name: dataTypes.INTEGER,
    }

    const config = {
        timestamps: false //columnas adicionales de cada una de las tablas. permiten guardar una fechad e cuando se creo el registro y cuando fue la ultima modificacion del registro. con true asume que las tiene 
    }
    
    const Actor = sequelize.define(alias, cols, config);

    Actor.associate = (models) => {
        Actor.belongsToMany(models.Movie, {
            as: 'peliculas',
            through: 'actor_movie',
            foreingKey: 'actor_id',
            otherKey: 'movie_id',
            timestamps: false
        });
    }
    
    return Actor;
}