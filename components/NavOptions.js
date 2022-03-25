import {View, Image, TouchableOpacity, FlatList, Text} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import Ionicons from 'react-native-vector-icons/Ionicons.js';
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    id: '123',
    title: 'Get a ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: '124',
    title: 'Order food',
    image: 'https://links.papareact.com/28w',
    screen: 'EatsScreen', // change in future...
  },
];

const NavOptions = () => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          activeOpacity={0.6}
          style={tw`p-2 bg-gray-200 m-1 pl-6 pb-8 pt-4 w-40`}>
          <View
          //   style={tw`items-center`}
          >
            <Image
              style={{width: 120, height: 120, resizeMode: 'contain'}}
              source={{uri: item.image}}
            />
            <Text style={tw`text-lg font-semibold mt-2 text-black`}>
              {item.title}
            </Text>

            <Ionicons
              name="arrow-forward-outline"
              size={24}
              color="white"
              style={tw`p-2 rounded-full bg-black w-10 mt-2 `}
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
