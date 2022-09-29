addEventListener("DOMContentLoaded",()=>{
    let cont=0
    while (cont<=9){
        let n1=0,n2=0
        n1=Number(prompt("Ingrese el primer numero: "))
        n2=Number(prompt("Ingrese el segundo numero: "))
        let sum=0,rest=0,div=0,mult=0
        sum=(n1+n2)
        rest=(n1-n2)
        mult=(n1*n2)
        div=(n1/n2)
        cont+=1
        document.write(`El total de la suma es de: ${sum}<br>`)
        document.write(`El total de la resta es de: ${rest}<br>`)
        document.write(`El total de la division  es de: ${div}<br>`)
        document.write(`El total de la multiplicacion es de: ${mult}<br>`)
        document.write(`______________________<br>`)
    
    
    }
    })


