// por naturaleza JS no fomenta el uso de datos privados.
// pero con clouser podemos crear valores que solo 
// serán accedidos por medio de metodos 
// que no estrán disponibles fuera de esta función.

const person  = () => {
  // asignamos por default
  // SE PROTEGERA A ESTA VARIABLE QUE es provada.
  let saveName = "Name";
  // metodos
  return {
    getName: () => {
      return saveName;
    },
    setName: (name) => {
      saveName = name;
    }
  }
}

newPerson = person();
// promero traemos getname, a su valor asignado
console.log(newPerson.getName());
newPerson.setName('suerox');
console.log(newPerson.getName());