var cont = 0; 
var palabras = 0;
var functions = {
	"validateWord": function(response, str){
		var result = str.indexOf(response);
		console.log(result);
		if(result >= 0){
			return true;
		}
		return false;
	},
	"disabled": function(data){
		document.getElementById("response-"+data).setAttribute("disabled", "disabled");
	},
	"showElement": function(data){
		document.getElementById(data).classList.add("display-block");
	},
	"hideElement": function(data){
		document.getElementById(data).classList.add("display-none");
	},
	"showQuestions": function(){ // This method print the questions on the template
		var count = Object.keys(preguntas).length;
		var container = document.getElementById("form");
		var content;
		var f;
		var button = document.createElement("button");
		button.innerHTML = "Responder";
		for (var i = 0;i < count;i++) {
			content = "<div class='ed-item base-100 web-50'><p>"+ preguntas[i] +"</p></div> <div class='ed-item base-100 web-50 answer'><textarea id='' cols='30' rows='10'></textarea></div>";
			f = document.createElement("fieldset");
			f.setAttribute('class','question');
			f.innerHTML = content;
			container.appendChild(f);
		}	
		container.appendChild(button);	
	},
	"getResponse": function (ta){ //This method is the "core" project.
		/*
		console.log("Está entrando en getResponse");
        */
        console.log(ta);
        //totalAnswers = document.getElementsByClassName('question');
    	var answer= [];
    	var b = [];
    	for(var i = 0; i < ta.length; i++){
            var a = ta[i].children[1];
            b[i] = a.children[0].value.toLowerCase();
            answer[i] = b[i].replace(',','').split(' ');
        }
    
    	for(var i = 0; i < answer.length; i++) {
            for(var x = 0; x < answer[i].length; x++ ){
                
                if(respuestas[i].indexOf(answer[i][x]) >= 0){
                    cont++;
                    var d = b[i];
                    b[i] = d.replace(answer[i][x], "<span class='red'>" + answer[i][x] + "</span>");
                }
                palabras++;
            }
        }

        return b;
    },
	"showAnswers": function(ta,ba){ //This method print the answers with the keywords printed in "red"
		/*
		console.log("Está entrando en showAnswer");
		*/
		for (var i = 0;i < ta.length; i++) {
			ta[i].children[1].innerHTML = ba[i];
		}
	} 
}