import axios from 'axios';
import {useCallback, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function ListFlim({
  list,
  navigation,
  Page,
  setPage,
  setData,
  setloading,
  functionData,
}: {
  list: any;
  navigation: any;
  Page: any;
  setPage: any;
  setData: any;
  setloading: any;
  functionData: any;
}) {
  const listItem = async () => {
    setPage(Page + 1);
    setloading(true);
    axios
      .get(
        `https://www.omdbapi.com/?i=tt3896198&s=batman&apikey=1bdf9024&page=${Page}`,
      )
      .then(res => {
        console.log(Page);
        let KQ = res.data['Search'];
        let VL = list.concat(KQ);
        setData(VL);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => {
        setloading(false);
      });
  };
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setPage(1);
      functionData();
      setRefreshing(false);
    }, 1000);
  }, []);
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={list}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      keyExtractor={item => item.imdbID}
      onEndReached={listItem}
      renderItem={({item}) => {
        return (
          <>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 10,
              }}>
              <Image
                style={{width: 72, height: 102}}
                source={{
                  uri: item.Poster,
                }}
              />

              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  fontWeight: '700',
                  flex: 1,
                  marginLeft: 10,
                }}
                numberOfLines={2}>
                {item.Title}
              </Text>

              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 10,
                }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.push('Detail', {
                      Name: item.Title,
                      Img: item.Poster,
                      Type: item.Type,
                    })
                  }>
                  <Image
                    style={{width: 10, height: 10}}
                    source={require('../../right-arrow.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </>
        );
      }}
    />
  );
}
export default ListFlim;
