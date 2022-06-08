const errors = require("sails-hook-sockets/lib/errors");



module.exports ={

async create(req,res){
    try{
        
let params= req.allParams();


if(!params.name){
    return res.badRequest({err: "the name is required"})}

else{

const results= await Company.create({

name: params.name,
brief:params.brief,
desc:params.desc,
img:params.img,

});
return res.ok(results);
}
}catch(err){
    return res.serverError(err);
}


}



   ,
async find(req,res){
try{
const companies= await Company.find();

return res.ok(companies);
}catch(err){
    return res.serverError(err);
}

}
,


async findOne(req,res){
    try{

const MyCompany= await Company.findOne({

    id: req.params.id
   
});


return res.ok(MyCompany);


    }catch(err){
return res.serverError(err);
    }

}
,




}