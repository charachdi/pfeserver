module.exports = (sequelize, DataTypes) => {
    const CompteClient  = sequelize.define("CompteClient", {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
        },
      Nom_compteCli: {
        type: DataTypes.STRING,
        allowNull: true
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true
      },
    
    });

    CompteClient.associate = function(models) { 
        CompteClient.hasOne(models.Clientimg ,  { onDelete: 'cascade' })
        CompteClient.belongsTo(models.Service)
        CompteClient.belongsTo(models.Equipe)
    };
   
    return CompteClient;
  };