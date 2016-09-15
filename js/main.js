window.addEventListener("load", function() {
   var supercri = document.getElementById("supercri");
   supercri.addEventListener("click", function() { 
    var color = document.getElementById("color").value;

    if(color == "blue"){
      document.getElementById("blue").classList.toggle("border");
      document.getElementById("red").classList.remove("border");
      document.getElementById("yellow").classList.remove("border");
    } 
      else if(color == "red"){
      document.getElementById("red").classList.toggle("border");
      document.getElementById("blue").classList.remove("border");
      document.getElementById("yellow").classList.remove("border");
    }
      else if(color == "yellow"){
      document.getElementById("yellow").classList.toggle("border");
      document.getElementById("red").classList.remove("border");
      document.getElementById("blue").classList.remove("border");
    }

  });

 });

/*
window.addEventListener("load", function() {
	var boton = document.getElementById("cry");
	boton.addEventListener("click", function() {
		normalcry();
	});

	function normalcry(){
        
    var x = document.getElementsByClassName("circle");
    var texto = document.getElementById("color");
    var i=0;
        if (i<3){
            i=0;
        }
           
        

     x[i].style.border = "8px solid yellow";
     i++;
	 texto.innerHTML = document.getElementsByClassName("circle")[0].getAttribute("name");
        
    }
    
    var boton = document.getElementById("s-cry");
	boton.addEventListener("click", function() {	
        supercry();
	});
    function supercry(){
        
    var x = document.getElementsByClassName("circle");
    var texto = document.getElementById("color");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.border = "3px solid blue";
		texto.innerHTML = document.getElementsByClassName("circle")[0].getAttribute("name");
        } 
    }
});*/