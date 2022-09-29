addEventListener("DOMContentLoaded",()=>{
let est=0, i=0
while(i<est){
    ++i
    let uni=0,nom=""
    nom=prompt("Ingrese el nombre del estudiante: ")
    uni=Number(prompt(`Ingrese una de las calificaciones de ${nom}`))
    let nc=Number(prompt("Ingrese el numero de calificaciones que tiene el estudiante: "))
    for(let i=0;i<nc;i++){
        let calf=0
        calf=Number(prompt(`Ingrese la ${i} calificacion: `))
        let prom=(uni+calf)/i
        document.write(`El promedio de ${nom} es de: ${prom}`)
        if(prom<5){
            document.write(`El estudiante tiene que nivelar ya que su promedio es de: ${prom}`)
        }
    }
}
    })


