// import React from 'react';
// import {Button, View, Text, TouchableOpacity, Image} from 'react-native';
// import data from '../assets/json/data.json';

// function SingleHome({route, navigation}) {
//   /* 2. Get the param */
//   const {itemId} = route.params;
//   const {otherParam} = route.params;
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Details Screen</Text>
//       <Text>itemId: {JSON.stringify(itemId)}</Text>
//       <Text>otherParam: {JSON.stringify(otherParam)}</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() =>
//           navigation.push('SingleHome', {
//             itemId: Math.floor(Math.random() * 100),
//           })
//         }
//       />
//       <Button
//         title="Go to Home"
//         onPress={() => navigation.navigate('EBooks')}
//       />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

// export default SingleHome;

import React from 'react';
import {Button, View, Text, TouchableOpacity, Image} from 'react-native';
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
  );
  return (
    <ScrollView>
      <View style={{margin: 10}}>
        <Text style={{color: 'red', fontSize: 16, fontWeight: 'bold'}}>
          {category}
        </Text>
        {/* <Text>itemId: {JSON.stringify(itemId)}</Text> */}
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
          <Text>
            <View>
              <AirbnbRating
                count={5}
                reviews
                reviewSize={6}
                defaultRating={5}
                size={20}
              />
            </View>
          </Text>
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
