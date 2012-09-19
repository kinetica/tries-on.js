var Assert = require('assert');
var Questions = require('../../lib/question/questions');

var dummy = new Questions.DummyQuestion();
Assert.ok(dummy.isAnswerCorrect('asdf'), "A Dummy todo le viene bien");
Assert.ok(!dummy.isAnswerCorrect(''), "A Dummy todo le viene bien, salvo texto vac�o");

var suma = new Questions.SumaQuestion(1, 2);
Assert.ok(suma.isAnswerCorrect(3), "Ejemplo simple de suma");
Assert.ok(suma.isAnswerCorrect('3'), "Ejemplo simple de suma con string");
Assert.ok(!suma.isAnswerCorrect(4), "Error simple en la suma");
var suma = new Questions.SumaQuestion(7, 2);
Assert.ok(suma.isAnswerCorrect(9), "Otro ejemplo simple de suma");
Assert.ok(!suma.isAnswerCorrect('asdfa'), "Error enviando strings como la suma");
Assert.ok(!suma.isAnswerCorrect(10), "Otro error simple en la suma");

var conversor = new Questions.MetrosAPulgadas(1);
Assert.ok(conversor.isAnswerCorrect(39.3701), "Conversi�n simple");
Assert.ok(conversor.isAnswerCorrect('39.3701'), "Conversi�n con string");
Assert.ok(conversor.isAnswerCorrect(39.37), "Conversi�n pifiando por poco");
Assert.ok(!conversor.isAnswerCorrect(80), "Conversi�n pifiando por mucho");
Assert.ok(!conversor.isAnswerCorrect('asdfa'), "Error enviando strings como pulgadas");
conversor = new Questions.MetrosAPulgadas(1/39.37);
Assert.ok(conversor.isAnswerCorrect(1), "Justo una pulgada");
conversor = new Questions.MetrosAPulgadas(53);
Assert.ok(conversor.isAnswerCorrect(53 * 39.37), "Muchas pulgada");

var estatica = new Questions.StaticQuestion('pregunta', 'respuesta');
Assert.ok(estatica.isAnswerCorrect('respuesta'), "Pregunta est�tica espera respuesta est�tica");
Assert.ok(!estatica.isAnswerCorrect('otra cosa'), "Pregunta est�tica espera s�lo respuesta est�tica");
Assert.equal(estatica.getText(), 'pregunta', 'La pregunta es pregunta');

var enumeracion = new Questions.MustHaveAtLeastQuestion('Diga 2', 2, ['Hola', 'Chau', 'Adios', 'Hasta luego', 'Bienvenido'])
Assert.ok(enumeracion.isAnswerCorrect('Hola, Chau'), "Enumeraci�n: Justo lo que piden");
Assert.ok(enumeracion.isAnswerCorrect('Chau, Hola'), "Enumeraci�n: no importa el orden");
Assert.ok(!enumeracion.isAnswerCorrect('Hola, Hola'), "Enumeraci�n: Repetir no vale");
Assert.ok(!enumeracion.isAnswerCorrect('Hola'), "Enumeraci�n: Con una no alcanza");
Assert.ok(enumeracion.isAnswerCorrect('Hola, Chau, Hasta luego, Adios'), "Enumeraci�n: Mas de lo que piden");
Assert.ok(enumeracion.isAnswerCorrect('Hola que tal mi nombre es Juan Chau'), "Enumeraci�n: Lo que piden y basura");
Assert.ok(enumeracion.isAnswerCorrect('hola chau'), "Enumeraci�n: Es case insensitive");
