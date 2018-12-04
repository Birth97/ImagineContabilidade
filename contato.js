var novo="";
var i;
var num = "1234567890";
var c = "";
var str = "";

function confTelefone(){

	if(telefone.value == " "){
		return false;
	}

for(i=0; i<telefone.value.length; i++){
	c = telefone.value.charAt(i);
		if(num.indexOf(c)!= -1) {
			str += c;
	}
}

if(str.length == 2){
	novo = "(" + str.substr(0, 2) + ") ";
	document.getElementById("telefone").value = novo;
	}

if(str.length == 6) {
	novo = "(" + str.substr(0, 2) + ") " + str.substr(2, 4) + "-";
	document.getElementById("telefone").value = novo;
	}

if(str.length == 10) {
	novo = "(" + str.substr(0, 2) + ") " + str.substr(2, 5) + "-" + str.substr(7, 4);
	document.getElementById("telefone").value = novo;
	}

}
