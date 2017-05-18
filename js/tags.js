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

	"1": "¿Qué pregunta te dará una respuesta que afianzará tu autoconfianza para tomar decisiones?",
	"2": "¿Cómo se despide?"
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
"0":"palabra clave1","palabra clave2",
"1":"palabra clave1","palabra clave2"

Es CRUCIAL que la ultima pregunta no tenga comas(,).

*/
var repuesta_correcta = {
	"1": "¿Quien soy?"
}

var palabras_claves = {
  //Inicia la asociación de palabras clave
  //---------------------------------------- 	
  "1": ["yo", "el", "ser", "persona", "conocerme yo", "mi", "mismo", "conocer el interior", "interior propio", "amor a mí", "propio conocimiento"],
  "2": ["adios", "vemos"]
  //----------------------------------------
  //Finaliza la asociación de palabras clave
}

var sugerencia_primera_respuesta = {

	"1":"Las personas deben antes de lanzarse como empresarios, conocer su interior.",
	"2":"Utiliza esta sugerencia..."
}

var sugerencia_segunda_respuesta = {
	"1":"Para un emprendedor lo fundamental esta en saber su ¿Quién soy?, une esta sugerencia a tu respuesta y tendrás un criterio importante para iniciarte como empresario"
}

var retroalimentacion_parcial = {
	"1":"Lee con atención esta nueva respuesta que une lo que tienes en mente con la definición real."
	

}

var retroalimentacion_final = {
	"1":"Ahora continua a la siguiente pregunta, ya tienes una idea de lo que es Ser emprendedor y recuerda que en los detalles puede estar la diferencia."
} 

/*
	Prueba de sincronizacion con git
*/