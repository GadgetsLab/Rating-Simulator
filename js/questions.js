window.onload = functions.showQuestions;
var form = document.getElementById('form');
var totalAnswers = document.getElementsByClassName('question');
form.addEventListener("submit", function(e){
	e.preventDefault();
	//alert("Si entra aqui");
	var ba = functions.getResponse(totalAnswers);
	functions.showAnswers(totalAnswers, ba);
});
