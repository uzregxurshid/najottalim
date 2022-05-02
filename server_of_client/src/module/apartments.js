const pg = require('../lib/pg');

const getApartments = async (id)=>{
  try {
    const data = await pg.fetchAll('SELECT * FROM apartment where building_id=$1', [id]);
    return data;
  } catch (error) {
    return {error: error.message};
  }
};

module.exports = {
  getApartments
};