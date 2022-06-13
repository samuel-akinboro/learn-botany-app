import { createStackNavigator } from 'react-navigation-stack';
import OnboardingOneScreen from '../screens/OnboardingOneScreen';
import OnboardingTwoScreen from '../screens/OnboardingTwoScreen';
import OnboardingThreeScreen from '../screens/OnboardingThreeScreen';
import LoginScreen from '../screens/LoginScreen'

const stackNavigator = createStackNavigator({
  OnboardingOneScreen,
  OnboardingTwoScreen,
  OnboardingThreeScreen,
  LoginScreen
}, 
{
  initialRouteName: 'OnboardingOneScreen',
  // headerMode: 'none',
  defaultNavigationOptions: {
    headerShown: false
  }
});

export default stackNavigator