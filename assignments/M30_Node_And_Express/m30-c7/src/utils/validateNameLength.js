function validateNameLength(req, res, next) {
    const name = req.params.name;

    if (name){
        name.length >= 3 ? next() : next("Name length is too short.");
    }
}

module.exports = validateNameLength;
