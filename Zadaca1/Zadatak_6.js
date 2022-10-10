//ZADATAK 6



String.prototype.toCamelCase = function (string) {
    return string 
        .replace(/\s(.)/g, function($1) {return $1.toUpperCase();})
        .replace(/\s/g, '')
        .replace(/^(.)/,function($1){return $1.toLowerCase();});
}

let rez5 = String.prototype.toCamelCase("web apps vjezbe")
console.log("Zadatak 6")
console.log("web apps vjezbe","->",rez5)