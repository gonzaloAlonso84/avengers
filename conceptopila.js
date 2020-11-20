// Concepto de pila

function m4() {
    console.log('llegue a m4')
    // throw new Error('hubo un error')
}

function m3() {
    console.log('antes de llamar a m4')
    m4()
    console.log('antes de llamar a m4')
}

function m2() {
    console.log('antes de llamar a m3')
    m3()
    console.log('antes de llamar a m3')
}

function m1() {
    console.log('antes de llamar a m2')
    m2()
    console.log('antes de llamar a m2')   
}

try {
    setTimeout(()=>{console.log('final op async')}, 1)
    for (let x = 0;x < 1000000000;x++) {}
    m1()
}
catch (err) {
    console.log(err)
}
