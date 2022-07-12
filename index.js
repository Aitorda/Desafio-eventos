function clickTitulo () {
    console.log("El usuario hizo click en el titulo");
}

const titulo = document.getElementById ("tituloForm");

titulo.addEventListener ("click", clickTitulo)


const formulario = document.getElementById ("formulario");
formulario.addEventListener ("submit", enviarFormulario);

function enviarFormulario  (e) {
    e.preventDefault ()
    console.log(e.target.usuario.value, e.target.email.value, e.target.password.value);
    console.log("Formulario enviado");      
}

