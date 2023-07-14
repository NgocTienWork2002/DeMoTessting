import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default function Exercise_2(): JSX.Element {
  const [setSecond,Second] = useState(0)
  const [setMinute,Minute] = useState(0)
  const [setHour,Hour] = useState(0)
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <Text style={styles.FontText}>Weight(KG)</Text>
        <TextInput style={styles.TextInput}>0</TextInput>
      </View>
      <View style={styles.group}>
        <Text style={styles.FontText}>Height(CM)</Text>
        <TextInput style={styles.TextInput}>0</TextInput>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={[styles.FontText, {marginBottom: 10}]}>BIM : 0.00</Text>
        <TouchableOpacity style={{backgroundColor: 'blue', padding: 10}}>
          <Text style={{color: 'white'}}>Computer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  group: {
    marginBottom: 20,
  },
  FontText: {
    fontWeight: '700',
  },
  TextInput: {
    borderWidth: 1,
    borderColor: 'black',
  },
});
