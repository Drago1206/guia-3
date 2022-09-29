addEventListener("DOMContentLoaded",()=>{
    let personas=0,mujeres=0
    while (personas <= 42){ 
        mujeres += 1
        let hombres = mujeres + 7  
        personas = mujeres + hombres  
    document.write(`El total de personas: ${personas}<br> `)
    document.write(`La  mujer : ${mujeres}<br>`)
    document.write(`Hombres: ${hombres}<br>`)
    document.write(`_______________________________ <br>`)
    }

})


