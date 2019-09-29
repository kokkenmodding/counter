

    var baren = document.getElementById("myBar");
 var radio30 = document.getElementById("radio30");
 var radio90 = document.getElementById("radio90");
 var radiono = document.getElementById("radiono");

   // var baren2 = document.getElementById("myProgress");

document.addEventListener("input", function (){

    if(radio30.checked) {

        minLimit = 30;

    } else if(radio90.checked) {
        minLimit = 90;
    }

    var antal = document.getElementById("rutan").value.length
    var kvar = minLimit - antal;

    if (radiono.checked){
        document.getElementById("outputen1").innerHTML = antal + " characters";
        baren.style.width = "0%";
    } else {


    if (kvar>=0) {
    document.getElementById("outputen1").innerHTML = antal + " characters (" + kvar + " left)";
    } else if (kvar<0){
        var kvar2 = kvar * -1;
        document.getElementById("outputen1").innerHTML = antal + " characters (exceeding limit by " + kvar2 + ")";
    }
    var sats = (antal/minLimit)*100;
    oka(sats, antal);
    

    }
  }  );




  function oka (sats, antal) {
 
    if (antal<=minLimit) {
        baren.style.backgroundColor="#2ecc71";
        baren.style.width = sats + "%";
      } else if (antal>minLimit) {
        baren.style.width = "100%";
          baren.style.backgroundColor="#e74c3c";
      }

  }




  function move() {
    var baren = document.getElementById("myBar");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        baren.style.width = width + '%'; 
      }
    }
  }