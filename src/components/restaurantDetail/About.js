import { View, Text, Image } from 'react-native';
import React from 'react';
const yelpRestaurantInfo = {
  nmae: 'Thai famouse house',
  image:
    'https://www.thespruceeats.com/thmb/JJWmzJfLW73XVnbF7sNUYoAG6XY=/1125x1125/smart/filters:no_upscale()/GettyImages-666710160-0b77f6cf3f3049e498a0d80bbf6535cc.jpg',
  price: '$$',
  reviews: 2000,
  rating: '4.5',
  categories: [
    {
      title: 'Thai',
    },
    {
      title: 'Comfort Food',
    },
  ],
};

const { name, image, price, rating, categories, reviews } = yelpRestaurantInfo;
const formatedCategories = categories.map((cat) => cat.title).join('•');
const description = `${formatedCategories} ${
  price ? ' • ' + price : ''
} • 🎫 • ${rating} ⭐️ ${reviews}`;

export default function About() {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={title} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image
    source={{
      uri: props.image,
    }}
    style={{ width: '100%', height: 180 }}
  />
);

const RestaurantTitle = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: '600',
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.title}
  </Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: '400',
      fontSize: 15.5,
    }}
  >
    {props.description}
  </Text>
);
