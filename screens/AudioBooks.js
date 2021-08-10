import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
function Item({item}) {
  const navigation = useNavigation();
  return (
    <View style={styles.listItem}>
      <TouchableOpacity onPress={() => navigation.navigate('SingleHome')}>
        <Image
          source={{uri: item.photo}}
          style={{height: 100, width: 150, borderRadius: 10}}
        />
      </TouchableOpacity>
    </View>
  );
}

export default class AudioBooks extends React.Component {
  state = {
    data: [
      {
        id: 1,
        photo:
          'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328759670l/832619.jpg',
      },
      {
        id: 2,
        photo:
          'https://cdn.aarp.net/content/dam/aarp/entertainment/books/2020/10/1140-the-only-good-indians.imgcache.rev.web.300.456.jpg',
      },
      {
        id: 3,
        photo:
          'https://cdn.aarp.net/content/dam/aarp/entertainment/books/2020/10/1140-the-grownup.imgcache.rev.web.300.456.jpg',
      },
      {
        id: 4,
        photo:
          'https://cdn.aarp.net/content/dam/aarp/entertainment/books/2020/10/1140-fever-dream.imgcache.rev.web.300.456.jpg',
      },
      {
        id: 5,
        photo:
          'https://cdn.aarp.net/content/dam/aarp/entertainment/books/2020/10/1140-a-head-full-of-ghosts.imgcache.rev.web.300.456.jpg',
      },
      {
        id: 6,
        photo:
          'https://cdn.aarp.net/content/dam/aarp/entertainment/books/2020/10/1140-salems-lot.imgcache.rev.web.300.456.jpg',
      },
      {
        id: 7,
        photo:
          'https://cdn.aarp.net/content/dam/aarp/entertainment/books/2020/10/1140-the-woman-in-black.imgcache.rev.web.300.456.jpg',
      },
      {
        id: 8,
        photo:
          'https://cdn.aarp.net/content/dam/aarp/entertainment/books/2020/10/1140-the-haunting-of-mill-house.imgcache.rev.web.300.456.jpg',
      },
      {
        id: 9,
        photo:
          'https://cdn.aarp.net/content/dam/aarp/entertainment/books/2020/10/1140-the-turn-of-the-screw.imgcache.rev.web.300.456.jpg',
      },
      {
        id: 10,
        photo:
          'https://cdn.aarp.net/content/dam/aarp/entertainment/books/2020/10/1140-the-shining.imgcache.rev.web.300.462.jpg',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{flex: 1}}
          data={this.state.data}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={item => item.id}
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
