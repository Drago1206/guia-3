addEventListener("DOMContentLoaded",()=>{
let sb=0,vend=0
sb=Number(prompt("Ingrese el sueldo base: "))
vend=Number(prompt("Ingrese la cantidad de vendedores: "))

while(vend>0){
    let v1=0,v2=0,v3=0
    v1=Number(prompt("Ingrese el valor de la venta 1"))
    v2=Number(prompt("Ingrese el valor de la venta 2"))
    v3=Number(prompt("Ingrese el valor de la venta 3"))

    let comision=0, comision2=0, comision3=0,acum=0
    comision=v1*0.10
    comision2=v2*0.10
    comision3=v3*0.10
    acum+=(comision+comision2+comision3)
    vend-=1
    let extra=sb+acum
    document.write(`comision de la venta 1 ${comision}<br>`)
    document.write(`comision de la venta 2 ${comision2}<br>`)
    document.write(`comision3ision de la venta 3 ${comision3}<br>`)
    document.write(`comision${acum}<br>`)
    document.write(`El sueldo base es de:  ${sb}<br>`)
    document.write(`el sueldo mas la comision es de:  ${extra}<br>`)
    document.write(`______________<br>`)
}
    })


