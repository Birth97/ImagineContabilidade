var novo="";
var i;
var num = "1234567890";
var c = "";
var str = "";
var n = document.getElementById("nome").value;

function conForm(){
	if(n == " "){
		alert("Impossivel enviar mensagem!");
		return false;
	}
}

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

function confNome(cNome){
	if(cNome.value == ""){
		return false;
	}
	if(cNome.value.indexOf(" ") == -1){
		return false;
	}

}

function confEmail(cEmail){
	if (cEmail.value == " "){
		return false;
	}
}

function confMensagem(msg){
	if (msg.value == " "){
		return false;
	}
	if (msg.value.length < 10){
		return false;
	}
}
