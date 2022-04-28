import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const localRestaurants = [
  {
    name: 'Corner Tab',
    image_url:
      'https://www.thebalancesmb.com/thmb/kectf9d4azgI8yVnBuoB0h2Z8zA=/3865x2174/smart/filters:no_upscale()/overhead-view-of-smiling-female-friends-sharing-lunch-in-restaurant-928010348-5b4abe8f46e0fb003712c478.jpg',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1222,
    rating: 4.5,
  },
  {
    name: ' Tab',
    image_url:
      'https://www.thebalancesmb.com/thmb/kectf9d4azgI8yVnBuoB0h2Z8zA=/3865x2174/smart/filters:no_upscale()/overhead-view-of-smiling-female-friends-sharing-lunch-in-restaurant-928010348-5b4abe8f46e0fb003712c478.jpg',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1222,
    rating: 4.5,
  },
  {
    name: 'Corner',
    image_url:
      'https://www.thebalancesmb.com/thmb/kectf9d4azgI8yVnBuoB0h2Z8zA=/3865x2174/smart/filters:no_upscale()/overhead-view-of-smiling-female-friends-sharing-lunch-in-restaurant-928010348-5b4abe8f46e0fb003712c478.jpg',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1222,
    rating: 4.5,
  },
  {
    name: 'Hwat',
    image_url:
      'https://www.thebalancesmb.com/thmb/kectf9d4azgI8yVnBuoB0h2Z8zA=/3865x2174/smart/filters:no_upscale()/overhead-view-of-smiling-female-friends-sharing-lunch-in-restaurant-928010348-5b4abe8f46e0fb003712c478.jpg',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1222,
    rating: 4.5,
  },
];
export default function RestaurantItems({ navigation, ...props }) {
  //getting data from parent components
  return (
    <>
      {props.restaurantData.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            navigation.navigate('RestaurantDetail', {
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.review_count,
              rating: restaurant.rating,
              categories: restaurant.categories,
            });
          }}
          activeOpacity={1}
          style={{ marginBottom: 30 }}
        >
          <View
            style={{ marginTop: 10, padding: 15, backgroundColor: 'white' }}
          >
            <ResutaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const ResutaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: '100%', height: 180, borderRadius: 10 }}
    />
    <TouchableOpacity style={{ position: 'absolute', top: 20, right: 20 }}>
      <MaterialCommunityIcons name='heart-outline' size={25} color='#ffffff' />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
      }}
    >
      <View>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{props.name}</Text>
        <Text style={{ fontSize: 15, color: 'grey' }}>30-45 • min</Text>
      </View>
      <View
        style={{ backgroundColor: '#eee', highlight: 30, width: 30 }}
      ></View>
      <View
        style={{
          backgroundColor: '#eee',
          width: 30,
          height: 30,
          alignItems: 'center',
          borderRadius: 15,
          justifyContent: 'center',
        }}
      >
        <Text>{props.rating}</Text>
      </View>
    </View>
  );
};
