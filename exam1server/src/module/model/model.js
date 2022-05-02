const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgres://cdqhhwnr:m0w8tf7BcJP3K5xUI7d026-7FIZQeB8o@kesavan.db.elephantsql.com/cdqhhwnr');

const Restaurant = sequelize.define('restaurant', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false
  }
});


const Branches = sequelize.define('branches', {
  location: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false
  }
});



const Foods = sequelize.define('foods', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});


const Order = sequelize.define('order', {
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      foodId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      count: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
});

  

Restaurant.hasMany(Branches);
Branches.belongsTo(Restaurant);

Branches.hasMany(Foods);
Foods.belongsTo(Branches);

module.exports = {
  Restaurant,
  Branches,
  Order,
  Foods,  
  sequelize
};


