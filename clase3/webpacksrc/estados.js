const ST_DESLOGUEADO = 'ST_DESLOGUEADO';
const ST_LOGUEADO = 'ST_LOGUEADO';

let ultimoEstado = ST_DESLOGUEADO;

(function actEstado() {
    if (localStorage.getItem('token') == null) {
        ultimoEstado = ST_DESLOGUEADO;
    }
    else {
        ultimoEstado = ST_LOGUEADO;
    }
    _.delay(actEstado, 1000);
})();

export default {
    ST_DESLOGUEADO,
    ST_LOGUEADO,
    setEstado: z => ultimoEstado = z,
    getEstado: () => ultimoEstado
}