import { ScrollView, StyleSheet, Text, View,Image,TextInput,Button
} from 'react-native';
import React, { useState } from 'react'
import logo from '../image/losgoSinVorde.jpeg'
import CalendarPicker from 'react-native-calendar-picker';
import logoBlack from '../image/LogoFondoNegro.jpeg'
import {BlackBoton} from '../components/Boton';

//importamos la base de datos
import db from '../util/clientes.js'
import { useNavigation } from '@react-navigation/native';

const ClienteDetalle = (props) => {


    const navegacion = useNavigation()
/* 
    console.log("viendo el dato o cliente a actualizar",props.route.params)
 */
    const [values,setValues] = useState({
        fecha:'',
    });

        const [fecha,setFecha] = useState("")
        const [nombre,setNombre] = useState("")
        const [instagram,setInstagram] = useState("")
        const [detalle,setDetalle] = useState("")
        const [tarea,setTarea] = useState("")
        const [precio,setPrecio] = useState("")
        const [numeroUsuario,setNumeroUsuario] = useState(props.route.params)




const TomarFecha = (fecha,value) =>{
    
            setValues({...values, [fecha]:value})
            console.log("FECHA =>",values.fecha)
            setFecha(values.fecha)
}
 
const editarClientes = (id) => {
/*     Car.update( 1, {brand:'gm', model:'corsa', hp:70} )
    .then( updated => console.log('Cars updated: '+ updated) )
    .catch( err => console.log(err) ) */
    if(values.fecha.length == 0 || nombre.length ==0 || instagram.length ==0 || detalle.length ==0 || tarea.length==0 || precio.length ==0){
        alert("!Existen campos vacios para actualizar")
      }else{

       const nuevoCliente= {
        fecha:fecha.toString(),
        nombre:nombre,
        instagram:instagram,
        detalle:detalle,
        tarea:tarea,
        precio:precio
       }


       
      
      

       const n = parseInt(numeroUsuario.id)

       console.log("ID CLIENTE ACTUALIZAR",id,"MOSTRANDO N",n,"DATOS DEL NUEVO CLIENTE",nuevoCliente)     
       db.update(n,{fecha:nuevoCliente.fecha.toString(), nombre:nuevoCliente.nombre.toString(), instagram:nuevoCliente.instagram.toString(), detalle:nuevoCliente.detalle.toString(), tarea:nuevoCliente.tarea.toString(), precio:nuevoCliente.precio})
       .then( id => console.log('Cliente actualizado con el id: '+ id) )
       .catch( err => console.log(err))  
       console.log("numeroid",id,"fecha:",fecha.toString(),"nombre",nombre,"instagram",instagram,"detalle",detalle,"tarea",tarea,"precio",precio)
       navegacion.navigate("StackScreens")  

    
    }

}



return (
  <ScrollView style={styles.container}>
  <View  style={styles.logo} >
   <Image  source={logo}   style={styles.logo} /> 
  </View>
 
    
      <CalendarPicker  width={370} height={0}  style={styles.calendario} onDateChange={value => TomarFecha('fecha',value)}/>
    
      <View  style={styles.inputGroup} >
      
      </View>
      <View  style={styles.inputGroup} >
          <TextInput placeholder="Usuario Nombre" onChangeText={setNombre} />
      </View>
      <View  style={styles.inputGroup} >
          <TextInput placeholder="Instagram Cliente"  onChangeText={setInstagram} />
      </View>
      <View  style={styles.inputGroup} >
          <TextInput placeholder="Detalles Del Carro" onChangeText={setDetalle} />
      </View>
      <View  style={styles.inputGroup} >
          <TextInput placeholder="Tarea a realizar" onChangeText={setTarea} />
      </View>
      <View  style={styles.inputGroup} >
      <TextInput  placeholder="$ Precio" keyboardType ='numeric' onChangeText={setPrecio} value={precio}/>
      </View>
      <BlackBoton onPress ={() => editarClientes(props.route.params)} text="Editar Cliente" />
      <View  style={styles.inputGroup} ></View>
  
      <Image source={logoBlack} style={styles.logoBlack} title="hola"/> 
  </ScrollView>
)



}


const styles = StyleSheet.create({
  container:{
      backgroundColor:'#ffffff',
      flex:1,
      padding:35,
      opacity:5
  },
  calendario:{
     padding:0,
     marginBottom:0,
     alignItems:"center", 
     width:-30,
     marginRight:200,
     marginLeft:200,
     backgroundColor:'#000000'
  },  

 inputGroup:{
     flex:1,
     padding:0,
     marginBottom:15,
     borderBottomWidth:3,
     borderBottomColor:'#cccccc',
     alignItems:"center"
 },

 logo:{
     position:"relative",
      width:240,
      padding:50,
      height:250,
      padding:0,
      marginTop:10,
      borderRadius:40,
      alignItems:"center",
      marginLeft:35,
      marginBottom:25,
      opacity:0.5
  },

  logoBlack:{
    width:335,
    height:80,
    marginTop:10,
    marginBottom:40,
    flex:1,
    alignItems:"center",
    borderRadius:1000,
    shadowRadius:1.5,
    shadowColor:'black',
    opacity:0.5
},
  fondocalendario:{
      width:50,
      
  }

  

}) 

export default ClienteDetalle
