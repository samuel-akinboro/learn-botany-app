import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { COLORS, SIZES } from '../theme/theme'

const LoginScreen = ({ navigation }) => {
 return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
    </View>
  )
}

LoginScreen.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')} style={{marginLeft: 20}}>
        <Ionicons name="chevron-back" size={30} />
      </TouchableOpacity>
    ),
    headerShown: true,
    headerTitle: '',
    headerStyle: {
      backgroundColor: COLORS.background,
      borderBottomWidth: 0,
      shadowOpacity: 0,
      elevation: 0
    }
  };
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background
  }
})