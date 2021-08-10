import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import data from '../assets/json/data.json';

export default class ButtonComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      dataSource: [],
      page: 1,
      perPage: 10,
      loadMoreVisible: true,
    };
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
    }
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

  render() {
    {
      console.log('this.state.loadMoreVisible ', this.state.loadMoreVisible);
    }
    return (
      <View style={styles.container}>
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
