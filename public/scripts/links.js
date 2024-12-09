// let index = document.querySelector('#index');
// let inicio = document.querySelector('#inicioSesion');
// let registro = document.querySelector('#registro');
// let panelAdmon = document.querySelector('#panelAdmon');

// para el inicio de sesion
let inicio = document.getElementById("inicioSesion");
let numero = document.getElementById('numeroCuenta');

// para el registro
let registro = document.getElementById("registro");

if(inicio){
    inicio.addEventListener('click',(e)=>{
        e.preventDefault();
        if(numero.value == 319242424){ //admin
            location.href = 'panelAdmon.html';
        } else if(numero.value == 319363636){//asistente
            location.href = 'eventos.html';
        } else if(numero.value == 319393939){//operador
            location.href = 'operador.html';
        }
    });
}

if(registro){
    registro.addEventListener('click',(e)=>{
        e.preventDefault()
        location.href = 'inicioSesion.html';
    });
}

// index.addEventListener('click',()=>{
//     window.location.href = 'index.html'
// });

// inicioSesion.addEventListener('click',()=>{
//     window.location.href = 'inicioSesion.html'
// });

// registro.addEventListener('click',()=>{
//     window.location.href = 'registro.html'
// });

// panelAdmon.addEventListener('click',()=>{
//     window.location.href = 'panelAdmon.html'
// });