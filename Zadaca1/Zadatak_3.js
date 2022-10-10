//ZADATAK 3

let list = [];
for (var i = 100; i<=150000; i++){
list.push(i);}
//console.log(list)
let broj = 155000

let provjera = (broj) =>{
    for (s of list){
    if(broj<list[0] || broj>list[150000]){
        return console.log("Zadatak 3"),console.log(broj, "->", broj, "nije unutar [100,150000]");
    }
    else return console.log("Zadatak 3"),console.log(broj, "->", broj, "je unutar [100,150000]");
}
}


let rez1 = provjera (broj)
