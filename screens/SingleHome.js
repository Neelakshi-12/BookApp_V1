import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import book1 from '../assets/book1.jpg';
import {Rating, AirbnbRating} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import data from '../assets/json/data.json';

export default function SingleHome({route, navigation}) {
  const {
    itemId,
    itemTitle,
    description,
    date,
    rating,
    publishedFrom,
    category,
    image,
    star,
  } = route.params;
  console.log(
    'data',
    itemId,
    itemTitle,
    description,
    date,
    rating,
    publishedFrom,
    category,
    image,
    star,
  );

  return (
    <ScrollView style={{backgroundColor: '#ebebeb'}}>
      <View style={{margin: 10}}>
        <Text style={{color: 'red', fontSize: 16, fontWeight: 'bold'}}>
          {category}
        </Text>
        <Text style={{fontSize: 28, fontFamily: 'serif', marginTop: 10}}>
          {itemTitle}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'sans-serif-light',
              marginTop: 18,
              color: 'grey',
              textAlign: 'left',
            }}>
            Published from <Text style={{color: 'blue'}}>{publishedFrom}</Text>
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'sans-serif-light',
              marginTop: 18,
              color: 'grey',
              textAlign: 'right',
              flex: 1,
            }}>
            {date}
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: '#C7c5c3',
              marginRight: -10,
              marginLeft: 10,
              borderBottomLeftRadius: 40,
              borderTopLeftRadius: 40,
              marginTop: 25,
            }}>
            <Image
              source={{uri: image}}
              style={{
                height: 250,
                width: '100%',
                borderTopLeftRadius: 40,
                borderBottomLeftRadius: 40,
                marginLeft: 40,
                marginTop: 0,
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 26, fontWeight: 'bold', marginTop: 22}}>
            {rating}
          </Text>
          <View style={{marginLeft: 18, marginTop: 20}}>
            <Rating
              showRating
              tintColor="#ebebeb"
              showRating={false}
              fractions="{1}"
              startingValue={star}
            />
          </View>
        </View>
        <View>
          <Text style={{color: 'grey', marginTop: 8}}>
            892 Ratings on Google Play
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: 'black',
              marginTop: 20,
              fontSize: 16,
              fontFamily: 'serif',
            }}>
            {description}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  starImageStyle: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
  },
});
