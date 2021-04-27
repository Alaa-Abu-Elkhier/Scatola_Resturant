import React from 'react';
import { Text, View,SafeAreaView,Image,TouchableWithoutFeedback} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Restaurant,OrderDelivery } from "./screens";
import Tabs from "./navigation/tabs";


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown:false //to preven defult header to show
      }}
      
      
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Tabs} />
      <Stack.Screen name="Restaurant" component={Restaurant} />
      <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
        
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

export default App;