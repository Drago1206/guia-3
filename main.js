// #Se está realizando un estudio del tráfico en una de las calles de su ciudad. Para ello deberá controlar
// #durante un cierto tiempo los vehículos que pasan por dicha calle.
// #Los distintos tipos de vehículo será: Turismo, Autobús, Camión o Motocicleta. Además, si el tipo de
// #vehículo es Turismo debe anotar el número de ocupantes.
// #El programa deberá contar 200 vehículos, e ir guardando cuantos pasan de cada tipo.
// #Finalmente mostrará el porcentaje de cada uno de los tipos.

addEventListener("DOMContentLoaded",()=>{
let i=0,M=0,CA=0,C=0,A=0,T=0
while(i>=2){
    i++
let selec=Number(prompt(`Ingrese el peso del vehiculo: `))
    if(selec<=250){
        M+=1
        let porcentm=((M/M)*100)
        document.write(`El porcentaje total de motos es de: ${porcentm}`)
    }ifelse(selec<=1020);{
        T+=1
        let porcenT=((T/T)*100)
        document.write(`El porcentaje total de Turismo es de: ${porcenT}`)
    }if(selec<=2000){
        CA+=1
        let porcenCA=((CA/CA)*100)
        document.write(`El porcentaje total de carros es de: ${porcenCA}`)
    }ifelse(selec<=15000);{
    let porcenA=((A/A)*100)
    document.write(`El porcentaje total de Autobuses es de: ${porcenA}`)
    }if(selec<=25000){
        C+=1
        let porcenC=((C/C)*100)
        document.write(`El porcentaje total de camiones es de: ${porcenC}`)
    }

    }
})


