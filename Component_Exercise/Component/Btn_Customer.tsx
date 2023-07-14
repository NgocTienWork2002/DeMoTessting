import axios from 'axios';
import React, {useState} from 'react';
import {Settings, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Stocket} from '../Exercise_4';

export default function Btn_Customer({
  body,
  setloading,
  setcenter,
}: {
  body: string[];
  setloading: any;
  setcenter: any;
}): JSX.Element {
  const Data = (id: string) => {
    setloading(true);
    axios
      .get(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${id}&apikey=*%20R53L4WV6XQ6KQUNO&fbclid=IwAR22VENRVdiIs-PMcOR17EdfvKvdBk_f1-26jwuB4FK9XQITLa2LF-bbOEQ`,
      )
      .then(res => {
        const SetData = res.data['Global Quote'];
        let Result: Stocket = {
          stockName: SetData['01. symbol'],
          price: SetData['10. change percent'],
        };
        setcenter(Result);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setloading(false);
      });
  };
  return (
    <View style={styles.buttonRow}>
      {body.map((item, index) => (
        <TouchableOpacity
          onPress={() => Data(item)}
          style={styles.button}
          key={index}>
          <Text style={styles.textBtn}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  groupTop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  groupBottom: {
    flex: 1,
    backgroundColor: 'pink',
    paddingTop: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // flexWrap: 'wrap',
  },
  textTitle: {
    color: 'black',
    fontSize: 35,
    paddingVertical: 5,
  },
  button: {
    backgroundColor: 'lightgray',
    paddingHorizontal: 18,
    paddingVertical: 15,
    minWidth: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 20,
  },
  textBtn: {
    color: 'black',
  },
});
