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
	"2": "¿Que es lo que tiene que ver contigo que saca adelante tus sueños y proyectos?",
	"3": "¿Cuál es el “secreto” para crear conciencia de ti mismo?"
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
var repuestas_correctas = {
	"1": "¿Quien soy?",
	"2": "Mi voluntad",
	"3": "Observar, Potenciar y Priorizar"
}

var palabras_claves = {
  //Inicia la asociación de palabras clave
  //---------------------------------------- 	
  "1": ["yo", "el", "ser", "persona", "conocerme yo", "mi", "mismo", "conocer el interior", "interior propio", "amor a mí", "propio conocimiento"],
  "2": ["Mía", "Lo que sueño", "Ser yo mismo", "Mi persona", "Conocerme", "Mi pasión", "Mismo", "Conocer","Interior", "Amor", "Propio" , "Voluntad"],
  "3": ["Mirar con detalle", "Bueno", "Ser yo mismo", "Ejecutar cosas", "Iniciar la empresa","Preguntarse quién soy","Conocerme", "Verme como soy", "Saber", "Buscar", "Claridad","Sabiduría","Conocimiento", "Estudiar", "Ser dotado de paz", "Único", "Soy único", "Talento", "Talentoso", " Conciencia", "Mejoradas", "Áreas fuertes"]
  //----------------------------------------
  //Finaliza la asociación de palabras clave
}

var sugerencia_primera_respuesta = {

	"1":"Las personas deben antes de lanzarse como empresarios, conocer su interior.",
	"2":"Las personas deben antes de lanzarse como empresarios, conocer su interior.",
	"3": "Tener conciencia de ti es reconocer que eres una persona única y especial. Un ser dotado de talentos y áreas fuertes, con ciertas debilidades, que pueden ser mejoradas"
}

var sugerencia_segunda_respuesta = {
	"1":"Para un emprendedor lo fundamental esta en saber su ¿Quién soy?, une esta sugerencia a tu respuesta y tendrás un criterio importante para iniciarte como empresario",
	"2": "Ten claro que la realidad por lo general es ajena a ti. Es la voluntad que tengas para sacar adelante tus sueños y proyectos, lo que te lleva reconocer que tienes talentos y habilidades únicos y te fueron dados con un propósito, ser único.",
	"3": "Para emprender es necesario que seas consciente de ti mismo y puedas en tu entorno Observar, Potenciar y Priorizar todo lo que tienes en tu vida."
}

var retroalimentacion_parcial = {
	"1":"Lee con atención esta nueva respuesta que une lo que tienes en mente con la definición real.",
	"2":"Lee con atención esta nueva respuesta que une lo que tienes en mente con la definición real.",
	"3":"Lee con atención esta nueva respuesta que une lo que tienes en mente con la definición real."
	

}

var retroalimentacion_final = {
	"1":"Ahora continua a la siguiente pregunta, ya tienes una idea de lo que es Ser emprendedor y recuerda que en los detalles puede estar la diferencia.",
	"2":"Ahora continua a la siguiente pregunta, ya tienes una idea de lo que es Ser emprendedor y recuerda que en los detalles puede estar la diferencia.",
	"3":"Ahora continua a la siguiente pregunta, ya tienes una idea de lo que es Ser emprendedor y recuerda que en los detalles puede estar la diferencia."
} 

/*
	Prueba de sincronizacion con git
*/