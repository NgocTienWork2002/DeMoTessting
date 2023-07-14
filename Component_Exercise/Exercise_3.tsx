import React from 'react';
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  Text,
  StyleSheet,
} from 'react-native';

export default function Exercise_3() {
  return (
    <View style={styles.view}>
      <View style={{flex: 1, marginTop: 50}}>
        <Text style={{fontSize: 50}}>00:00:00</Text>
      </View>
      <View style={styles.btn_controll}>
        <TouchableOpacity style={styles.btn}>
          <Text style={{color: 'black', fontSize: 15}}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={{color: 'black', fontSize: 15}}>Lap</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        <Text
          style={{
            backgroundColor: 'gray',
            color: 'white',
            fontSize: 30,
            marginBottom: 10,
            padding: 5,
          }}>
          Lap#2 00:00:00
        </Text>
        <Text
          style={{
            backgroundColor: 'gray',
            color: 'white',
            fontSize: 30,
            padding: 5,
          }}>
          Lap#1 00:00:00
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_controll: {
    flex: 1,
    paddingHorizontal: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 1,
  },
  lap: {
    backgroundColor: 'red',
  },
});