const helloWord = () => {
  const hello = "hello vatos locos de la tierra";
  console.log(hello);
}
helloWord();
// no puede acceder, dice que e undefinded.
console.log(hello);

var scope = "Im global";

// HAMBITO LEXICO 
// Lo que entendí del ámbito léxico es que a pesar que tengas
//  una variable global declarada e inicializada, puedes tener 
//  la misma variable declarada e inicializada con otro valor 
//  dentro de una función y esta última no reasignará su valor a
//   la variable global 

const functionScope = () => {
  var scope = "im local beib";
  const func = () => {
    return scope;
  }
  console.log(func());
};

functionScope();