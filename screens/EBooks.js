import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Button,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import data from '../assets/json/data.json';

export default class EBooks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      dataSource: [],
      page: 1,
      perPage: 10,
      loadMoreVisible: true,
      text: '',
    };
    this.arrayholder = [];
  }
  componentDidMount() {
    this.setNewData();
  }

  setNewData() {
    var tempArray = [];
    if (data.info.length == this.state.dataSource.length) {
      this.setState({
        loadMoreVisible: false,
      });
    } else {
      for (var i = 0; i < this.state.page * this.state.perPage; i++) {
        tempArray.push(data.info[i]);
      }
      this.setState({
        dataSource: tempArray,
        loadMoreVisible: true,
      });
      this.arrayholder = data.info;
    }
    console.log('this.arrayHolder', this.arrayholder);
  }
  loadMore() {
    console.log('loadmore');
    this.setState(
      {
        page: this.state.page + 1,
      },
      () => {
        this.setNewData();
      },
    );
  }
  searchData(text) {
    const newData = this.arrayholder.filter(item => {
      const itemData = item.title.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({
      dataSource: newData,
      text: text,
    });
  }
  render() {
    {
      console.log('this.state.loadMoreVisible ', this.state.loadMoreVisible);
    }
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={text => this.searchData(text)}
          value={this.state.text}
          underlineColorAndroid="transparent"
          placeholder="Enter Title Here"
        />
        <FlatList
          style={{flex: 1}}
          data={this.state.dataSource}
          renderItem={({item}) => {
            return (
              <View style={styles.listItem}>
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
                    });
                  }}
                  style={{flex: 1}}>
                  <Image
                    source={{uri: item.photo}}
                    style={{
                      resizeMode: 'cover',
                      flex: 1,
                      aspectRatio: 0.6,
                      borderRadius: 10,
                    }}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          ListFooterComponent={() => (
            <View>
              {this.state.loadMoreVisible == true ? (
                <View
                  style={{
                    width: 100,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 150,
                  }}>
                  <Button
                    onPress={() => this.loadMore()}
                    title="Load More"
                    color="grey"
                  />
                </View>
              ) : null}
            </View>
          )}
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
  textInput: {
    textAlign: 'center',
    height: 42,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
    backgroundColor: '#FFFF',
  },
});
