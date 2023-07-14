import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ContentFlim} from './data';
import ListFlim from './Component/ListMovie';
import axios from 'axios';

export default function Movie({navigation}: {navigation: any}) {
  const [Data, setData] = useState([]);
  const [Page, setPage] = useState(1);
  const [isloading, setloading] = useState(false);
  const data = () => {
    axios
      .get(
        `https://www.omdbapi.com/?i=tt3896198&s=Batman&apikey=1bdf9024&page=${Page}`,
      )
      .then(res => {
        let result = res.data['Search'];
        setData(result);
        setPage(Page + 1);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    data();
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'tomato'} />
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.listFlim}>
          {Data ? (
            <ListFlim
              list={Data}
              setPage={setPage}
              Page={Page}
              setloading={setloading}
              setData={setData}
              functionData={data}
              navigation={navigation}
            />
          ) : (
            <Text
              style={{
                textAlign: 'center',
                marginTop: 10,
                fontSize: 16,
                color: 'red',
              }}>
              Không có bộ phim nào
            </Text>
          )}
        </View>
        <View>
          {isloading && <ActivityIndicator size="small" color="#0000ff" />}
        </View>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },
  header: {
    height: 60,
    width: '100%',
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  fontText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  listFlim: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
