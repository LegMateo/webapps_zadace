
//ZADATAK 9

let obj1 = {
    a:1,
    b:2,
    c:3
}

let obj2 = {
    a:1,
    b:2,
    c:3
}

//console.log(Object.keys(obj2))
//console.log(Object.keys(obj1))

let key = (li,la) => {
    let liKey = Object.keys(li).sort();
    let laKey = Object.keys(la).sort();
    return JSON.stringify(liKey) === JSON.stringify(laKey); 

}

let rez8 = key(obj1,obj2)
console.log("Zadatak 9")
console.log(obj1,obj2,"->",rez8)