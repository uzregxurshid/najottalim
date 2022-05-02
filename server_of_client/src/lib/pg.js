const {Pool} = require('pg');

class Pg{
  constructor(){
    this.pool = new Pool({
      connectionString: process.env.DATABASE_URL
    });
  }    

  async fetch(query, params){
    const client = await this.pool.connect();
    try{
      const result = await client.query(query, params);
      return result.rows[0];
    }finally{
      client.release();
    }
  }

  async fetchAll(query, params){
    const client = await this.pool.connect();
    try{
      const result = await client.query(query, params);
      return result.rows;
    }finally{
      client.release();
    }
  }

  

}

module.exports = new Pg();