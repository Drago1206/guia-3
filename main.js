// #Diseñar un pseudocódigo que calcule el promedio ponderado para alumno del ITT. El cálculo se hace
// #de la siguiente forma:
// #Se multiplica cada calificación por los créditos de cada materia
// #El resultado anterior se suma con los resultados de todas las materias, por separado se suman los
// #créditos de cada materia y finalmente se divide la suma de todas las materias por sus respectivos
// #créditos, entre la suma de todos los créditos. (materias: Fundamentos, BD y ética).

addEventListener("DOMContentLoaded",()=>{
let i=0,est=0
est=Number(prompt("Ingrese el numero de estudiantes que va a calificar: "))
while(i<est){
let calf=0,credf=0,calfbd=0,credbd=0,calfet=0,credet=0
i++
calf=Number(prompt(`Ingrese la calificacion de fundamentos: `))
cred=Number(prompt(`Ingrese los creditos de fundamentos: `))
cafbd=Number(prompt(`Ingrese la calificacion de BD: `))
credbd=Number(prompt(`Ingrese los creditos de BD`))
calfet=Number(prompt(`Ingrese la calificacion de Etica: `))
credet=Number(prompt(`Ingrese los creditos de Etica: `))

let r=(calf*cred*cafbd*credbd*calfet*credet)
let sumcred=(cred+credbd+credet)
let sum=(calf+cafbd+calfet)/sumcred

document.write(`El estudiante No.${i}<br>`)
document.write(`Tiene un promedio ponderado  de: ${sum} <br>`)
document.write(`_____________________________________<br>`)
}


    })


