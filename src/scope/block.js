const fruit = () => {
  if(true) {
    var fruit1 = 'apple';
    let fruit2 = 'bannana';
    const fruit3 = 'kiwi';
    console.log(fruit2);
    console.log(fruit3);
  }
  console.log(fruit1);
};

fruit();

// los 3 consoles afuera:
//esta vez solo mostrará 1, ya que let y const 
//se establece dentro del bloque.


//consoles 2 y 3 dentro.
// si se ejecutan , ya que estan en el ambito

// ---------------------------
//  el 2, muestra valor de bluoque, 
// el que esta afuera el del global.
// si les ponemos var a los dos: asignara el valor
// se trnasmitio a la varible global.

let x = 1;

{
  let x = 2;
  console.log(x);
}
console.log(x);

// ---------------------------
const anotherFunction = () => {
  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    },1000);
  }
};
anotherFunction();
// que pasa:
// se imprime de una el valor de 10, 10 veces.
// 10 10 10 10 10 10 10 10 10 10
// por que: por que accede al ultimo valor que recorre nuestro for.
// osea se estuvo reasignando cada vez.

// ---------------------------
const anotherFunction = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    },1000);
  }
};
anotherFunction();
// en este caso aparecera 0 1 2 3 4 5 6 7 8 9, ya que no se resescribirá valor de i
// sera como un valor nuevo, con nost no funciona ya que justo es constante como una ancla.

// tener cuidado con asignacines  y como hacer llamado de cada uno de ellos.

