import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
const TodoForm = ({ addTodo }) => {

    const [text, setText] = useState({})
    const changeHandler = (val) => {
        setText(val)
    }
    return (
        <View>
            <TextInput
                multiline
                numberOfLines={4}
                maxLength={40}
                style={styles.input}
                onChangeText={changeHandler}
                value={text}
                placeholder="New  ToDos...."
            />
            <Button color='coral' onPress={() => addTodo(text)} title='add todo' />
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        padding: 10,
        borderColor: 'coral',
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 1,
        borderRadius: 2,
        marginBottom: 10
    },
})

export default TodoForm