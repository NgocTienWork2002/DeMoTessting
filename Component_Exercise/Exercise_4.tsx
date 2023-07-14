/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';

import Btn_Customer from './Component/Btn_Customer';

const data = ['CTG', 'AAV', 'ADC', 'ALT', 'AMC', 'AME', 'AMV', 'API', 'ARM'];

export interface Stocket {
  stockName: string;
  price: string;
}

export default function Exercise_4(): JSX.Element {
  const [isloading, setloading] = useState(false);
  const [center, setcenter] = useState<Stocket | null>(null);
  const buttonList = [];
  useEffect(() => {
    axios
      .get(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=*%20R53L4WV6XQ6KQUNO&fbclid=IwAR22VENRVdiIs-PMcOR17EdfvKvdBk_f1-26jwuB4FK9XQITLa2LF-bbOEQ`,
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
  }, []);
  for (let i = 0; i < data.length; i += 3) {
    let body = data.slice(i, i + 3);
    buttonList.push(
      <Btn_Customer
        body={body}
        setcenter={setcenter}
        setloading={setloading}
        key={i}
      />,
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      {isloading && (
        <View
          style={{
            position: 'absolute',
            zIndex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }}>
          <ActivityIndicator color={'red'} size={'large'} />
        </View>
      )}
      <View style={styles.wrapper}>
        <View style={styles.groupTop}>
          <Text style={{fontSize: 50, fontWeight: 'bold', color: 'black'}}>
            {center && center.stockName}
          </Text>
          <Text style={{fontSize: 50, fontWeight: 'bold', color: 'red'}}>
            {center && center.price}
          </Text>
        </View>
        <ScrollView style={styles.groupBottom}>{buttonList}</ScrollView>
      </View>
    </SafeAreaView>
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
