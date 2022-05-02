const {getCompanies} = require('../module/company');
const {getBuildings} = require('../module/buildings');
const {getApartments} = require('../module/apartments');
const {getBanks} = require('../module/banks');
const {register} = require('../module/register');
class publicControllers{
  async getCompanies(_, res){
    try {
      const data = await getCompanies();
      res.type('application/json');
      res.status(200).send(data);
    } catch (error) {
      res.send({error: error.message});
    }
  }

  async getBuildings(req, res){
    try {
      const data = await getBuildings(req.query.id);
      res.type('application/json');
      res.status(200).send(data);
    } catch (error) {
      res.send({error: error.message});
    }
  }
  
  async getApartments(req, res){
    try {
      const data = await getApartments(req.query.id);
      res.type('application/json');
      res.status(200).send(data);
    } catch (error) {
      res.send({error: error.message});
    }
  }

  async getBanks(req, res){
    try {
      const data = await getBanks(req.query.b, req.query.a, req.query.y, req.query.m);
      res.type('application/json');
      res.status(200).send(data);
    } catch (error) {
      res.send({error: error.message});
    }
  }

  
  async register(req, res){
    try {
      const customerId = await register(req.query.a, req.query.b, req.query.n, req.query.s, req.query.e, req.query.p, req.query.m);
      res.type('application/json');
     res.json('ok');
    } catch (error) {
      res.send({error: error.message});
    }
  }
  

    
}
module.exports = new publicControllers();