// ZADATAK 4

let x = 61

let satUmin = (broj) =>{
    let sati = Math.round( x/60 );
    let min = x - (sati*60);

return console.log("Zadatak 4"),console.log(x, "->","Ovo je",sati,"sata","i",min,"minuta");
}

let rez3 = satUmin(x)