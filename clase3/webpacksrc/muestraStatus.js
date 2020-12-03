import estados from './estados'

let ultimoTs = () => Math.floor(new Date() / 1000)

console.log('123456789');
(function iteracionContinua() {
    $('#ultimoEstado').html(estados.getEstado())
    $('#tsUltimoEstado').html(ultimoTs())
    if (localStorage.getItem('token') == null) {
        $('#tokenRecibido').html('')
        $('#datosToken').html('')
    }
    else {
        let token = localStorage.getItem('token').split('.')[0]
        $('#tokenRecibido').html(token)
        let objDeco = jwt_decode(localStorage.getItem('token'))
        let txtToken = [objDeco.sub, objDeco.exp, objDeco.roles.join(' ')].join(' ')
        $('#datosToken').html(txtToken)
    }
    _.delay(iteracionContinua, 500)
})()


export default {}
