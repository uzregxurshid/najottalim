const pg = require('../lib/pg');

const getBanks = (buildindId, apartmentId,year)=>{
  try {
    const data = pg.fetchAll('SELECT * FROM banks where loan_amount>=(select  getAmount($1,$2)) and loan_period>=$3', [buildindId, apartmentId, year]);
    return data;
  } catch (error) {
      return {error: error.message};
  }
};

module.exports = {
  getBanks
};