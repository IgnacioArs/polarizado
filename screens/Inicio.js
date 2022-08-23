import React, { useEffect } from 'react'
import { version } from 'react-dom'
import { Button, Image, RefreshControl, StyleSheet, Text, View } from 'react-native'
import Logo from '../image/losgoSinVorde.jpeg'
import logoBlack from '../image/LogoFondoNegro.jpeg'

//importamos el boton
import { BlackBoton,YellowBoton } from '../components/Boton'

//ahora para navegar desde esta clase padre a las de hijo aremos lo siguiente
import { useNavigation } from '@react-navigation/native'





const Inicio = () => {

const navegacion = useNavigation()




useEffect(() => {


    
}) 




return (
<View style={stilos.container}>
    <Image style={stilos.imagen} source={Logo}/>
    <View style={stilos.fondoBoton}>
  <YellowBoton onPress ={() => navegacion.navigate("StackScreens")} text="Iniciar Taller" />
 {/*    <Button  title="Inicar Taller" type="outline" onPress ={() => navegacion.navigate("StackScreens")}  /> */}
    </View>
    <View style={stilos.pie}>
               <Image source={logoBlack} style={styles.logoBlack} title="hola"/> 
                <Text style={stilos.version}><Text>© 2022 Copyright</Text></Text>
    </View>
    
</View>
)}
 const stilos = StyleSheet.create({
     container:{
         backgroundColor:"black",width:420,height:850,alignItems:"center"
     },
     imagen:{
         height:200,width:200,backgroundColor:"#ffffff",marginTop:80,borderRadius:5000,shadowColor:"#ffffff",borderColor:"#ffffff",shadowRadius:200,shadowOpacity:1
     },
     pie:{
         marginTop:180,
         height:50,width:500,backgroundColor:"black",borderRadius:5000,alignItems:"center",opacity:1
     },
     version:{
         color:"white",fontSize:14,marginTop:-40,backgroundColor:'black',opacity:0.5
     },
    fondoBoton:{
        marginTop:100
    }
 });

 const styles = StyleSheet.create({

    logoBlack:{
            width:450,
            height:180,
            marginTop:-60,
            opacity:0.5,
           
    },

    
  
}) 
/* const style = StyleSheet.create({
constainer:{width:1400,height:600,backgroundColor:'#ffff00',alignItems:'center'},
imagen:{width:25,height:20,flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',borderRadius:5000}
}) */

export default Inicio