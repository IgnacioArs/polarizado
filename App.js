import React from "react";
//Mandamos a llamar la navegacion
import Navegacion from "./Navegacion";

//importamos la base de datos
/* import db from './util/clientes'

const printCar = (db) => {
  console.log(`id:${db.id}, fecha:${db.fecha}, nombre:${db.nombre}, instagram:${db.instagram}, detalle:${db.detalle}, tarea:${db.tarea}, precio:${db.precio}`)
}  */

export default function App(props) {


  
/*   db.find( -1 ) 
  .then( car => printCar(car) )
  .catch( err => console.log(err) ) */

//create
/* db.create( {fecha:'31/07/2022', nombre:'benja', instagram:'benjaxd', detalle:'toyota yariz', tarea:'limpiar dos vidrios', precio:500000} )
  .then( id => console.log('Cliente creado con el id: '+ id) )
  .catch( err => console.log(err) )

  db.create({fecha:'24/07/2022', nombre:'homero', instagram:'homersims', detalle:'nissan', tarea:'polarizar 10 virios', precio:150.000})
  .then( id => console.log('Cliente creado con el id: '+ id) )
  .catch( err => console.log(err) )

  db.create({fecha:'26/07/2022', nombre:'josue', instagram:'josepe', detalle:'subaru', tarea:'polarizar 100 vidrios', precio:520.000})
  .then( id => console.log('Cliente creado con el id: '+ id) )
  .catch( err => console.log(err) ) */

//find id=1
/* db.find( 1 ) 
  .then( car => printCar(car) )
  .catch( err => console.log(err) ) */

//find brand=vw
/* db.findByBrand( 'benja' ) 
  .then( nombre => console.log(nombre) )
  .catch( err => console.log(err) ) */

/* //update
Car.update( 1, {brand:'gm', model:'corsa', hp:70} )
  .then( updated => console.log('Cars updated: '+ updated) )
  .catch( err => console.log(err) )
 */
//all
/* db.all()
  .then( 
    cars => cars.forEach( c => printCar(c) )
  ) */

//delete
/* Car.remove(1)
  .then( updated => console.log('Cars removed: '+ updated) )
  .catch( err => console.log(err) )

Car.remove(2)
  .then( updated => console.log('Cars removed: '+ updated) )
  .catch( err => console.log(err) )

Car.remove(3)
  .then( updated => console.log('Cars removed: '+ updated) )
  .catch( err => console.log(err) ) */

//forced empty array (all=[])
/* db.all()
  .then( 
    cars => console.log("todos",cars)
  ) */


  return (

<Navegacion/>

  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */
