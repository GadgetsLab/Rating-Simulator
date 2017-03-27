var form = document.getElementById('form');
//xmlhttp = new XMLHttpRequest();
form.addEventListener("submit", getResponse, false);
cont = 0, palabras = 0;
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
*/
}
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