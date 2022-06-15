import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { COLORS, SIZES } from '../theme/theme'
import { Form, FormItem } from 'react-native-form-component'
import { FontAwesome } from '@expo/vector-icons'; 
import Checkbox from 'expo-checkbox';

const LoginScreen = ({ navigation }) => {
  const [usernameInput, setUsernameInput] = React.useState('');
  const [passwordInput, setPasswordInput] = React.useState('');
  const [isChecked, setIsChecked] = React.useState(false)

  return (
    <View style={styles.container}>
      <View style={{width: SIZES.width * 0.90}}>
        <Text style={styles.greetings}>Hello</Text>
        <Text style={styles.welcomeText}>Let’s Learn More About Plants</Text>
        <Form 
          onButtonPress={() => console.warn('do something')}
          style={styles.form}
          buttonStyle={{backgroundColor: COLORS.primary, borderRadius: 3, marginBottom: 20}}
        >
          <FormItem 
            label="Username"
            isRequired
            value={usernameInput}
            onChangeText={(text) => setUsernameInput(text)}
            underneathText="username"
            textInputStyle={{borderBottomWidth: 1, borderColor: usernameInput ? COLORS.primary : '#6A6F7D', paddingLeft: 0}}
            labelStyle={{color: '#6A6F7D', fontSize: SIZES.p, marginLeft: 0, fontWeight: '400'}}
            floatingLabel={true}
          />
          <FormItem 
            label="Password"
            isRequired
            value={passwordInput}
            onChangeText={(text) => setPasswordInput(text)}
            underneathText="Enter password"
            textInputStyle={{borderBottomWidth: 1, borderColor: passwordInput ? COLORS.primary : '#6A6F7D', borderRadius: 0}}
            labelStyle={{color: '#6A6F7D', fontSize: SIZES.p, marginLeft: 0, fontWeight: '400'}}
            floatingLabel={true}
            secureTextEntry={true}
            showIcon={<FontAwesome name="eye" size={20} color={COLORS.greyText} style={{right: 0, position: 'absolute', bottom: -15}} />}
            hideIcon={<FontAwesome name="eye-slash" size={20} color={COLORS.greyText} style={{right: 0, position: 'absolute', bottom: -15}} />}
          />
          <View style={styles.rememberContainer}>
            <View style={styles.remember}>
              <Checkbox
                disabled={(!usernameInput && !passwordInput) && true}
                value={isChecked}
                onValueChange={(newValue) => setIsChecked(newValue)}
                color={isChecked ? COLORS.primary : undefined}
                style={styles.checkbox}
              />
              <Text style={styles.rememberText}>Remember me</Text>
            </View>
            <Text style={{fontSize: SIZES.sm, color: COLORS.greyText}}>Forgot Password?</Text>
          </View>
        </Form>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={styles.createAccount}>Don’t Have Account?</Text>
          <TouchableOpacity>
            <Text style={styles.createAccountLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    backgroundColor: COLORS.background,
    alignItems: 'center',
    paddingTop: 40
  },
  greetings: {
    fontSize: SIZES.h1,
    alignSelf: 'flex-start',
    marginLeft: 5,
    color: '#36455A',
    fontWeight: '600'
  },
  welcomeText: {
    fontSize: SIZES.base,
    alignSelf: 'flex-start',
    marginLeft: 5,
    color: '#495566',
    marginTop: 10,
    marginBottom: 30
  },
  form: {
    width: '100%',
    marginBottom: 0,
    paddingBottom: 0
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 9,
    marginBottom: 30
  },
  remember: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 16,
    height: 16,
    marginRight: 5
  },
  rememberText: {
    color: '#6A6F7D',
    fontSize: 11
  }, 
  createAccount: {
    textAlign: 'center',
    fontSize: SIZES.p,
    color: COLORS.greyText
  },
  createAccountLink: {
    color: COLORS.primary,
    marginLeft: 5,
    fontSize: SIZES.p
  }
})