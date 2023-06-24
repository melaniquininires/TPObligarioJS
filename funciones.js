

function validar()
{
   var nombre= document.getElementById("nombre");
   var apellido= document.getElementById("apellido");
   var email= document.getElementById("email");
   var form= document.getElementById("miFormulario");
   var parrafo= document.getElementById("divUsoOpcional");
   var obrasSociales= document.getElementById("obras_sociales");
   var dia= document.getElementById("dia");
   var mes= document.getElementById("mes");
   var anio= document.getElementById("anio");
   var regex= /^[a-zA-Z\s']+$/;
   var regexNum= /^([1-9]|0[1-9]|1[0-9]|2[0-9]|3[0-1])$/;
   var regexAnio = /^(?:19|20)\d{2}$/;

   form.addEventListener("submit", e=>{
    e.preventDefault();
    let divUsoOpcional="";
    let entrar= false;
    let regexEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;
    parrafo.innerHTML= "";
    if(nombre.value.length <=2 || !nombre.value.match(regex)){
        divUsoOpcional+= `El nombre no es valido <br>`;
        entrar= true;
       // alert("Nombre no valido");
    }
    if(apellido.value.length<=2 || !nombre.value.match(regex)){
        divUsoOpcional+= `El apellido no es valido <br>`;
        entrar= true;
    }
    if(!regexEmail.test(email.value)){
        divUsoOpcional+= `El email no es valido <br>`;
        entrar= true;
    }
    if(obrasSociales.value ==null || obrasSociales.value == ``){
        divUsoOpcional+= `Obra social NO puede estar vacia<br>`;
        entrar= true;
    }
    if(dia.value > 31 || dia.value == `` || dia.value.match(regex) || !dia.value.match(regexNum)){
        divUsoOpcional+= `Dia erroneo<br>`;
        entrar= true;
    }
    if(mes.value > 12 || mes.value == `` || !mes.value.match(regexNum)){
        divUsoOpcional+= `Mes erroneo<br>`;
        entrar= true;
    }
    if(anio.value >2023 || anio.value < 1923 ||anio.value == ``|| !anio.value.match(regexAnio)){
        divUsoOpcional+= `Año erroneo<br>`;
        entrar= true;
    }
   if (anioBisiesto(anio.value) == true && mes.value== 2 && dia.value>29){
        divUsoOpcional+= `Usted ingreso FEBRERO, dia incorrecto<br>`; //año bisiesto
        entrar= true;
   }
    if(anioBisiesto(anio.value) == false && mes.value== 2 && dia.value >28 ) {
        divUsoOpcional+= `DIA erroneo <br>`;
        entrar= true;
    } 
    if(mes.value==4 || mes.value==6 || mes.value==9 || mes.value==11){
        if(dia.value>30){
            divUsoOpcional+= `Mes ingresado no contiene 31 dias`;
            entrar= true;
        }

    }

    if(entrar){
        parrafo.innerHTML= divUsoOpcional;
      
    } else{
        parrafo.innerHTML= `Formulario enviado`
       
    }
   })

}

function anioBisiesto(anio) {
    return anio % 4 === 0 && (anio % 100 !== 0 || anio % 400 === 0);
  }


//var enunciado = document.getElementById("miFormulario");
/*enunciado.addEventListener("submit",validar);*/

