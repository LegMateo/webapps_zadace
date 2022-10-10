//ZADATAK 7

let lista = [];
for (var i = 0; i<=100; i++){
lista.push(i);}
let br = 23
let vskr = 7
let brojac = 0
let reziccvaja = 1
let visekratnik = (br) =>{
    for (s of lista){
        if(br<lista[0] || br>lista[100]){
            return console.log("Zadatak 7"),console.log(br, "->", br, "nije unutar [0,100]");
        }
        else {

          
                while(vskr<br){
                    vskr = vskr + 7
                    brojac++
                    reziccvaja = reziccvaja * (brojac * 7)
                }

                
            
            return console.log("Zadatak 7"),console.log(br, "->", br, "je unutar [0,100]"),
            console.log(br, "-> ",reziccvaja);
            
        }
    }

}

let rez6 = visekratnik(br)