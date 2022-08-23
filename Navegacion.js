import React, { useEffect, useState } from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
//nuestras subsNAVEGACIONES
import {createNativeStackNavigator} from "@react-navigation/native-stack"


//importamos los iconos
import { MaterialCommunityIcons } from '@expo/vector-icons'; 



//importamos las ventanas
import Inicio from './screens/Inicio'
import Configuracion from './screens/Configuracion'
import StackScreens from './screens/StackSreens'

//aqui importamos las demas ventanas necesarias para realizar el crud
import CrearClientes from './screens/CrearClientes'
import ClienteListado from './screens/ClienteListado'
import ClienteDetalle from './screens/ClienteDetalle'
import Perfil from './screens/Perfil';




//tabs navigation
const Tab = createBottomTabNavigator();

//aqui nuestra stack navegacion
const StackInicio = createNativeStackNavigator();


import db from './util/clientes.js'


//aqui creamos el stack que funcionara por defecto
function MyStack(){
    return(
        <StackInicio.Navigator initialRouteName='Inicio Aplicacion'>
            
            {/* aqui iria inicio por defecto  */}
            <StackInicio.Screen name="Inicio Aplicacion" component={Inicio} options={{headerShown:false}}/>
            {/*  y este stack va ser para las demas ventanas */}
             <StackInicio.Screen name="StackScreens" options={{headerShown:false}} component={StackScreens}/>
            {/*  LAS DEMAS NAVEGACION PARA EL CRUD */}
             <StackInicio.Screen name="ClienteListado" options={{headerShown:false}} component={ClienteListado}/>
             <StackInicio.Screen name="CrearClientes" options={{headerShown:false}} component={CrearClientes}/>
             <StackInicio.Screen name="ClienteDetalle" options={{headerShown:false}} component={ClienteDetalle}/>
             <StackInicio.Screen name="Perfil" options={{headerShown:false}} component={Perfil}/>
        </StackInicio.Navigator>
    )
}



//creamos nuestra tabnavigation
function MyTabs(){




  
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
    setSuma(data.total)
    setTotal(data)
    console.log("VIENDO SUMA",total,suma)
    }
    
    
    useEffect(() => {
    db.cantidad().then(data => setCantidad(data))
    db.suma().then(data => data.forEach(c => LaSuma(c)))
    db.all()
    .then( 
    datos => datos.forEach( c => {if (c || c>c) {
      PintarClientes(c)
    }})) 
    },[])
    

    
    
  
  

return(
    <Tab.Navigator initialRouteName='Inicio' screenOptions={{tabBarActiveTintColor:"black"}}>
        <Tab.Screen name="Inicio" component={MyStack} options={{tabBarLabel:'Inicio Taller',tabBarIcon:({color,size})=>(
             <MaterialCommunityIcons name="home" size={24} color="black" />
        ),
        //ahora para ocultar lo de arriba es asi
        headerShown:false,
        //para ver notificaciones es este
       /*  tabBarBadge:10 */
        }}/>
        <Tab.Screen name="StackScreens" component={StackScreens} options={{tabBarLabel:`${JSON.stringify(suma)}$`,tabBarIcon:({color,size})=>(
           <MaterialCommunityIcons name="cash" size={24} color="black" />
        ),
        //ahora para ocultar lo de arriba es asi
        headerShown:false,
    
        //para ver notificaciones es este
       /*  tabBarBadge:10 */
        }}/>
        
        <Tab.Screen name="Configuracion" component={Configuracion} options={{tabBarLabel:'Busqueda Rapida',tabBarIcon:({color,size})=> (
           <MaterialCommunityIcons name="account-search" size={24} color="black" />
        ),
        headerShown:false,
        tabBarBadge:`${clientes.length}`,

        }}/>
    </Tab.Navigator>
)

}

export default function Navegacion(){
return (
    <NavigationContainer>
        <MyTabs/>
    </NavigationContainer>
)
}