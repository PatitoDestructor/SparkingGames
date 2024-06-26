//Ver Contraseña
const visible = document.getElementById("visible");

visible.addEventListener("click", toggleVisible);

function toggleVisible() {
    let contraseña = document.getElementById("password-1");
    const icono = document.getElementById("icono");

    icono.classList.toggle("fa-eye-slash");
    
    if (contraseña.type === "password") {
        contraseña.type = "text";
    }
    else{
        contraseña.type = "password";
    }
}

//Validacion
const btnform = document.getElementById("btnform");

btnform.addEventListener("click", function(e) {
    const nombre = document.getElementById("nombre").value;
    const usuario = document.getElementById("usuario").value;
    const correo = document.getElementById("correo").value;
    const contraseña = document.getElementById("password-1").value;
    const contraseña2 = document.getElementById("password-2").value;
    const checkbox = document.getElementById("cbx").checked;
    const foto = document.getElementById("foto").value; 
    const form = document.getElementById("form");
    

    //Nombre
    if (nombre == "") {
        document.getElementById("biennombre").style.visibility="hidden"
        document.getElementById("malnombre").style.visibility="visible";
        document.getElementById("mensajenombre").style.visibility="visible";
        document.getElementById("nombre").style.border="1px solid red";
        e.preventDefault();
    }else{
        document.getElementById("malnombre").style.visibility="hidden";
        document.getElementById("mensajenombre").style.visibility="hidden";
        document.getElementById("biennombre").style.visibility="visible"
        document.getElementById("nombre").style.border="1px solid #2ecc71";
    }

    //Usuario
    if (usuario == "") {
        document.getElementById("bienusuario").style.visibility="hidden"
        document.getElementById("malusuario").style.visibility="visible";
        document.getElementById("mensajeusuario").style.visibility="visible";
        document.getElementById("usuario").style.border="1px solid red";
        e.preventDefault();
    }else{
        document.getElementById("malusuario").style.visibility="hidden";
        document.getElementById("mensajeusuario").style.visibility="hidden";
        document.getElementById("bienusuario").style.visibility="visible"
        document.getElementById("usuario").style.border="1px solid #2ecc71";
    }

    //correo
    const expcorreo = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    let emailOK = expcorreo.test(correo);

    if (emailOK == false) {
        document.getElementById("biencorreo").style.visibility="hidden"
        document.getElementById("malcorreo").style.visibility="visible";
        document.getElementById("mensajecorreo").style.visibility="visible";
        document.getElementById("correo").style.border="1px solid red";
        e.preventDefault();
    }else{
        document.getElementById("malcorreo").style.visibility="hidden";
        document.getElementById("mensajecorreo").style.visibility="hidden";
        document.getElementById("biencorreo").style.visibility="visible"
        document.getElementById("correo").style.border="1px solid #2ecc71";
    }

    //contraseña
    const expcontraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,20}[^'\s]$/;
    let contraseñaOK = expcontraseña.test(contraseña);

    if (contraseñaOK == false) {
        document.getElementById("biencontra").style.visibility="hidden"
        document.getElementById("contravalired").style.visibility="visible";
        document.getElementById("mensajecontra").style.visibility="visible";
        document.getElementById("password-1").style.border="1px solid red";
        e.preventDefault();
    }else{
        document.getElementById("contravalired").style.visibility="hidden";
        document.getElementById("mensajecontra").style.visibility="hidden";
        document.getElementById("biencontra").style.visibility="visible"
        document.getElementById("password-1").style.border="1px solid #2ecc71";
    }

    //Repetir contraseña
    if(contraseña2 !== contraseña || contraseña2 == ""){
        document.getElementById("biencontra2").style.visibility="hidden"
        document.getElementById("malcontra2").style.visibility="visible";
        document.getElementById("mensajecontra2").style.visibility="visible";
        document.getElementById("password-2").style.border="1px solid red";
        e.preventDefault();
    }else{
        document.getElementById("malcontra2").style.visibility="hidden";
        document.getElementById("mensajecontra2").style.visibility="hidden";
        document.getElementById("biencontra2").style.visibility="visible"
        document.getElementById("password-2").style.border="1px solid #2ecc71";
    }

    //terminos y condiciones
    if (checkbox == false) {
        document.getElementById("malcheck").style.visibility="visible";
        document.getElementById("mensajecheck").style.visibility="visible";
        e.preventDefault();
    }else{
        document.getElementById("malcheck").style.visibility="hidden";
        document.getElementById("mensajecheck").style.visibility="hidden";
    }

    //Foto
    if (foto == "") {
        document.getElementById("bienfoto").style.visibility="hidden"
        document.getElementById("malfoto").style.visibility="visible";
        document.getElementById("mensajefoto").style.visibility="visible";
        document.getElementById("foto").style.border="1px solid red";
        e.preventDefault();
    } else{
        document.getElementById("malfoto").style.visibility="hidden";
        document.getElementById("mensajefoto").style.visibility="hidden";
        document.getElementById("bienfoto").style.visibility="visible"
        document.getElementById("foto").style.border="1px solid #2ecc71";
    }

});
