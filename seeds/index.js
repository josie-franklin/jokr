const seedUsers = require('./user-seeds');
const seedJokes = require('./joke-seeds');

const sequelize = require('../config/config');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    
    await seedUsers();
    console.log('--------------');
  
    await seedJokes();
    console.log('--------------');
  
    process.exit(0);
  };
  
  seedAll();