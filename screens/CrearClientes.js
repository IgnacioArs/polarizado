import { StyleSheet, Text, View,ScrollView,TextInput,Button,Image} from 'react-native';
import React, { useState } from 'react'
import CalendarPicker from 'react-native-calendar-picker';
//aqui importamos el boton
import {BlackBoton} from '../components/Boton';
import { Icon } from '@rneui/base';

//logos
import logo from '../image/losgoSinVorde.jpeg'
import logoBlack from '../image/LogoFondoNegro.jpeg'

//importamos la base de datos
import db from '../util/clientes.js'
import { useNavigation } from '@react-navigation/native';



const CrearClientes = (props) => {

const navegacion = useNavigation()

const [values,setValues] = useState({
    fecha:'',
});

    const [fecha,setFecha] = useState("")
    const [nombre,setNombre] = useState("")
    const [instagram,setInstagram] = useState("")
    const [detalle,setDetalle] = useState("")
    const [tarea,setTarea] = useState("")
    const [precio,setPrecio] = useState("")
    


    




    const TomarFecha = (fecha,value) =>{
    
        setValues({...values, [fecha]:value})
        console.log("FECHA =>",values.fecha)
        setFecha(values.fecha)
    }

        const CrearCliente = () => {
 
        
          if(values.fecha.length == 0 || nombre.length ==0 || instagram.length ==0 || detalle.length ==0 || tarea.length==0 || precio.length ==0){
            alert("!Existen campos vacios")
          }else{

       /*     var params =[values.fecha,nombre,instagram,detalle,tarea,precio] */
    
          db.create( {fecha:`${fecha.toString()}`, nombre:`${nombre}`, instagram:`${instagram}`, detalle:`${detalle}`, tarea:`${tarea}`, precio:precio} )
           .then( id => console.log('Cliente creado con el id: '+ id) )
           .catch( err => console.log(err))  
           console.log("fecha:",fecha.toString(),"nombre",nombre,"instagram",instagram,"detalle",detalle,"tarea",tarea,"precio",precio)
           navegacion.navigate("StackScreens")

          }
     
    
    }

  return (
    <ScrollView style={styles.container}>
    <View  style={styles.logo} >
     <Image  source={logo}   style={styles.logo} /> 
    </View>
    
        <View  style={styles.inputGroup} >        
        </View>
      
        <CalendarPicker  width={370} height={0}  style={styles.calendario} onDateChange={value => TomarFecha('fecha',value)}/>
      
        <View  style={styles.inputGroup} >
        
        </View>
        <View  style={styles.inputGroup} >
            <TextInput placeholder="Usuario Nombre"  onChangeText={setNombre} value={nombre} />
        
        </View>
        <View  style={styles.inputGroup} >
            <TextInput placeholder="Instagram Cliente" onChangeText={setInstagram} value={instagram} />
        </View>
        <View  style={styles.inputGroup} >
            <TextInput placeholder="Detalles Del Carro"  onChangeText={setDetalle} value={detalle} />
        </View>
        <View  style={styles.inputGroup} >
            <TextInput placeholder="Tarea a realizar"  onChangeText={setTarea} value={tarea} />
        </View>
        <View  style={styles.inputGroup} >
            <TextInput  placeholder="$ Precio" keyboardType ='numeric' onChangeText={setPrecio} value={precio}/>
        </View>
    
                <BlackBoton onPress ={() => CrearCliente()} text="Ingresar Cliente" />
   
         
       <Image source={logoBlack} style={styles.logoBlack} title="hola"/> 
        
    {/*     <View  style={styles.pie} >
       
        <Tabs/>  
         
        </View> */}
       {/*  <Tabs/>   */}

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
       backgroundColor:'white',
       color:'#ffffff'
    },  

   inputGroup:{
       flex:1,
       padding:0,
       marginBottom:15,
       borderBottomWidth:3,
       borderBottomColor:'#ffffff',
       alignItems:"center",
       fontSize:100,
       color:'#ffffff',
       textDecorationColor:'#ffffff',
       borderColor:'white'
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
        backgroundColor:'#ffffff'
    },
    pie:{
     /*    marginTop:0,
        marginBottom:36,
        shadowOpacity:0,
        width:400,
        shadowColor:'#000000' */
        marginBottom:100,
        borderRadius:5000
    }
    
  
}) 
export default CrearClientes
