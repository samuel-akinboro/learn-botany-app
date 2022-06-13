import { StyleSheet, View, StatusBar } from 'react-native';
import React from 'react'
import { COLORS } from './theme/theme'
import BottomTab from './routes/BottomTab';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.background} />
      <BottomTab />
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
