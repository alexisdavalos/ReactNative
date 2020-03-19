import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

export default function TodoItem({item, pressHandler}){
    return(
       <TouchableOpacity>
           <View style={styles.item}>
            <MaterialIcons name='delete' size={18} color={'#333'}/>
            <Text style={styles.itemText}onPress={() => pressHandler(item.key)}>{item.text}</Text>
           </View>
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        flexDirection: 'row',
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    },
    itemText: {
        width: '100%',
        textAlign: 'center',
        textTransform: 'capitalize'
    }
})