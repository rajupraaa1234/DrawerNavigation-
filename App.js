/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import {
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';



function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
    </View>
  );
}

function Tasks() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tasks</Text>
    </View>
  );
}
const Drawer = createDrawerNavigator();

const CustomDrawer = props =>{
   return (
        <View style={{flex:1}} > 
                <DrawerContentScrollView {...props}>
                      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:20,backgroundColor:"#f6f6f6",marginBottom:20}}>
                          <View>
                              <Text>Raju kumar</Text>
                              <Text>rajupraaa1234@gmail.com</Text>
                          </View>
                          <Image source = {{uri: 'https://images.unsplash.com/photo-1627248539878-8c09d0f3e61e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=370&q=80',}}
                                style={{width:80 , height:80,borderRadius:40}}
                          />
                      </View>
                  <DrawerItemList {...props} />
              </DrawerContentScrollView>
              <TouchableOpacity style={{bottom:50,position:'absolute',backgroundColor:'#f6f6f6',right:0,left:0,padding:20}}>
                     <Text style={{fontSize:16,color:'red',fontWeight:'bold'}}>Logout</Text>    
              </TouchableOpacity>
            
        </View>
   )
}

const DrawerNavigator = () =>{
  return <Drawer.Navigator drawerContent={(props)=><CustomDrawer {...props}/>}>
       <Drawer.Screen component={Home} name='Home' />
       <Drawer.Screen component={Tasks} name='Tasks' />
  </Drawer.Navigator>
}

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}


