function inputValidityCheck(req, res, next){
    const { data } = req.body; 
    if (!data || !data.text){
        next("Request was invalid - please make sure the body object contains a data property");
    }else{
        next();
    }
    
}

module.exports = inputValidityCheck;