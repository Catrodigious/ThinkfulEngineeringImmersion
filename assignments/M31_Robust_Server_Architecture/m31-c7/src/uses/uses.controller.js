const path = require("path");
const uses = require(path.resolve("src/data/uses-data"));
const urls = require(path.resolve("src/data/urls-data"));

// https://www.qualified.io/assess/5f7244bf4398e50009e2c689/challenges/5f724342f338ac000a0feeb6?invite=EhU5sC9K9sNVWQ

const doesUrlIdExist = function(req, res, next){
    const { urlId = null } = req.params;

    if (urlId){
        const existentUrl = urls.find((url)=>url.id == urlId);
        if (!existentUrl) next({status: 404, message: `urlId ${urlId} does not exist in the database`});
        res.locals.url = existentUrl;
    }
    next();
}

const doesUseIdExist = function(req, res, next){
    const { useId } = req.params;

    const useObj = uses.find((use)=>use.id == useId);
    if (!useObj) next({status: 404, message: `useId of ${useId} does not exist in the database`});
    res.locals.use = useObj;
    next();
}

const getUses = function(req, res, next){
    const { urlId = null } = req.params;
    if (urlId){
        const usesObj = uses.find((use)=>use.urlId == urlId);
        const availUseId = uses.reduce((id, use)=>use.id, 0) + 1;
        const newUse = {id: availUseId, urlId: urlId, time: Date.now()};
        if (!usesObj) uses.push(newUse);
        res.locals.uses = uses.filter((use)=>use.urlId == urlId);
    }
    next();
}

function read(req, res){
    res.status(200).json({data: res.locals.use});
}

function update(req, res){
    res.status(200).json(`Update called at url: ${req.originalUrl}`);
}

function list(req, res){
    console.log("ok, we're in list now");
    const { urlId = null } = req.params;

    if (urlId){
        const usesArr = res.locals.uses;
        res.status(200).json({data: usesArr});
    }else{
        res.status(200).json({data: uses});
    }
}

function destroy(req, res){
    const index = uses.indexOf(res.locals.use);
    uses.splice(index, 1);
    res.send(204);
}

module.exports = {
    update,
    read: [doesUrlIdExist, doesUseIdExist, read],
    list: [doesUrlIdExist, getUses, list],
    delete: [doesUrlIdExist, doesUseIdExist, destroy]
}