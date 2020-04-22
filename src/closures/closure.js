// alcancia 
// al finak que seria como una alcancia?
// Una clausura o closure es una función que guarda
//  referencias del estado adyacente (ámbito léxico). 
//  En otras palabras, una clausura permite acceder 
//  al ámbito de una función exterior desde una función interior.
//   En JavaScript, las clausuras se crean cada vez que una 
//   función es creada.

const moneyBox = (coins) => {
  var saveCoins = 0;
  // uso asignacion de adición para aádir las momendas que recibamos.
  // asignación de edición 
  saveCoins += coins;
  console.log(` mis ahorritos: ${saveCoins}`)

};
// establezco una variable que este 
moneyBox(5);
moneyBox(10);

// con estructura de closure:
// combina funcion con ambito lexico donde se establecieron las funciones

// ponemos funcion dentro de funcion, que tendra logica.
//combina funcion y AMBITO DONDE DE SECLARA.
const moneyBoxClosure = ()  => {
  // declaro asignacion 
  var seveCoins = 0;
  const countCoins = (coins) => {
    // aqui anido la asignacion de las monedas.
    seveCoins += coins;
    console.log(` mis ahorritos con closures: ${seveCoins}`)
  }
  return countCoins;
}

// genero ambito
// genero mi closure 
let myMoneyBox = moneyBoxClosure();

// asigno valores
// llanado a closure

//asignamos valor
myMoneyBox(5);
// queda la asignacion anterior, en la memoria el valor anterior, al pasar uno nuevo da la suma
myMoneyBox(20);
// recuerda la asignacion del ambito en la que estaba savecoins (osea la suma anterior)
// acumulado de los tres 
myMoneyBox(10);