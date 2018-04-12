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
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const imageWidth = width / 3 - 10 * 2;
const imageHeight = imageWidth / 0.7;

type Props = {};

// "35" "40"
const renderStars = (stars) => {

  if (stars === '00') {
    return (
      <View style={styles.starWrappers}>
        <Text>暂无评分</Text>
      </View>
      );
  }

  const total = 5;
  let full,half,empty;
  full = parseInt(stars[0]); // 表示取出字符串的第一位 转为整数

  if(stars[1] === '5'){
    half = 1;
    empty = total - half - full;
  }else{
    half = 0;
    empty = total - full;
  }

  // 转化为图片组件 五个图片组件
  // 使用map函数 把数组转化为组件
  const result = [];

  // 添加满星星
  let i;
  for(i = 0; i < full; i++){
    result.push(
      <Image 
      key = {i} 
      style={styles.star} 
      source={require('./src/img/star-full.png')} 
      />
      );
  }

  // 添加半颗星
  if (half) {
    i++;
    result.push(
      <Image 
      key = {i} 
      style={styles.star} 
      source={require('./src/img/star-half.png')} 
      />
      );
  }

  // 添加空星星
  for(let j = 0; j < empty; j++){
    result.push(
      <Image 
      key = {i+j+1} 
      style={styles.star} 
      source={require('./src/img/star-empty.png')} 
      />
      );
  }

  return (
    <View style={styles.starWrappers}>
      {result}
    </View>
    );
}

// 直接输出组件 性能更好
const Item = (props) => {

// 获取传递过来的数据 
const {title, image, stars} = props;

    return (
      <View style={styles.container}>
        <Image 
        // source={require('./src/img/poster.jpg')} 
        source = {{uri:image}}
        style={styles.image}
        />
        <Text numberOfLines={1} style={styles.text}>
        {title}
        </Text>
        {renderStars(stars)}
      </View>
    );
};

export default Item

const styles = StyleSheet.create({
  container: {
    width:imageWidth,
    flexDirection:'column',
    marginRight:15,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  text:{
    marginTop:5,
    width:imageWidth,
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  image:{
    width:imageWidth,
    height:imageHeight,
  },
  star:{
    width:10,
    height:10,
  },
  starWrappers:{
    flexDirection:'row',
    justifyContent:'center',
    marginTop:5,
    marginBottom:15,
  },
});

