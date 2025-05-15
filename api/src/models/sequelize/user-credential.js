module.exports = function (sequelize, DataTypes) {
    const Model = sequelize.define('UsersCredential',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                  msg: 'Por favor, rellena el campo "Nombre".'
                },
                notEmpty: {
                  msg: 'Por favor, rellena el campo "Nombre".'
                }
              }
            
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                  args: true,
                  msg: 'Debe ser um e-mail válido'
                },
                notNull: {
                  msg: 'Por favor, rellena el campo "Email".'
                },
                notEmpty: {
                  msg: 'Por favor, rellena el campo "Email".'
                }
              }
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                  msg: 'Por favor, rellena el campo "Contraseña".'
                },
                notEmpty: {
                  msg: 'Por favor, rellena el campo "Contraseña".'
                }
              }
          },
          lastPasswordChance: {
            type: DataTypes.DATE,
            allowNull: false,
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
        tableName: 'users_credentials',
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