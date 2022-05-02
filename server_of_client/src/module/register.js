const pg = require("../lib/pg");

const registerCustomer = async (n,s,p,e,a)=>{
  try {
    const query = 'INSERT INTO customers (name, surname, phone, email, apartment_id) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const values = [n,s,p,e,a];
    const data = await pg.fetch(query, values);
    return data.id;
  } catch (error) {
    return {error: error.message};
  }
};

const register = async (a,b,n,s,e,p,m)=>{
  try {
    const customerId = await registerCustomer(n,s,p,e,a);
    if (customerId.error) {
      return {error: customerId.error};
    }
    const query = 'INSERT INTO application_for_loan(customer_id, bank_id,apartment_id,monthly_payment) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [customerId,b,a,m];
    const data = await pg.fetch(query, values);
    return data.id;
  } catch (error) {
    return {error: error.message};
  }
};

module.exports = {
    register
};