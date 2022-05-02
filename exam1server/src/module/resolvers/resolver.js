const { Restaurant, Branches, Foods, Order } = require("../model/model");

const resolver= {
  Query: {
    restaurants: () => {
      return Restaurant.findAll({
        include:Branches
      });
    },
    branches: () => {
      return Branches.findAll({
        include:Foods
      });
    },
    foods: () => {
      return Foods.findAll();
    },
    restaurant: (_, { id }) => {
      return Restaurant.findByPk(id, {
        include:Branches
      });
    },
    branch: (_, { id }) => {
      return Branches.findByPk(id, {
        include:Foods
      });
    },
    food: (_, { id }) => {
      return Foods.findByPk(id);
    },
    orders: () => {
      return Order.findAll();
    }
  },
  Mutation: {
     createOrder: (_, { foodId, count, name, phone, price }) => {
      return Order.create({
        foodId,
        count,
        name,
        phone,
        price
      });
    },
    deleteRestaurant: (_, { id }) => {
      Restaurant.destroy({
        where: {
          id
        }
      });
      return Restaurant.findAll();
    },
    createRestaurant: (_, { name, description, image }) => {
      return Restaurant.create({
        name,
        description,
        image
      });
    },
    editRestaurant: (_, { id, name, description, image }) => {
      Restaurant.update(
        {
          name,
          description,
          image
        },
        {
          where: {
            id
          }
        }
      );
      return Restaurant.findAll();
    },
    createBranch: (_, { location, image, restaurantId }) => {
       return Branches.create({
        location,
        image,
        restaurantId
      });
    },
    deleteBranch: (_, { id }) => {
    // delete branch and return branch
       Branches.destroy({
        where: {
          id
        }
      });
      return "Branch deleted";
    },
    editBranch: (_, { id, location, image, restaurantId }) => {
      Branches.update(
        {
          location,
          image,
          restaurantId
        },
        {
          where: {
            id
          }
        }
      );
      return "Branch updated";
    },
    deleteFood: (_, { id }) => {
      Foods.destroy({
        where: {
          id
        }
      });
      return "Food deleted";
    },
    editFood: (_, { id, name, description, image, price, branchId }) => {
      Foods.update(
        {
          name,
          description,
          image,
          price,
          branchId
        },
        {
          where: {
            id
          }
        }
      );
      return "Food updated";
    },
    createFood: (_, { name, description, image, price, branchId }) => {
      return Foods.create({
        name,
        description,
        image,
        price,
        branchId
      });
      
    }

          
  }
};

module.exports = resolver;