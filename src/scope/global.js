// todo el tiempo podemos acceder a esta vsriable por que no esta asignada
// a ningun bloque, por ello se llama global.
// por ello puedo ejecutar
// no puedo reasignar el valor a los elementos, mala practica, con var SOBRE ESCRIBIMOS.
// Si reasigno con let, no pdore reasignar ese nombre, nos dice que deje ese valor,
// var y let puede si usarse de manera global,pero let no reasignar.

var hello = "hello";
let  world = "hello world";
const helloVato = "hello vato loco!";

const testingScope = () => {
  console.log(hello);
  console.log(world);
  console.log(helloVato);
}

testingScope();

// maml practica el asignar una variable sin const let  var, asigno variable normal 
// dentro de una función, asi tendra acesso global

const helloWorld = () => {
  globalVar = 'im global';
}
helloWorld();
console.log(globalVar);

//al  crear otra funcion y tenemos DOBLE asignacion de variables
//Tendremos acceso de forma global pero, no es buena practica.
const anotherFunction  = () => {
 var localVar = globalVar = 'im global beib';
 console.log(localVar);
}
anotherFunction()