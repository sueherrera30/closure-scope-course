// crear closure de diferentes formas y tamben de manera involuntaria, 
// osea sin tener control de l oque estamos creando :o

const anotherFunction = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    },1000);
  }
};
anotherFunction();
// si lo usamos con var, involuntariamnete creavamos un closure, no idoneamente.
// si cambiamos a let, solo se tenia alcance al valor que recordaba 
// al cambiar let ya no da acceso al valor como global que se estaba reasignando
// si no que crea uno nuevo  por cada bloque.


//CLOSURES SIRVAN PARA:
// manejo de valores provados
//  al meclar alcance de scope con closures, podemos otimizar proyectos.

