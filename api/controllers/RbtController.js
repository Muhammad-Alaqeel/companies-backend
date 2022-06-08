/**
 * RbtController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */



module.exports = {
  



async create(req,res){

try{

const params= req.allParams();

if(!params.name || !params.brief){

    return res.badRequest({err:"brief and name are required"});
}

const result= await Rbt.create({
    name: params.name,
    brief: params.brief,

    
    }
    )

return res.ok(result);



}catch(err){

    return res.serverError(err);
}


}
,

async find(req,res){

    try {
        
        const rbts= await Rbt.find();

return res.ok(rbts);


    } catch (err) {
       return res.serverError(err); 
    }
},


};

