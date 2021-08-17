import React, {Component} from 'react';
import {ScrollView} from 'react-native';
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
import data from '../assets/json/data';
import {Rating, AirbnbRating} from 'react-native-elements';
import {Icon} from 'react-native-elements';
export default class BookMarks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: data.info,
    };
  }

  componentDidMount() {
    this.getDataFromAsyncStorage();
  }

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
      console.log('BookMarks Data got from Asyncstorage', this.state.allData);
    } catch (error) {
      console.log('Error of Asyncstorage', error.message);
    }
  };

  // componentDidMount() {
  //   let arr = this.state.allData.map((item, index) => {
  //     item.isSelected = false;
  //     return {...item};
  //   });
  //   console.log('arr data', arr);
  // }

  // selectionHandler = ind => {
  //   const {allData} = this.state;
  //   let arr = allData.map((item, index) => {
  //     if (ind == index) {
  //       item.isSelected = !item.isSelected;
  //     }
  //     return {...item};
  //   });
  //   console.log('selected data', arr);
  //   this.setState({
  //     allData: arr,
  //   });
  // };

  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              padding: 15,
              fontSize: 20,
              marginTop: 10,
              fontWeight: 'bold',
              fontFamily: 'monospace',
            }}>
            All BookMarks{' '}
          </Text>
          <View style={{marginTop: 30}}>
            <Icon name="bookmark" type="font-awesome" color="green" />
          </View>
        </View>
        <ScrollView>
          {this.state.allData.map((item, index) => {
            return (
              <View key={index}>
                {item.completed == true ? (
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('SingleHome', {
                        itemId: item.id,
                        itemTitle: item.title,
                        description: item.desc,
                        date: item.published_Data,
                        rating: item.Rating,
                        publishedFrom: item.published_From,
                        category: item.category,
                        image: item.photo,
                        star: item.stars,
                        bookmark: item.completed,
                      });
                    }}
                    style={{
                      padding: 20,
                      backgroundColor: '#dcdee0',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 10,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <View style={{flexDirection: 'column'}}>
                        <Text
                          style={{
                            color: 'brown',
                            fontWeight: 'bold',
                            fontSize: 18,
                            width: 230,
                          }}>
                          {item.title}
                        </Text>
                        <Text
                          style={{
                            color: 'grey',
                            fontSize: 16,
                          }}>
                          {item.category}
                        </Text>
                        <Text
                          style={{
                            color: 'green',
                            fontSize: 16,
                          }}>
                          {item.published_Data}
                        </Text>
                        <Rating
                          showRating={false}
                          tintColor="#dcdee0"
                          readonly={true}
                          fractions="{1}"
                          imageSize={25}
                          startingValue={item.stars}
                          style={{marginLeft: -115}}
                        />
                      </View>
                      <Image
                        source={{uri: item.photo}}
                        style={{
                          height: 115,
                          width: '35%',
                          borderRadius: 20,
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                ) : (
                  <Text></Text>
                )}
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
