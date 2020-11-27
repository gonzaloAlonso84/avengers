const forEachAsync = require('./lib/foreachasync')

class A {
    constructor() {
        this.evt = {}
    }
    setearEventoFinish(fnEvento) {
        this.evt.onFinish = fnEvento
        return this
    }
    setearEventoOnInsert(fnEvento) {
        this.evt.onInsert = fnEvento
        return this
    }
    siguiente() {
        console.log('inserta uno')
        this.evt.onInsert.apply(this)
    }
    start() {
        console.log('arranca la insercion')
        this.siguiente()
    }
}

new A()
.setearEventoOnInsert(function() {
    console.log('estoy en el callback del onInsert')
    console.log(this)
    setTimeout(()=>{
        console.log(this)
        this.siguiente()
    }, 1000)    
})
.setearEventoFinish(() => {
    console.log('estoy en el callback de onfinish')
})
.start()
