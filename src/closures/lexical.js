// como asignar valoresy como resignar apartir de este mismo 
//  y como recordar´s el valor.

const buildcount = (i) => {
  // valor que transmitiremos por medio de nuestra función
  let count = i;
  // funcion dentro de función con al cual daremos vida a nuestro closure
  const displayCount  = () => {
    console.log(count++)
  }
  // al tener clausura retornamos
  return displayCount;
}

// el ambito lexico son las funciones que se ejecutan 
// utilizando la cadena del alcance donde estaba vigente en us momento
// osea tenemos valor de i, y podemos acceder a el desde funcion interna.

const myCount = buildcount(1);
myCount();
myCount();
myCount();

const myOtherCount = buildcount(10);
myOtherCount();
myOtherCount();
myOtherCount();

// al ejecutar por primera vez mycount, se asigna, 
// recordara el valor.