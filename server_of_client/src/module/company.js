const pg =require('../lib/pg');

const getCompanies = async ()=>{
 try {
    const data = await pg.fetchAll('SELECT * FROM company');
    return data;
 } catch (error) {
    return {error: error.message};
 }
};

module.exports = {
  getCompanies
};