import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Counter App</Text>
      <Text style={styles.count}>{count}</Text>

      <View style={styles.row}>
        <Button title="+1" onPress={() => setCount(c => c + 1)} />
        <View style={{ width: 12 }} />
        <Button title="-1" onPress={() => setCount(c => c - 1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, marginBottom: 12 },
  count: { fontSize: 40, marginBottom: 16 },
  row: { flexDirection: 'row', alignItems: 'center' },
});