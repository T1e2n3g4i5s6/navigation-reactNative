import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screen/home';
import DetailScreen from './src/screen/detail';
import Mystack from './src/navigators/stack';
import 'react-native-gesture-handler'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { FlatList, View, Text } from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';


const Tab = createBottomTabNavigator();
const Url = 'https://dummyjson.com/products/categories'


const [data, setData] = useState("");
// useEffect(() => {
//   async() => {
//     try{
//       const response = await axios.get('https://dummyjson.com/products/categories')
//       // setData(response.data)
//     }
//     catch(error){console.log(error)}
//   }
// },[])

export default function App() {

  return (
    <NavigationContainer>
      {/* <Mystack/> */}
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }} />
        <Tab.Screen name='Detail' component={DetailScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
              ),
            }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}