// ZADATAK 5

let polje_br = [1,2,3,4,5,6,7,8,9,10]

let dijeljivi_s_tri = (arr) =>{
    let temp = []
    for(let i of arr){
        if(i%3==0){
            temp.push(i)
        }
    }

    return console.log("Zadatak 5"),console.log(arr, "->","brojevi dijeljivi s 3",temp);
}


let rez4 = dijeljivi_s_tri(polje_br)