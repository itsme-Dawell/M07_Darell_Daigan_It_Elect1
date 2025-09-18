import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

export default function ColorChangerApp() {
  const [bgColor, setBgColor] = useState('white');

  return (
    <View style={[styles.wrapper, { backgroundColor: bgColor }]}>
      <Text style={styles.title}>Color Changer App</Text>

      <View style={styles.row}>
        <Button title="White" onPress={() => setBgColor('white')} />
        <View style={{ width: 12 }} />
        <Button title="Light Blue" onPress={() => setBgColor('lightblue')} />
        <View style={{ width: 12 }} />
        <Button title="Light Green" onPress={() => setBgColor('lightgreen')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, marginBottom: 16 },
  row: { flexDirection: 'row', alignItems: 'center' },
});