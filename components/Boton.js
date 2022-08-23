import React from 'react'
import {View,Boton,Text,TouchableOpacity,StyleSheet} from 'react-native'

//aqui los iconos
import { MaterialCommunityIcons } from '@expo/vector-icons'; 




export function BlackBoton(props){

const {onPress,text} = props


  return (
    <TouchableOpacity style={{...stilo.boton,backgroundColor:'#0a0a0a'}} onPress={onPress}>
        <Text
        style={{...stilo.botonTexto,color:'#ffffff',}}
        >
        {/* aqui utilizamos el texto que esta en el boton en el archivo crear clientes */}
        {text} <MaterialCommunityIcons name="content-save" size={15} color="white" /></Text>
    </TouchableOpacity>
  )
}

export function YellowBoton(props){

    const {onPress,text} = props
    
    
      return (
        <TouchableOpacity style={{...stilo.boton,backgroundColor:'yellow'}} onPress={onPress}>
            <Text
            style={{...stilo.botonTexto,color:'#000000',}}
            >
            {/* aqui utilizamos el texto que esta en el boton en el archivo crear clientes */}
            {text} <MaterialCommunityIcons name="skip-next-circle" size={24} color="black" /></Text>
        </TouchableOpacity>
      )
    }



    export function RedBoton(props){

      const {onPress,text} = props
      
      
        return (
          <TouchableOpacity style={{...stilo.delete,backgroundColor:'red'}} onPress={onPress}>
              <Text
              style={{...stilo.textDelete,color:'#ffffff',}}
              >
              {/* aqui utilizamos el texto que esta en el boton en el archivo crear clientes */}
              {text} <MaterialCommunityIcons name="close-octagon" size={15} color="black" /></Text>
          </TouchableOpacity>
        )
      }

const stilo = StyleSheet.create({
    boton:{
            alignSelf:'center',
            padding:15,
            width:'90%',
            borderRadius:10,
         /*    opacity:1, */
            textShadowColor:'#f1f1f1'
    },
    delete:{
      padding:15,
      width:'30%',
      borderRadius:100,
      borderColor:'#ffffff'
    },
    textDelete:{
      textAlign:'center',
      fontSize:11
    },
    botonTexto:{
        textAlign:'center',
        fontSize:18
    }

})


