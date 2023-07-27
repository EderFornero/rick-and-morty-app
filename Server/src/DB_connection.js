require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const userModel = require('./models/User');
const favoriteModel = require('./models/Favorite');

const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
   { logging: false, native: false }
);

userModel(sequelize);
favoriteModel(sequelize);

const { User, Favorite } = sequelize.models;

User.belongsToMany(Favorite, {through: 'user_favorite'});
Favorite.belongsToMany(User, {through: 'user_favorite'});

module.exports = {
   User,
   Favorite,
   conn: sequelize,
};