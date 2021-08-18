import React from 'react';
import {
  Button,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  AsyncStorage,
  Alert,
} from 'react-native';
import {Rating, AirbnbRating} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';
import data from '../assets/json/data';
import {useState, useEffect} from 'react';
import Sound from 'react-native-sound';

export default function AudioBook({route, navigation}) {
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
    bookmark,
    audio,
  } = route.params;
  console.log('desc', description);
  const [music, setMusic] = useState(null);
  const [second, setSecond] = useState(0);
  const [duration, setDuration] = useState(0);
  const play = () => {
    let summer = new Sound(audio, null, err => {
      if (err) {
        console.log('hate', err);
        return;
      }
      summer.play(success => {
        console.log('success', success);
      });
      setDuration(summer.getDuration());
      summer.getCurrentTime((second, isPlay) => {});
    });
    console.log('summer', summer);

    setMusic(summer);
  };

  useEffect(() => {
    if (music) {
      let id = setInterval(() => {
        music.getCurrentTime((second, play) => {
          // console.log('play', play);
          setSecond(second);
        });
      }, 100);
    }
  }, [music]);

  const setVolume = type => {
    const volume = music.getVolume();
    console.log(volume);
    if (type == '+') {
      const newVolume = volume + 0.1;
      music.setVolume(newVolume);
    } else {
      const newVolume = volume - 0.1;
      music.setVolume(newVolume);
    }
  };
  return (
    <ScrollView style={{padding: 10, backgroundColor: '#e8e6e6'}}>
      <View>
        <Text style={{color: 'red', fontSize: 16, fontWeight: 'bold'}}>
          {category}
        </Text>
        <Text style={{fontSize: 28, fontFamily: 'serif', marginTop: 10}}>
          {itemTitle}
        </Text>
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
        <View
          style={{
            flexDirection: 'row',
            padding: 2,
            marginTop: 5,
            justifyContent: 'space-between',

            marginLeft: 30,
            marginRight: 30,
          }}>
          <TouchableOpacity
            onPress={() => {
              play();
            }}>
            <Icon name="play" type="font-awesome" color="grey" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              music.pause();
            }}>
            <Icon name="pause" type="font-awesome" color="grey" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              music.play();
            }}>
            <Icon name="rotate-right" type="font-awesome" color="grey" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              music.stop();
            }}>
            <Icon name="stop" type="font-awesome" color="grey" />
          </TouchableOpacity>

          {/* <Button
          title="music time"
          onPress={() => {
            music.setCurrentTime(100);
          }}
        />
        <Button
          title="controls"
          onPress={() => {
            console.log(music.isPlaying());
          }}
        /> */}
        </View>
        {/* <Text>
        {second} / Total Second {duration}
      </Text> */}
        <View
          style={{
            flexDirection: 'row',
            padding: 20,
            justifyContent: 'space-between',
          }}>
          <Button
            title="Volume + "
            onPress={() => {
              setVolume('+');
            }}
            color="#000000"
          />
          <Button
            title="volume -"
            onPress={() => {
              setVolume('-');
            }}
            color="#000000"
          />
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'sans-serif-light',
              marginTop: 3,
              color: 'grey',
              textAlign: 'left',
            }}>
            Published from <Text style={{color: 'blue'}}>{publishedFrom}</Text>
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'sans-serif-light',
              marginTop: 3,
              color: 'grey',
              textAlign: 'right',
              flex: 1,
            }}>
            {date}
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View>
            <Rating
              showRating={false}
              tintColor="#e8e6e6"
              readonly={true}
              fractions="{1}"
              startingValue={star}
            />
          </View>
        </View>
        <View>
          <Text style={{color: '#b56464', marginTop: 8}}>
            892 Ratings on Google Play
          </Text>
        </View>
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontFamily: 'serif',
            marginTop: 4,
          }}>
          {description}
        </Text>
      </View>
    </ScrollView>
  );
}
