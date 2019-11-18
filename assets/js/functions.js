"use strict";

let setLocalStorage = (obj, name) => {
    let objInJSONFormat = JSON.stringify(obj);
    localStorage.setItem(name, objInJSONFormat);
    return objInJSONFormat;
}

let getLocalStorage = name => {
    let objGetInJSONFormat = localStorage.getItem(name);
    let obj = JSON.parse(objGetInJSONFormat);
    return obj;
}

