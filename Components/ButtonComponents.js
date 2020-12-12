import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const CustomButton=(props)=>{

    // var btncolor=props.color != undefined? props.color : 'blue';
     

    return(
        <TouchableOpacity 
          activeOpacity={0.5}
          onPress={props.onPressEvent()}
          disabled={true}
          >
         <View style={styles.buttonContainer}>
               <Text 
               style={styles.buttonText}>{props.text}
               </Text>
         </View>
     </TouchableOpacity>
    );
}


const styles= StyleSheet.create({

    buttonContainer:{ 
        backgroundColor:'blue',
        paddingHorizontal:20,
        padding:10,
        borderRadius:50,
     },
     buttonText:{
         color:'white',
         fontSize:20
        }


})

export default CustomButton;