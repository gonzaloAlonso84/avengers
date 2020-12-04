

_.delay(()=>{
    $('#btnLogin').click(()=>{
        realizarLogin()
    })

    $('#btnLogout').click(()=>{
        localStorage.removeItem('token')
    })

    $('#btnLibros').click(()=>{
        consultarLibros()
    })

}, 200)

function consultarLibros() {
    fetch('/peliculas', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*',
            'X-JWT-TOKEN': localStorage.getItem('token')
        }})
        .then(function(response) {
            console.log('response =', response);
            return response.json();
        })
        .then(function(data) {
            // anaisis del token
            console.log('data = ', data);
        })
        .catch(function(err) {
            console.error(err);
        });
}

function realizarLogin() {
    fetch('/loginweb', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        },
        body: JSON.stringify({usuario:'andy', password:'aNdYv5z'})
        })
        .then(function(response) {
            console.log('response =', response);
            return response.json();
        })
        .then(function(data) {
            // anaisis del token
            console.log('data = ', data);
            let decodificado = jwt_decode(data.token)
            console.log(decodificado)
            let tsActual = Math.floor(new Date() / 1000)
            console.log(tsActual)
            localStorage.setItem('token', data.token)
        })
        .catch(function(err) {
            console.error(err);
        });
}