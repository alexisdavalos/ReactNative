import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const data = [{name: 'shaun', id: 1},
  {name: 'joe', id: 2},
  {name: 'bill', id: 3},
  {name: 'fen', id: 4},
  {name: 'sam', id: 5}]
  const [people, setPeople] = useState(data)
  const pressHandler = (id) =>{
    console.log(people)
    setPeople((prevPeople) =>{
      return prevPeople.filter(person => person.id !== id)
    })
  }
  const resetState = () =>{
      return setPeople(data)
  }
  return (
    <View style={styles.container}>

      <FlatList 
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({item}) =>(
          <TouchableOpacity onPress={()=> pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
        />
        <Button title='Reset Blocks' onPress={()=> resetState()}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
    paddingHorizontal:20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop:24,
    padding: 30,
    backgroundColor: 'skyblue',
    fontSize: 24,
    marginHorizontal: 10
  }
});
