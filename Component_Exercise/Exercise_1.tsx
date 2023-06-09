import React from 'react';
import {View, StyleSheet} from 'react-native';

function Exercise_1(): JSX.Element {
  return (
    <View style={styles.outer}>
      <View style={styles.inner}>
        <View style={[styles.box, {backgroundColor: 'red'}]} />
        <View style={[styles.box, {backgroundColor: 'green'}]} />
      </View>
      <View style={[styles.inner, {alignItems: 'flex-end'}]}>
        <View style={[styles.box, {backgroundColor: 'blue'}]} />
        <View style={[styles.box, {backgroundColor: 'black'}]} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  outer: {
    flex: 1,
  },
  inner: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: {
    width: 50,
    height: 50,
  },
});
export default Exercise_1;
