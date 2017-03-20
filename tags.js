/*
Bienvenido Educador

Esta es una breve guia sobre como hacer sus preguntas para el cuestionario y asociar las palabras clave a dichas preguntas

Para crear preguntas:

La sintaxis para generar sus preguntas es la siguiente:
"numero de la pregunta":["texto de la pregunta"]

Ejemplo: 
"0": ["¿Cómo se saluda?"]

Si desea agregar mas de una pregunta, despues de usar la sintaxis use una coma (,) para separarlas

Ejemplo

"0": ["¿Cómo se saluda?"], "1":["¿Cómo se despide?"]

Tenga en cuenta que estas preguntas aparecerán en orden numérico ascendente, es decir, de 0 en adelante

Es CRUCIAL que la ultima pregunta no tenga comas(,).
*/

var preguntas = {
	//Inician las preguntas
	//---------------------------

	"0": ["¿Cómo se saluda?"],
	"1": ["¿Cómo se despide?"]

	//-----------------------------
	//Fin de la seccion de preguntas
}

/*
Para crear las palabras clave de respuesta.

Para generar las palabras clave, el proceso es similar al de generar preguntas.

Ejemplo:
"numero de la pregunta":["palabra clave"]

Si desea asociar mas palabras clave a la pregunta, separelas por coma(,) asi:

Ejemplo: 
"0": ["palabra clave1","palabra clave2", "palabra clave3"]

Si desea asociar mas palabras clave a otras preguntas, realizelo de la misma manera que con la seccion anterior

Ejemplo:
"0":["palabra clave1","palabra clave2"],
"1":["palabra clave1","palabra clave2"]

Es CRUCIAL que la ultima pregunta no tenga comas(,).

*/
var respuestas = {
  //Inicia la asociación de palabras clave
  //----------------------------------------	
  "0": ["hola", "cómo"],
  "1": ["adios", "vemos"]
  //----------------------------------------
  //Finaliza la asociación de palabras clave
}

/*

*/