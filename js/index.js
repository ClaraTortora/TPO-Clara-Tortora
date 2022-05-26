(function(){
    //Variables
    var formulario = document.querySelector('[name="formulario"]'),
        elementos = formulario.elements,
        boton = document.querySelector('[name="btn"]');
        
        

    var validarNombre = function(e){
        if (formulario.nombre.value == 0){
            alert("Completa el campo nombre");
            e.preventDefault();

        }
    };
    var validaremail = function(e){
        if (formulario.email.value == 0){
        alert("Completa el campo Email");
        e.preventDefault();
        }

    };

    var validarNum = function(e){
        if (formulario.telefono.value == 0){
            alert("Completa el número de teléfono");
            e.preventDefault();
        }
    };

    var validar = function(e){
        validarNombre(e);
        validaremail(e);
        validarNum(e)

    };
    
    formulario.addEventListener("submit", validar,)
    
    
    
    

    

}())




