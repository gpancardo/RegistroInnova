const QRCode = require('qrcode');

let infoUsuario = {
    "nombre": "",
    "apellido": "",
    "eventos": [],
    "correo": "nombre@usuario.mx",
    "constancia": false,
    "conteoEventos": 0
};
let infoEvento = "Feria del Emprendimiento";

infoUsuario.eventos.push(infoEvento);

const textoQR = JSON.stringify(infoUsuario);

let nombreArchivo = `${infoUsuario.correo}_${infoUsuario.eventos[infoUsuario.eventos.length - 1]}.png`;

QRCode.toFile(nombreArchivo, textoQR);