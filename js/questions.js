window.onload = function(){
	//console.log(Object.keys(preguntas).length);
	var count = Object.keys(preguntas).length;
	var container = document.getElementById("form");
	var content;
	var f;
	var button = document.createElement("button");
	button.innerHTML = "Responder";
	console.log(preguntas[0]);
	for (var i = 0;i < count;i++) {
		/*
		*/
		content = "<div class='ed-item base-100 web-50'><p>"+ preguntas[i] +"</p></div> <div class='ed-item base-100 web-50'><textarea id='' cols='30' rows='10'></textarea></div>";
		
		f = document.createElement("fieldset");
		f.setAttribute('class','question');
		f.innerHTML = content;
		container.appendChild(f);
		/*
		+"<div class='ed-item base-100 web-50'>"+
		+"<textarea name='' id='' cols='30' rows='10'></textarea>"+
		+"</div>"+
		+"</fieldset>";*/
		//console.log(container);
	}	
	container.appendChild(button);
};
