module.exports = function (sequelize, DataTypes) {
    const Model = sequelize.define('Bot',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        platform: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                  msg: 'Por favor, rellena el campo "platform".'
                },
                notEmpty: {
                  msg: 'Por favor, rellena el campo "platform".'
                }
              }
          },
          name: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: {
                  msg: 'Por favor, rellena el campo "Name".'
                },
                notEmpty: {
                  msg: 'Por favor, rellena el campo "Name".'
                }
              }
          },
          description: {
            type: DataTypes.TEXT,
            allowNull: false
          },
          token: {
            type: DataTypes.STRING,
            allowNull: false
          },
        createdAt: {
          type: DataTypes.DATE,
          get () {
            return this.getDataValue('createdAt')
              ? this.getDataValue('createdAt').toISOString().split('T')[0]
              : null
          }
        },
        updatedAt: {
          type: DataTypes.DATE,
          get () {
            return this.getDataValue('updatedAt')
              ? this.getDataValue('updatedAt').toISOString().split('T')[0]
              : null
          }
        }
      }, {
        sequelize,
        tableName: 'bots',
        timestamps: true,
        paranoid: true,
        indexes: [
          {
            name: 'PRIMARY',
            unique: true,
            using: 'BTREE',
            fields: [
              { name: 'id' }
            ]
          }
        ]
      }
    )
  
    Model.associate = function (models) {
  
    }
  
    return Model
  }