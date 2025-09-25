import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar'; // If not using Expo, delete this line.

import CounterApp from './CounterApp';
import ColorChangerApp from './ColorChangerApp';

export default function App() {
  const [activeApp, setActiveApp] = useState('counter');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.switchButtons}>
        <Button title="Counter App" onPress={() => setActiveApp('counter')} />
        <Button title="Color Changer App" onPress={() => setActiveApp('color')} />
      </View>

      <View style={styles.appContainer}>
        {activeApp === 'counter' ? <CounterApp /> : <ColorChangerApp />}
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 8, marginTop: 32},
  switchButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  appContainer: { flex: 1},
});