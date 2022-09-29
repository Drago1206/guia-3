addEventListener("DOMContentLoaded",()=>{
    let distancia = 0 
    let tiempo = 0
while (distancia < 10000){
    tiempo += 1
    let A = (800 * tiempo) + (20*tiempo**2)/2 
    let M = (800 * tiempo) + (10*tiempo**2)/2
    distancia = Math.sqrt(A**2 + M**2)
    document.write(`Segundo: ${tiempo}<br>`)
document.write(`Distancia: ${Math.round(distancia,2)}<br>`)
document.write(`___________________________________ <br>`)
}
    })


