import { Sequelize } from 'sequelize';
import db from '../connection/configDB.js';
import Buku from './bukuModel.js';
import User from './userModel.js';

const { DataTypes } = Sequelize;

const favorit = db.define(
  'favorit',
  {
    idBuku: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Buku,
        key: 'id',
      },
    },
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      },
    },
  },
  {
    freezeTableName: true,
  }
);

favorit.belongsTo(Buku, { foreignKey: 'idBuku' });
favorit.belongsTo(User, { foreignKey: 'idUser' });

export default favorit;
