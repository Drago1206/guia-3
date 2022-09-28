addEventListener("DOMContentLoaded",()=>{

    let estudiantes=0,acum=0
    
        while(estudiantes<5){
            let nombre = (prompt(`Ingresa tu nombre y apellido: `))
            let edad = Number(prompt(`Ingresa tu edad: `))
            let nota = Number(prompt(`Ingresa tu nota: `))
            
            document.write(`Estudiante: ${nombre}  Nota: ${nota} <br>`)
            estudiantes+=1
            acum+=nota
            let promedio=(acum/5)
            document.write(`La nota promedio de los 5 estudiantes es: ${promedio}<br>`)
            document.write(`_____________________________________________<br>`)
        }
})


