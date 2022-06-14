import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { COLORS, SIZES } from '../theme/theme'
import { Form, FormItem } from 'react-native-form-component'
import { FontAwesome } from '@expo/vector-icons'; 
// import CheckBox from '@react-native-community/checkbox';

const LoginScreen = ({ navigation }) => {
  const [usernameInput, setUsernameInput] = React.useState('');
  const [passwordInput, setPasswordInput] = React.useState('');
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false)

  return (
    <View style={styles.container}>
      <View style={{width: SIZES.width * 0.90}}>
        <Text style={styles.greetings}>Hello</Text>
        <Text style={styles.welcomeText}>Let’s Learn More About Plants</Text>
        <Form 
          onButtonPress={() => console.warn('do something')}
          style={{width: '100%'}}
          buttonStyle={{backgroundColor: COLORS.primary, borderRadius: 3}}
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
            underneathText="username"
            textInputStyle={{borderBottomWidth: 1, borderColor: passwordInput ? COLORS.primary : '#6A6F7D', borderRadius: 0}}
            labelStyle={{color: '#6A6F7D', fontSize: SIZES.p, marginLeft: 0, fontWeight: '400'}}
            floatingLabel={true}
            secureTextEntry={true}
            showIcon={<FontAwesome name="eye" size={20} color={COLORS.greyText} style={{right: 0, position: 'absolute', bottom: -15}} />}
            hideIcon={<FontAwesome name="eye-slash" size={20} color={COLORS.greyText} style={{right: 0, position: 'absolute', bottom: -15}} />}
          />
          <View>
            <View>
              {/* <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
              /> */}
              <Text>Remember me</Text>
            </View>
            <Text>Forgot Password?</Text>
          </View>
        </Form>
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
    marginBottom: 20
  }
})