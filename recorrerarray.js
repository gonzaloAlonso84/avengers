/**
 * 
 * @param {*} arr, es un arra nada mas
 * @param {*} fnEach es una funcion que recibe
 *                   (item, next, abort)
 * @param {*} onFinish 
 */

function foreachAsync(arr, fnEach, onFinish) {
    const longitud = arr.length;
    (function fnInterna(subindice) {
        if (subindice === longitud) {
            onFinish(undefined)
            return
        }
        fnEach(arr[subindice], ()=>{
            fnInterna(subindice+1)
        }, ()=>{
            onFinish(new Error('se aborto en la iteracion' + subindice))
        })
    })(0)
}

let arrInicial = [1,2,3,4,5]

foreachAsync(arrInicial, (item, fnNext, fnAbort)=>{
    console.log(item)
    setTimeout(()=>{
        if (item===4) {
            fnAbort()
            return
        }
        fnNext()
    }, 1000)
}, (err)=>{
    if (err) {
        console.log(err)
        console.log('hola', 'que', 'lindo','esta', 'el', 'dia')
    }
})