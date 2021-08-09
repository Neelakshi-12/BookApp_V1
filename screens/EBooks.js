import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import data from '../assets/json/data.json';
export default class EBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: false,
      dataSource: data.info,
    });
  }
  // .props.navigation.navigate('SingleHome')

  render() {
    if (this.state.isLoading) {
      return <View style={{flex: 1, paddingTop: 20}}></View>;
    }
    return (
      <View style={styles.container}>
        <FlatList
          style={{flex: 1}}
          data={this.state.dataSource}
          renderItem={({item}) => {
            return (
              <View style={styles.listItem}>
                {/* <Text>{item.id}</Text> */}
                <TouchableOpacity
                  onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    this.props.navigation.navigate('SingleHome', {
                      itemId: item.id,
                      itemTitle: item.title,
                      description: item.desc,
                      date: item.published_Data,
                      rating: item.Rating,
                      publishedFrom: item.published_From,
                      category: item.category,
                      image: item.photo,
                    });
                  }}
                  style={{flex: 1}}>
                  <Image
                    source={{uri: item.photo}}
                    style={{
                      resizeMode: 'cover',
                      flex: 1,
                      aspectRatio: 0.5,
                      borderRadius: 10,
                    }}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop: 10,
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: '#FFF',
    width: '80%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 5,
  },
});
