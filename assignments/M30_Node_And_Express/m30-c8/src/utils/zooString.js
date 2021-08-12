const getZoos = require("./getZoos");

function zooString(zip){
    const zoos = zip ? getZoos(zip) : getZoos();

    if (zoos && zoos.length > 0){
        const msg = zoos.reduce((acc, zoo)=>{
            if (zoos.indexOf(zoo) != zoos.length - 1){
                acc += `${zoo}; `;
                return acc;
            }else{
                acc += `${zoo}`
                return acc;
            }
        }, "");
        if (!zip)
            return `All zoos: ${msg}`;
        else
            return `${zip} zoos: ${msg}`;
    }
    return null;
}

module.exports = zooString;