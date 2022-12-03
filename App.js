import React, { useState } from 'react'
import { View, StyleSheet, FlatList, TouchableWithoutFeedback, Keyboard,Alert } from 'react-native'
import Header from './comonenets/Header'
import TodoList from './comonenets/TodoList';
import TodoForm from './comonenets/TodoForm';
const App = () => {
  const [todo, setTodo] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' },

  ]);
  const deleteTodo = (key) => {
    setTodo(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }
  const addTodo = (text) => {
    if (text.length > 4) {
      // setText('');
      setTodo(prevTodos => {
        return [
          { text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    }
    else{
        Alert.alert('OOPS','Enter More Chars',[
         { text:'UnderStood?'}
        ])
    }

  }
  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <TodoForm addTodo={addTodo} />
          <View style={styles.list}>
            <FlatList
              data={todo}
              renderItem={({ item }) => (
                <TodoList item={item} deleteTodo={deleteTodo} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20
  }
})

export default App
