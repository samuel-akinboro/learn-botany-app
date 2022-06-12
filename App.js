import { StyleSheet, View, StatusBar } from 'react-native';
import React from 'react'
import OnboardingOneScreen from './screens/OnboardingOneScreen';
import OnboardingTwoScreen from './screens/OnboardingTwoScreen';
import OnboardingThreeScreen from './screens/OnboardingThreeScreen';
import { COLORS } from './theme/theme'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.background} />
      {/* <OnboardingOneScreen /> */}
      {/* <OnboardingTwoScreen /> */}
      <OnboardingThreeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '100%'
  },
});
