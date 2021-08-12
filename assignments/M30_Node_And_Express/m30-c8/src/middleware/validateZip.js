function validateZip(req, res, next) {
    const { zip } = req.params;
    if (zip && !isNaN(zip) && zip.length === 5){
        next();
    }else{
        console.log(zip);
        next(`(${zip}) is invalid!`);
    }
}

module.exports = validateZip;
