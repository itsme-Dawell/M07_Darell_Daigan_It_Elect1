import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

export default function ColorChangerApp({ setBgColor }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Color Changer App</Text>
      <Button title="Default (White)" onPress={() => setBgColor('white')} />
      <View style={{ marginVertical: 5 }} />
      <Button title="Light Blue" onPress={() => setBgColor('lightblue')} />
      <View style={{ marginVertical: 5 }} />
      <Button title="Light Green" onPress={() => setBgColor('lightgreen')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  title: { fontSize: 20, marginBottom: 10 },
});