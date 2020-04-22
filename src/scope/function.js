const fruits = () => {
  var fruit = 'apple';
  console.log(fruit)
};

fruits();
//aparecerá como no definido.
console.log(fruit)


const anoherFunction = () => {
  //mostrará el 2 por que se reasigno
  var x = 1;
  var x = 2;
  // no monstará nadam ya que aparecerá como undefiend.
  // NO PODEMOS REASIGNAR
  let y = 1;
  let y = 2;
  console.log(x);
  console.log(y);
};

anoherFunction();
// recomendación, usar let y const para el manejo de 