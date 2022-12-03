import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const TodoList = ({ item, deleteTodo }) => {
    return (
        <TouchableOpacity onPress={()=>deleteTodo(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 1,
        borderRadius: 10,
    }
});

export default TodoList