const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
      // defino el modelo
      sequelize.define('recipe', {
            title: {
                  type: DataTypes.STRING,
                  allowNull: false,
                  unique: true,
            },
            id: {
                  type: DataTypes.INTEGER,
                  primaryKey: true,
                  autoIncrement: true,
            },
            image: {
                  type: DataTypes.STRING,
                  defaultValue:
                        'https://img.favpng.com/22/2/12/catering-food-computer-icons-logo-event-management-png-favpng-4ju2xAb25XdBdKZzyZprTjPkn.jpg',
            },
            summary: {
                  type: DataTypes.TEXT,
                  allowNull: false,
            },
            healthScore: {
                  type: DataTypes.INTEGER,
            },
            analyzedInstructions: {
                  type: DataTypes.TEXT,
            },
      });
};
