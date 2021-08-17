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

class SingleHome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allData: data.info,
    };
  }

  componentDidMount() {
    this.getDataFromAsyncStorage();
  }

  selectionHandler = async itemId => {
    const {allData} = this.state;
    let arr = allData.map((item, id) => {
      console.log('id', id + 1);
      if (itemId == id + 1) {
        item.completed = true;
      }
      return {...item};
    });
    console.log('selected data', arr);
    this.setState({
      allData: arr,
    });

    try {
      let allData = this.state.allData;
      await AsyncStorage.setItem('allData', JSON.stringify(allData));
      console.log('Data Saved in Asyncstorage', allData);
    } catch (error) {
      console.log('Error of Asyncstorage', error.message);
    }
  };

  getDataFromAsyncStorage = async () => {
    try {
      let allData = await AsyncStorage.getItem('allData');
      if (allData === null) {
        allData = this.state.allData;
        await AsyncStorage.setItem('allData', JSON.stringify(allData));
        this.setState({allData: allData});
      }
      allData = JSON.parse(allData);
      this.setState({allData: allData});
      console.log('Data got from Asyncstorage', this.state.allData);
    } catch (error) {
      console.log('Error of Asyncstorage', error.message);
    }
  };

  render() {
    const {navigation, route} = this.props;
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
    } = route.params;

    return (
      <ScrollView style={{backgroundColor: '#ffffff'}}>
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
              Published from{' '}
              <Text style={{color: 'blue'}}>{publishedFrom}</Text>
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
                showRating={false}
                tintColor="#ffffff"
                readonly={true}
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
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Listen Audio</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default SingleHome;

const styles = StyleSheet.create({
  starImageStyle: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
  },
});
