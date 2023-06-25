import { Sequelize } from 'sequelize';
import db from '../connection/configDB.js';
const { DataTypes } = Sequelize;

const user = db.define(
  'user',
  {
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    refresh_token: {
      type: DataTypes.TEXT,
    },
  },
  {
    freezeTableName: true,
  }
);

export default user;
