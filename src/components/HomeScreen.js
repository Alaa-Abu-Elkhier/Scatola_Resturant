import React from 'react';
import { Text,View,StyleSheet,Button} from 'react-native';

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        
      </View>
    );
  }
const styles=StyleSheet.create({
    Header:{
        backgroundColor:'yellow',
        height:80,
        justifyContent:'center', //vertical
        alignItems:'center',//Horizental
    },
    red:{
        
        color:'red',
        textShadowColor:'green',
        fontWeight: 'bold',
        fontSize: 30,
        // textAlign:'center',//Horizental
        // textAlignVertical: 'center',
        
       
        
    }

})




export default HomeScreen;

