// #Diseñe un algoritmo que determine el resultado de la elección del representante estudiantil de la
// #universidad X, para ello se presentaron tres candidatos A, B, y C.
// #Para ganar la elección se debe obtener como mínimo el 51%.
// #En caso que no haya un ganador se repite la elección en una segunda vuelta.
// #Van a la segunda vuelta los dos candidatos que obtengan la más alta votación.
// #Se anula la elección en caso de producirse un empate doble por el segundo lugar o un empate triple

addEventListener("DOMContentLoaded",()=>{
let ganador = 0,contA = 0,contB = 0,contC = 0
let cvotantes=Number(prompt("Ingrese la cantidad de votantes"))
while (ganador != 1){
    for(let i; i<cvotantes;i++){
        let vote=Number(prompt("Elije (1)Candidato A, (2)Candidato B, (3) Candidato C"))
        if(vote==1){
            contA+=1
        }if(vote==2){
            contB+=1
        }if(vote==3){
            contC+=1
        }
        if(contA>contB && contA>contC)
        {document.write(`El candidato A gano con: ${contA}votos`)
        ganador+=1
        }if(contB>contA && contB>contC)
        {document.write(`El ganador es el candidato B con: ${contB}votos.`)
        ganador+=1
        }if(contC>contA && contC>contB){
            document.write(`El ganador es el candidato C con: ${contC}votos`)
            ganador+=1
        }
        if(contA==contB){
            document.write(`Empate entre A y B, se dara la segunda vuelta`)
        }if(contB==contC){
            document.write(`Empate entre B y C, se dara la segunda vuelta: `)
        }if(contA==contC){
            document.write(`Empate entre A y C, se dara la segunda vuelta`)
        }
    }
}

    })


