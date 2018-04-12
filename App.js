/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from 'react-native';

import Item from './Item';

import Movies from './src/movies.json'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <FlatList
          style={styles.row}
          numColumns={3}
          keyExtractor={item => item.id}
          data={Movies.subjects}
          renderItem={({item}) => <Item title={item.title} image={item.images.medium} stars={item.rating.stars}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({  
  row:{
    paddingHorizontal:15,
    marginTop:20,
  },
});
