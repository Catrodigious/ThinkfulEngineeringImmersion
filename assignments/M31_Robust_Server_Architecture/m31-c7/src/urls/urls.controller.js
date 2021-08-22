const path = require("path");
const urls = require(path.resolve("src/data/urls-data"));
const uses = require(path.resolve("src/data/uses-data"));

const resBodyExists = function(req, res, next){
    const { data: { href = null } } = req.body;
    if (href){
        res.locals.href = href;
        next()
    }else{
        next({status: 400, message: "Please provide an href url"});
    }
}

const hrefExists = function(req, res, next){
    const href = res.locals.href;

    const hrefCopy = urls.find((url)=>url.href === href);
    if (hrefCopy) next({status: 400, message: `${href} already exists in the database...`});
    else
        next();
}

const doesIdExist = function(req, res, next){
    console.log("does Id exist was called");
    const { urlId = null } = req.params;

    const existentUrl = urls.find((url)=>url.id == urlId);
    if (!existentUrl) next({status: 404, message: `urlId ${urlId} does not exist in the database`});
    res.locals.url = existentUrl;
    next();
}

function read(req, res){
    const url = res.locals.url;
    const availUseId = uses.reduce((id, use)=>use.id,0) + 1;
    const newUse = {id: availUseId, urlId: url.id, time: Date.now()}
    uses.push(newUse);
    res.status(200).json({data: url})
}

function update(req, res){
    const url = res.locals.url;
    const href = res.locals.href;
    console.log("url: ", url);

    const index = urls.indexOf(url);

    urls[index].href = href;

    res.status(200).json({data: urls[index]});
}

function create(req, res){
    const availableId = urls.reduce((id, url)=>id=url.id, 0) + 1;
    const newUrl = {href: res.locals.href, id: availableId};
    urls.push(newUrl);

    res.status(201).json({data: newUrl});
}

function list(req, res){
    res.status(200).json({data: urls});
}

module.exports = {
    read: [doesIdExist, read],
    update: [resBodyExists, doesIdExist, update],
    create: [resBodyExists, hrefExists, create],
    list
}