import React from 'react';
import { Text,StyleSheet,Button,SafeAreaView,TextInput,Image, View } from 'react-native';



function LoginForm({ navigation }) {
    const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  console.log("Hi Alaa")

    return (
      
        <View style={styles.container} >
           
            
       
      </View>
     
    );
  }



const styles=StyleSheet.create({
  image: {
    width: 500,
    height: 400,
    
  },

  tinyLogo: {
    width: 50,
    height: 50,
  },
  container:{
    flex:1,
    backgroundColor:"#f8be40",
    justifyContent:'center', //vertical
    alignItems:'center',//Horizental
},
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
        
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        color:'red',
    
      },
      

})




export default LoginForm;