import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function DetailMovie({
  route,
  navigation,
}: {
  navigation: any;
  route: any;
}) {
  return (
    <>
      <View
        style={{
          height: 50,
          backgroundColor: 'tomato',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: 'absolute',
            left: 0,
          }}>
          <Text style={{fontSize: 20, color: 'white'}}>{`< Back`}</Text>
        </TouchableOpacity>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: 300,
          }}>
          <Text numberOfLines={1} style={{fontSize: 20, color: 'white'}}>
            Movie Detail
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <View>
          <Image
            style={{width: 113, height: 201}}
            source={{
              uri: route.params.Img,
            }}
            resizeMode="cover"
          />
          <Text style={{fontSize: 20, color: 'black'}}>Meta: 44</Text>
          <Text style={{fontSize: 20, color: 'black'}}>imDB: 6.5</Text>
        </View>
        <View style={{marginLeft: 10, width: '100%', flex: 1, padding: 5}}>
          <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>
            {route.params.Name}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: 'black',
            }}>
            Gene: {route.params.Type}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: 'black',
              marginTop: 5,
              borderTopWidth: 1,
              borderTopColor: 'gray',
            }}>
            Released: 25 Mar 2016 [PG-13]
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: 'black',
              marginTop: 5,
              borderTopWidth: 1,
              borderTopColor: 'gray',
            }}>
            Superman are left unchecked, Batman takes on the Man of Steel, while
            the world wrestles with what kind of a hero it really needs.
            Director: Zack Snyder Superman are left unchecked, Batman takes on
            the Man of Steel, while the world wrestles with what kind of a hero
            it really needs. Director: Zack Snyder
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: 'black',
              marginTop: 5,
              borderTopWidth: 1,
              borderTopColor: 'gray',
            }}>
            Goyer, Bob Kane (Batman created by), Bill Finger (Batman created
            by), Jerry Siegel (Superman created by), Joe Shuster (Superman
            created by), William Moulton Marston (character created by: Wonder
            Woman)
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: 'black',
              marginTop: 5,
              borderTopWidth: 1,
              borderTopColor: 'gray',
            }}>
            Actors: Ben Affleck, Henry Cavill, Amy Adams, Jesse Eisenberg
          </Text>
        </View>
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    flexDirection: 'row',
    marginTop: 60,
  },
});
