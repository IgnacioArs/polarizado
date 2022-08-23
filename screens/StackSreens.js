import { useNavigation } from '@react-navigation/native';
import { Avatar, ListItem } from '@rneui/base';
import React, { useEffect, useState } from 'react'
import { RefreshControl, ScrollView, StyleSheet, Text, View,Button,Image } from 'react-native';
//importamos un boton
import { BlackBoton,YellowBoton } from '../components/Boton'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import db from '../util/clientes.js'
import logo from '../image/losgoSinVorde.jpeg'



const StackSreens = (props) => {

  



  const [clientes,setClientes] = useState([])
const [cantidad,setCantidad] =useState()
const [suma,setSuma] = useState()
const [refrescar,setRefrescar] = useState(false)

const [total,setTotal] =useState()



const PintarClientes = (db) => {

  
  const nuevoCliente = {
    id:db.id,
    fecha:db.fecha,
    nombre:db.nombre,
    instagram:db.instagram,
    detalle:db.detalle,
    tarea:db.tarea,
    precio:db.precio
   }

 /*   setClientes([]) */
    setClientes((clientes) => ([
      ...clientes,
      {
        id:nuevoCliente.id,
        fecha:nuevoCliente.fecha,
        nombre:nuevoCliente.nombre,
        instagram:nuevoCliente.instagram,
        detalle:nuevoCliente.detalle,
        tarea:nuevoCliente.tarea,
        precio:nuevoCliente.precio
      }
    ])) 
 
 /*    const su = parseInt(clientes.precio + clientes.precio)
   setSuma(parseInt(su)) */
  



}    



const LaSuma = (data) => {
console.log("RECIBIENDO EL OBJETO",data)
setSuma(data)
setTotal(data)
console.log("VIENDO SUMA",total,suma)
}


useEffect(() => {

db.suma().then(data => data.forEach(c => LaSuma(c))) 
 db.all()
.then( 
datos => datos.forEach( c => {if (c || c>c) {
  PintarClientes(c)
}}))  
},[])


const cargar = React.useCallback(()=> {
  setRefrescar(true)


  db.suma().then(data => data.forEach(c => LaSuma(c))) 
setClientes([])
db.all()
.then( 
datos => datos.forEach( c => {if (c || c>c) {
  PintarClientes(c)
}})) 

  setRefrescar(false)
  })
  



  return (
    <ScrollView   refreshControl={<RefreshControl refreshing={refrescar} colors={["#000000"]} onRefresh={cargar}/>}>
    {/*     <RefreshControl  
      onRefresh={()=> console.log("cargando")}

      /> */}
<View style={stiloss.head}>
{/*    <MaterialCommunityIcons name="creation" size={24} color="black" /> */}
{/* <Button
  onPress={() => props.navigation.navigate("ClienteListado")}
  title="Ir listado de clientes"
/> */}
{/* <Button
  onPress={() => props.navigation.navigate("CrearClientes")}
  title="Crear un nuevo cliente"
/> */}

<Image  source={logo}   style={stiloss.logo} /> 
<Text style={{color:"black",fontSize:20}}><MaterialCommunityIcons name="cash" size={20} color="black" />{suma? (<Text>{JSON.stringify(suma.total)}<Text style={{color:"green",fontSize:24}}>$</Text></Text>):(<Text>Deslice para recargar</Text>)}</Text> 
</View>

   {clientes.map(cli => ( <ListItem
      key={cli.id} 
      bottomDivider
      onPress={() => {
        props.navigation.navigate("Perfil", {
          id: cli.id, 
        });
      }}
    >

      <ListItem.Chevron />
      <Avatar
        source={{
          uri:
          "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png",
        }}
        rounded
        />
     
      <ListItem.Content>
        <ListItem.Title key={`${cli.id}`}><Text>N°({`${cli.id}`})</Text></ListItem.Title>    
        <ListItem.Subtitle><Text><MaterialCommunityIcons name="account-cash" size={15} color="black" />: {`${cli.precio}`} $</Text></ListItem.Subtitle>
      </ListItem.Content>

    </ListItem>))}
      
    <Button onPress={() => props.navigation.navigate("ClienteListado")}
  title="Ir listado de clientes"/>
                          <Text style={{alignSelf:"center"}}>PolarizadosMonkey © 2022 Copyright</Text>
<Button
  onPress={() => props.navigation.navigate("CrearClientes")}
  title="Crear clientes"
/>
{/* <Text style={{color:"green",fontSize:15}}>Usuarios Ingresados: {clientes.length} <MaterialCommunityIcons name="account-box" size={15} color="green" /></Text> */}

</ScrollView>
  )
}

const stiloss = StyleSheet.create({
  titulo:{color:"#ffffff",textAlign:"center",fontSize:15,alignSelf:'center'},
  tituloDOS:{backgroundColor:'black',alignSelf:'center',width:200,height:25,marginBottom:10,marginTop:10,borderRadius:3000,textAlign:'center'},
  container:{backgroundColor:'#000000'},
  datos:{
    backgroundColor:'#191919',width:400,alignSelf:'center',borderRadius:20
  },
  logoBlack:{
    width:500,
    height:110,
    alignSelf:'center',
    position:'relative',
    opacity:0.5
  },
  head:{
    marginTop:50,
    backgroundColor:"white",
    borderColor:"green",
    alignItems:"center"
  },
  logo:{
    position:"relative",
     width:200,
     padding:50,
     height:210,
     padding:0,
     marginTop:10,
     borderRadius:40,
     alignItems:"center",
     opacity:0.5
 },

})





export default StackSreens
