import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import CustomButton  from './Components/ButtonComponents'; 
// import {todoItems} from './constants/dummyTodoList';

export default function App() {
  const todoItems=[
    {key:Math.random().toString(),data:"Shopping"},
    {key:Math.random().toString(),data:"picnic"},
    {key:Math.random().toString(),data:"Prepare lunch"},
    {key:Math.random().toString(),data:"Study time"}

  ]

  
  const [getText,setText] = useState('');
  const [getList,setList] = useState(todoItems);
  const [editingItem,setEditingItem] = useState(0);


  const addItem=()=>{

    console.log(getText);
    setList([
      ...getList,
      {key:Math.random().toString(),data:getText}
    ]);
    setText('');
    Keyboard.dismiss();
  }

  const removeItem=(itemkey)=>{
    var list=getList.filter(item => item.key != itemkey);
    setList(list);
  }

  const editItem=(item) => {
    setText(item.data);
    setEditingItem(item.key);

  }

  const updateItem=() =>{
    setList(list => getList.map(item =>
      item.key === editingItem ?
      { key:item.key,data :getText }: item
       ));

       setText('');
       setEditingItem(0);
  }

  const scrollView=(
    <ScrollView  style={styles.scrollview}> 
      {getList.map((item,index)=> 

      <TouchableOpacity 
      key={item.key}
      activeOpacity={0.7}
      onPress={() => editItem(item)}
       >
      <View
       style={styles.scrollViewItem} > 
        <Text style={styles.scrollViewText}>
           {index+1}:  {item.data}
         </Text>


         

        <TouchableOpacity
            onPress={()=>removeItem(item.key)}
        >
         <View  style={styles.crossTextContainer}>
           <Text style={styles.crossText}>X</Text>
         </View>

         </TouchableOpacity>
     </View> 

     </TouchableOpacity>
       )}

      </ScrollView>

  );

  const emptyScrollView=(
    <View  style={{paddingTop:30}}>
    <Text 
    style={{fontStyle:'italic',
    fontSize:16,
    color:'grey'}}>No Todo items! hurry up!!</Text>
      </View>
  );

var setbtnText=editingItem === 0 ? "ADD" : "UPDATE" ;

  return (
    <View style={styles.container}>

      <Text  style={styles.tittle}>Todo</Text>

      <View  style={styles.inputContainer}>

         <TextInput 
         style={styles.textInput}
         placeholder="Enter here"
         onChangeText={Text => setText(Text)}
         value={getText}
          ></TextInput>

{/*       
      <CustomButton  
      text={editingItem === 0 ? "ADD" : "UPDATE"}
      disabled={getText.length <=0}
      onPressEvent={editingItem === 0 ? addItem : updateItem}
       /> */}

         <TouchableOpacity 
          activeOpacity={0.5}
          onPress={editingItem === 0 ? addItem : updateItem}
          disabled={getText.length <=0}
          
          >
         <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}
          >{setbtnText}</Text>
         </View>
     </TouchableOpacity> 

         {/* <Button 
          title={editingItem === 0 ? "ADD" : "UPDATE"}
          onPress={editingItem === 0 ? addItem : updateItem}
         disabled={getText.length <=0}
         /> */}
      </View>

      {getList.length <=0 ? emptyScrollView : scrollView}
    </View>
  );
}

const styles = StyleSheet.create({

  tittle:{
    fontSize:64,
    color:'orangered',
  },

  buttonContainer:{ 
    backgroundColor:'orange',
    paddingHorizontal:20,
    padding:10,
    borderRadius:50,
    marginLeft:10
 },
 buttonText:{
     color:'white',
     fontSize:16
    },

  crossText:{
    fontSize:16,
    color:'red',
    fontWeight:'bold'
  },

  crossTextContainer:{
    backgroundColor:'grey' ,
    borderRadius:50 ,
    padding:5 ,
    width:30 ,
    justifyContent:'center',
    alignItems:'center'
  },

  scrollview:{
    width:'100%',
    marginTop:20

  },

  scrollViewText:{
    fontSize:20,
    color:'white'
  },

  scrollViewItem:{
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'orange',
    width:'90%',
    padding:10,
    margin:5,
    alignSelf:'center',
    borderRadius:10
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop:40,
  },

  inputContainer:{
    flexDirection:"row",
    width:'70%',
    justifyContent:"space-between",
    alignItems:"stretch"
  },

  textInput:{
  borderColor:'red',
  borderWidth:2,
  width:'70%',
  borderRadius:10,
  fontSize:16,
  paddingStart:12
 },

});
