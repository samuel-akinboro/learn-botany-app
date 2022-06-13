import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../theme/theme'

const OnboardingThreeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/read.png')} style={styles.image} />
      <Text style={styles.heading}>Read Many Articles About Plant</Text>
      <Text style={styles.paragraph}>
        Let's learn more about beautiful plants and read 
        many articles about plants and gardening
      </Text>
      <View style={styles.dotsContainer}>
        <View style={styles.dot}></View>
        <View style={styles.dot}></View>
        <View style={[styles.dot, { backgroundColor: COLORS.primary }]}></View>
      </View>
      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('LoginScreen')}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  )
}

export default OnboardingThreeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: COLORS.background
  },
  image: {
    width: SIZES.width * 0.90,
    height: SIZES.height * 0.35,
    resizeMode: 'contain',
    marginTop: SIZES.height * 0.15,
    marginBottom: 50
  },
  heading: {
    fontSize: SIZES.h4,
    fontWeight: '600'
  },
  paragraph: {
    fontSize: SIZES.p,
    color: COLORS.greyText,
    width: SIZES.width * 0.70,
    textAlign: 'center',
    lineHeight: 18,
    marginTop: 20
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 50,
    justifyContent: 'space-between',
    marginTop: 60
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: COLORS.grey
  },
  button: {
    width: SIZES.width * 0.90,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginTop: 60,
    borderRadius: 3
  },
  buttonText: {
    color: '#fff'
  }
})