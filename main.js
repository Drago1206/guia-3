//  #El Depto. de Seguridad Pública y Transito de desea saber de los n autos que entran a la ciudad de
// // #Bogotá, cuantos entran con calcomanía de cada color. Conociendo el último dígito de la placa de
// // #cada automóvil se puede determinar el color de la calcomanía utilizando 

addEventListener("DOMContentLoaded",()=>{
let A=0,ros=0,roj=0,verd=0,az=0,N=0
N=Number(prompt("Ingrese el numero de autos: "))
let i=0
while(i<=N){
    i++
    let color=Number(prompt("Ingrese el ultimo numero de su placa que sea del  1 al 9 "))
    if(color<=2){
        A+=1
        document.write(`El total de vehiculos con placa amarilla es de: ${A}<br>`)
    }if(color<=4){
        ros+=1
        document.write(`El total de vehiculos con placa rosada es de: ${ros}<br>`)
    }if(color<=6){
        roj+=1
        document.write(`El total del vehiculos de placa roja es de: ${roj}<br>`)
    }ifelse(color<8);{
        verd+=1
        document.write(`El total de vehiculos de placa verde es de: ${verd}<br>`)
    }if(color==9 && color==0){
        az+=1
        document.write(`El total de vehiculos con placa azul es de: ${az}<br>`)
    }

}
})


