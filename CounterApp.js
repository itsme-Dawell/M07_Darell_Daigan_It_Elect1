import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function CounterApp({ count, setCount }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter App</Text>
      <Text style={styles.counter}>{count}</Text>
      <View style={styles.row}>
        <Button title="+1" onPress={() => setCount(count + 1)} />
        <View style={{ width: 10 }} />
        <Button title="-1" onPress={() => setCount(count - 1)} />
      </View>
      <View style={{ marginTop: 10 }}>
        <Button title="Reset" onPress={() => setCount(0)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  title: { fontSize: 20, marginBottom: 10 },
  counter: { fontSize: 40, marginBottom: 10 },
  row: { flexDirection: 'row' },
});