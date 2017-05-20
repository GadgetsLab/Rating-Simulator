var cont = 0; 
var palabras = 0;
var functions = {
	"validateWord": function(response, str){
		var result = str.toLowerCase().indexOf(response.toLowerCase());
		console.log(result);
		console.log(response);
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
		console.log("Hide:" + data)
		document.getElementById(data).classList.remove("display-block");
		document.getElementById(data).classList.add("display-none");
	},
	"showQuestions": function(){ // This method print the questions on the template
		var count = Object.keys(preguntas).length;
		var container = document.getElementsByClassName("ed-container");
		container[0].innerHTML = "Hola";
		var cont = 2;
		var classShow = "display-block";
		var content ="";;
		var f;
		var button = document.createElement("button");
		//button.innerHTML = "Responder";
		for (var i = 1;i <= count;i++) {
			if(i != 1){
				classShow = "display-none";
			}
			content = content + "<div class='ed-item base-100 "+ classShow +"' id='answer-"+i+"'>"+
			"<p>"+ preguntas[i] +"</p>"+
			"<textarea name='response' id='response-"+ i+ "' cols='30' rows='10'></textarea>"+
			"<textarea name='' id='response-"+ i +"-2' cols='30' rows='10' class='display-none'></textarea>"+
			"<p class='suggestion-"+ i +"'></p>"+
			"<p id='suggestion-final'></p>"+
        "<button data-answer = '"+ i +"' class = 'answer-trigger' onclick=listen("+i+")>Responder</button>"+
        "<button data-next = '"+cont+"'class = 'next-trigger' onclick='next("+cont+","+count+")'>Siguiente</button>"+
        "</div>";
        cont ++;
			/*
			f = document.createElement("fieldset");
			f.setAttribute('class','question');
			f.innerHTML = content;
			container.appendChild(f);
			*/
		}
			content = content + "<div id='final' class='ed-item base-100 display-none'>"+
			"<h2>Retroalimentación final para salir del simulador</h2>"+ 
			"<p>Ya hemos terminado la evaluación del curso. Te sugiero investigar sobre los temas que estudiaste o repasar aquellos en los que aun deseas redefinir conceptos. De ahora en adelante, será tu práctica la que te hará un empresario exitoso, siempre y cuando busques donde nadie busque y cultives tu inteligencia emocional. ¡Gracias por tu paciencia y bondad por querer aprender!</p>"+
			"</div>";	
			container[0].innerHTML = content;	
	},
	"getResponse": function (ta){ //This method is the "core" project.
		/*
		console.log("Está entrando en getResponse");
        */
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