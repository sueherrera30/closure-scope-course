// fincion con los spoces global, local y de bloque

var a = "Hello 1";

function hello() {
  let b = "hello world 2";
  const c = "heloooo bandita! 3"
  if(true) {
    let d = "que trancita world 4"
    debugger;
  }

}

hello();
// en navegador con debugger, podemos ver scope
// vemos niveles, a se declsara en estado global, lo vemos en objeto generar.


const moneyBoxClosure = ()  => {
  debugger;
  var seveCoins = 0;
  const countCoins = (coins) => {
    debugger;
    seveCoins += coins;
    console.log(` mis ahorritos con closures: ${seveCoins}`)
  }
  return countCoins;
}
let myMoneyBox = moneyBoxClosure();

myMoneyBox(5);
myMoneyBox(20);
myMoneyBox(10);

//sevecoins,countcoins and this, se declaran pero no se asignan aun por ello aparece como undefinded.
