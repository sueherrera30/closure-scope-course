// HOISTING: LEVANTAMIENTO DE LAS DECLARACIONES.

a = 2;
var a;
console.log(a); // 2

// el hoisting eleva las declaraciones.
//  variable a sube algo asi:
// var a;
// a = 2;
// esto pasa al momento de que se compila codigo.
// asi podemos acceder a un valor que previamente no a sifo declarado.
// no siempre será de esta forma.

console.log(a);
var a = 2; // dara undefinded
// por que NO ESTAMOS GENERANDO EL VALOR, solo estamos
// intentando ACCENDER a el , pero no esta disponible.

// js solo usa hoisting en las DECLARACIONES y no en las INICIALIZACIONES
nameOfDog('fidencia');

function nameOfDog(name) {
  console.log(name);
}
// el motor compila osea v8
// se leen se pasan todas la asignaciones, se ajustan
// o se adaptan segun sea el caso,
// en este caso hoisting levanta llamados 
// primero lo pone en nuestra memoria y despues ejecuta linea de osigo de console.


