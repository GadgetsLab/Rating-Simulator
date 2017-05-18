var cont = 0;
var button_next;
var button = document.getElementsByClassName('answer-trigger');
button[0].addEventListener("click", function(e){ 
    e.preventDefault();
    var data = button[0].getAttribute("data-answer");
    var answer = document.querySelector("#response-" + data).value;
    if(cont > 0){
        answer = document.querySelector("#response-" + data + "-2").value;
    }
    if(answer.toLowerCase() == repuesta_correcta[data].toLowerCase()){
        document.getElementsByClassName("suggestion-" + data)[0].innerHTML = "Tu respuesta es cercana a la acertada y también es válida. Te sugiero asumir esta respuesta para cuando necesites definir el tema que ahora mismo acabas de asimilar. ¡Continua con la evaluación o descansa, si lo prefieres!";
    }else{
        //console.log(palabras_claves[data].length);
        for (var i = 0; i < palabras_claves[data].length; i++) {
            if(functions.validateWord(answer, palabras_claves[data][i])){
               document.getElementsByClassName("suggestion-" + data)[0].innerHTML = "En esta respuesta te sugiero releer el contenido del tema anterior, aunque tienes elementos claros otros no los tienes, pues algunas cosas que dices en ella no son acertadas. Enfoca tus criterios y mejora tu conocimiento del tema. ¡Detén la evaluación ahora mismo y vuelve a los contenidos, para luego regresar aquí!"; 
                functions.disabled(data);
                functions.showElement("response-"+data+"-2");
                cont = 1;
                return false;
            }
        }

       
    }
});


button_next = document.getElementsByClassName('next-trigger');
button_next[0].addEventListener("click", function(e){ 
    var data = button_next[0].getAttribute("data-next");
    //var data_ant = button[0].getAttribute("data-answer");
    functions.hideElement("answer-" + parseInt(data-1));
    functions.showElement("answer-" + data);
});


 /*   
function getResponse(e)
{

    e.preventDefault();
    var totalAnswers = document.getElementsByClassName('question');
    var answer= [];
    var b = [];
    for(var i = 0; i < totalAnswers.length; i++){
            var a = totalAnswers[i].children[1]; //value
            b[i] = a.children[0].value.toLowerCase();
            answer[i] = b[i].replace(',','').split(' ');
            //c[i] = totalAnswers[i].children[1].value.toLowerCase();
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
            console.log(b);
        }

        functions.showAnswer(totalAnswers,b);
    
/*
    //console.log(cont + " - " + palabras + " - " + Math.round((cont/palabras) * 100));
}
*/
/*
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = this.responseText;
        getKeywords(myArr);
    }
}
xmlhttp.open('GET', 'tags.json', true);
xmlhttp.send();

function getKeywords(data)
{
    data = JSON.parse(data);
    console.log(data['tags'].length);
}
*/