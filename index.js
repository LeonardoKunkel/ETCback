require('dotenv').config();
const nodemailer = require('nodemailer'); //Instalas nodemailer
 var gg ="hxhxhhxhxhxhhxbbhgxvgxvxgvxgvxgxvgxvxgvxgxv"
 datos:any={

 }



//Paso 1 para realizar el envio
let transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user:'experimentosSoftoil@gmail.com',
        pass:'sOFTOIL2019'    
    }
});
 //Paso 2 damos de opciones los correos
let mailOptions = {
    from: 'experimentosSoftoil@gmail.com',
    to: 'eduardoresendiz5491@gmail.com',
    subject: 'Esta es una prueba del dia lunes con nodemon server',
    text:gg
}
 
//Paso 3 kdkkdkdkdkdkdkd
transporter.sendMail(mailOptions, function(err, data){
    if (err) {
        console.log('Ocurrio un error', err);
    } else{
        console.log('Correo enviado');
        
    }
});

function enviar(){
let nombre = document.formulario.nombre.value;
let correo = document.formulario.correo.value;
let telefono = document.formulario.telefono.value;
let informacion = document.formulario.informacion.value;
let mensaje = document.formulario.mensaje.value;

let todo={
    nombre,
    correo,
    telefono,
    informacion,
    mensaje
}

    
    console.log(todo);
    
}