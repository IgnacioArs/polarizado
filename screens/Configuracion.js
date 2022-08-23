import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View,Button, RefreshControl,Image} from 'react-native';
import { FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 



//importamos la base de datos
import db from '../util/clientes.js' 
import { Avatar, ListItem } from '@rneui/base';

import logo from '../image/losgoSinVorde.jpeg'

const Configuracion = (props) => {

const [nombre,setNombre] = useState()
const [cliente,setClientes] =useState([])
const [datos,setDatos] =useState()

const [refrescar,setRefrescar] = useState(false)

const realizarBusqueda =(nombre) => {
   console.log("el nombre","'"+nombre+"'")
   db.findByBrand(nombre) 
  .then( nombres => nombres.forEach(d=>{setClientes(d),console.log(cliente),recorriendoDatos(d)}))
  .catch( err => console.log(err) )
  if(!datos){
    alert("!Cliente no existe")
  }

}


const recorriendoDatos = (d) => {
  setDatos("")
setDatos(d)
console.log("viendo los datos",datos)
alert("Listo para editar o si no recargar ")
/* if(!datos){
alert("!Cliente no existe")
} */

}





useEffect(()=> {

  setDatos(null)
},[])

const cargar = React.useCallback(()=> {
  setRefrescar(true)
  setDatos(null)
  setNombre("")
  setRefrescar(false)
  })

  return (
 
    
     <ScrollView style={{backgroundColor:"white"}} refreshControl={<RefreshControl refreshing={refrescar} colors={["#000000"]} onRefresh={cargar}/>}>
          <View style={stilos.container}>
          <Image  source={logo}   style={stilos.logo} /> 
      <Text style={{
        fontSize:30,
        textAlign:"center",
        marginTop:"20%",
        color:"black"}}>Buscar cliente<MaterialCommunityIcons name="instagram" size={15} color="black" /><MaterialCommunityIcons name="account-search" size={24} color="black" /></Text>
        <TextInput style={{position:"absolute",
        alignSelf:"center",
        color:"white",
        marginTop:"115%",
        fontSize:20,
        backgroundColor:"#000000",
        borderRadius:10,
        width:300,
        textAlign:"center",}} onChangeText={setNombre} value={nombre} autoFocus={true}></TextInput>
        <Button
      onPress={() => realizarBusqueda(nombre)}
      title="Buscar al cliente"
    />
    <View>
    <Text style={{
        fontSize:15,
        textAlign:"center",
        marginTop:"60%",
        color:"black"}}>{cliente?(<Text>Instagram {datos?(<Text>{`${datos}`? (<ListItem
          key={datos.id} 
          bottomDivider
          onPress={() => {
            props.navigation.navigate("ClienteDetalle", {
              id:`${datos.id}`, 
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
            <ListItem.Title key={`${datos.id}`}><Text>N°({`${datos.id}`})</Text></ListItem.Title>
            <ListItem.Subtitle><Text><MaterialCommunityIcons name="calendar" size={15} color="black" />: {`${datos.fecha}`}</Text></ListItem.Subtitle>
            <ListItem.Subtitle><Text><MaterialCommunityIcons name="account-box" size={15} color="black" />: {`${datos.nombre}`}</Text></ListItem.Subtitle>
            <ListItem.Subtitle><Text><MaterialCommunityIcons name="instagram" size={15} color="black" />: {`${datos.instagram}`}</Text></ListItem.Subtitle>
            <ListItem.Subtitle><Text><MaterialCommunityIcons  name="car" size={15} color="black" />: {`${datos.detalle}`}</Text></ListItem.Subtitle>
            <ListItem.Subtitle><Text><MaterialCommunityIcons name="hammer-wrench" size={15} color="black" />: {`${datos.tarea}`}</Text></ListItem.Subtitle>
            <ListItem.Subtitle><Text><MaterialCommunityIcons name="account-cash" size={15} color="black" />: {`${datos.precio}`} $</Text></ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>):(<Text>No existe el cliente</Text>)} <MaterialCommunityIcons name="playlist-check" size={24} color="black" /></Text>):(<Text>Buscando cliente¿? <MaterialCommunityIcons name="account-search" size={24} color="black" /></Text>)}</Text>):(<Text>No Existe cliente</Text>)}</Text>
    </View>
    </View>
     </ScrollView>

  )
}


const stilos = StyleSheet.create({
  container:{
    width:325,borderRadius:10,backgroundColor:"white",alignSelf:"center",marginTop:50,height:725
  },
lista:{
    backgroundColor:"white",
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
   marginLeft:55,
   opacity:0.5
},
 
});

export default Configuracion
