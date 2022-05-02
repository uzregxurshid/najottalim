const flowermodel = require('../model/flowers');
class flowers{
  async getFlowers(req, res){
    try {
      const flowers = await flowermodel.find();
      res.json(flowers);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
  async addFlowers(req, res){
    try {
      const newFlower = new flowermodel(req.body)
      const flower = await newFlower.save(async err=>{
        if(err){
         return res.status(500).json(err.message);
        }else{
          const flowers =  await flowermodel.find();
          res.json(flowers);
        }
      });
      } catch (error) {
      res.status(500).json(error.message);
    }
  }


  async updateFlowers(req, res){
    try {
      await flowermodel.findByIdAndUpdate(req.body._id, req.body);
      const flowers = await flowermodel.find();
      res.json(flowers);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async deleteFlowers(req, res){
    try {
      await flowermodel.findByIdAndDelete(req.body._id);
      const flowers = await flowermodel.find();
      res.json(flowers);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

module.exports = new flowers(); 