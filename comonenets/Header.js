import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
const Header = () => {



  return (
    <View style={styles.header}>
      <Text style={styles.text}>My ToDos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'coral',
    height: 60,
    paddingTop: 15

  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }
})

export default Header