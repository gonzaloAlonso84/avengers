let tarea1 = (next)=>{
    _.delay(()=>{
        console.log('tarea1')
        next()
    }, 3000)
}

let tarea2 = (next)=>{
    _.delay(()=>{
        console.log('tarea2')
        next()
    }, 3000)
}

let tarea3 = ()=>{
    _.delay(()=>{
        console.log('tarea3')
        next()
    }, 3000)
}

let ts = [tarea1, tarea2, tarea3]


