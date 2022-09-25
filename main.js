addEventListener("DOMContentLoaded",()=>{
let gall=0,i=0
gall=Number(prompt("Ingrese el numero de gallinas que desea saber su calidad : "))
    while(i<=gall){
        i++;
    let pes=0,alt=0,n=0
        pes=Number(prompt("Ingrese el peso de la gallina: "))
        alt=Number(prompt("Ingrese la altura de la gallina: "))
        n=Number(prompt("Ingrese le numero de huevos que pone: "))
        let calidad=(pes*alt)/n
        document.write(`- El precio por ventas del kilo de la gallina ${i} es de: ${calidad}<br>`)
        document.write("-")
}
})


