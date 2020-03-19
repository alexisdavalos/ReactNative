import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

//Component Imports
import Header from './components/header.js'
import TodoItem from './components/TodoItem.js'
import AddTodo from './components/addTodo.js'


export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2'},
    { text: 'play on the switch', key: '3'}
  ])
  //Press handler -- deletes task
  const pressHandler = (key) => {
    setTodos((prevTodos) =>{
      return prevTodos.filter(todo => todo.key !== key)
    })
  }
  //Submit Handler -- adds task
  const submitHandler = (text) =>{
    //only add if text is > 3 char
    if(text.length > 3){
      setTodos((prevTodos)=>{
        return [
          {text, key: Math.random().toString()},
          ...prevTodos, 
        ]
      })
    }else{
      Alert.alert('OOOPS!', 'Tasks Must Be At Least 3 Characters', [
        //Alert Button Configuration
        {text: 'Understood', onPress: () => console.log('alert closed')}
      ])
    }
  }

  return (
    //Container wraps App and allows for Keyboard dismissal
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={({item}) =>(
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  content:{
    padding: 40,
    flex: 1,
  },
  list:{
    flex: 1,
    marginTop: 20,

  }
});
