const pg = require('../lib/pg');

const getBuildings = async (id) =>{
  try {
    const data = await pg.fetchAll('SELECT * FROM getcompanybuildings($1)', [id]);
    return data;
  } catch (error) {
    return {error: error.message};
  }
};

module.exports = {
  getBuildings
};
