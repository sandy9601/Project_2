const CollegeModel = require('../Models/CollegeModel')

const createCollege = async function(req,res){
    try {
        let data = req.body
        let createdCollege = await CollegeModel.create(data)
        res.status(201).send({status:true, data:createdCollege})
    } catch (err) {
        res.status(500).send({status:false, error:err.message})
    }
}

module.exports.createCollege = createCollege