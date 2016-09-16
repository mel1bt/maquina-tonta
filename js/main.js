window.addEventListener("load", function() {
	var boton = document.getElementById("cri");
	var cont = 1;
	boton.addEventListener("click", function(){
		if (cont == 1){
			document.getElementById("entrada").value= "rojo";
            document.getElementById("one").classList.add("borde-rojo");
            document.getElementById("three").classList.remove("borde-amarillo");
		}
		if (cont == 2){
			document.getElementById("entrada").value = "azul";
			document.getElementById("two").classList.add("borde-azul");
            document.getElementById("one").classList.remove("borde-rojo");
		}
		if (cont == 3){
			document.getElementById("entrada").value = "amarillo";
			document.getElementById("three").classList.add("borde-amarillo");
            document.getElementById("two").classList.remove("borde-azul");
			cont = 0;
		}
		cont ++;
	});
	var boton = document.getElementById("super-cri");
	boton.addEventListener("click", function(){
    var entrada = document.getElementById("entrada").value;
    if(entrada == "rojo"){
        document.getElementById("one").classList.add("borde-rojo");
        document.getElementById("two").classList.remove("borde-azul");
        document.getElementById("three").classList.remove("borde-amarillo"); 
    } else if(entrada == "azul"){
        document.getElementById("one").classList.remove("borde-rojo");
        document.getElementById("two").classList.add("borde-azul");
        document.getElementById("three").classList.remove("borde-amarillo");        
    }else if(entrada == "amarillo"){
        document.getElementById("one").classList.remove("borde-rojo");
        document.getElementById("two").classList.remove("borde-azul");
        document.getElementById("three").classList.add("borde-amarillo");
    }
  });
});

