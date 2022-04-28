import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  titleStyle: {
    fontWeight: '600',
    fontSize: 19,
  },
});
const foods = [
  {
    title: 'Tandoori Chicken',
    description: 'Amazing Indian dish',
    price: '$19.20',
    image:
      'https://www.thespruceeats.com/thmb/JJWmzJfLW73XVnbF7sNUYoAG6XY=/1125x1125/smart/filters:no_upscale()/GettyImages-666710160-0b77f6cf3f3049e498a0d80bbf6535cc.jpg',
  },
  {
    title: 'Korean Soup',
    description:
      'Amazing spicy korean kimchi soup with pork, tofu and mashroom',
    price: '$14.50',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/7/70/Korean_stew-Kimchi_jjigae-05.jpg',
  },
  {
    title: 'Tandoori Chicken',
    description: 'Amazing Indian dish',
    price: '$19.20',
    image:
      'https://www.thespruceeats.com/thmb/JJWmzJfLW73XVnbF7sNUYoAG6XY=/1125x1125/smart/filters:no_upscale()/GettyImages-666710160-0b77f6cf3f3049e498a0d80bbf6535cc.jpg',
  },
  {
    title: 'Korean Soup',
    description:
      'Amazing spicy korean kimchi soup with pork, tofu and mashroom',
    price: '$14.50',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/7/70/Korean_stew-Kimchi_jjigae-05.jpg',
  },
  {
    title: 'Tandoori Chicken',
    description: 'Amazing Indian dish',
    price: '$19.20',
    image:
      'https://www.thespruceeats.com/thmb/JJWmzJfLW73XVnbF7sNUYoAG6XY=/1125x1125/smart/filters:no_upscale()/GettyImages-666710160-0b77f6cf3f3049e498a0d80bbf6535cc.jpg',
  },
  {
    title: 'Korean Soup',
    description:
      'Amazing spicy korean kimchi soup with pork, tofu and mashroom',
    price: '$14.50',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/7/70/Korean_stew-Kimchi_jjigae-05.jpg',
  },
];

export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider
            width={0.5}
            orientation='vertical'
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: 'space-evenly' }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <Image
    source={{ uri: props.food.image }}
    style={{ height: 100, width: 100, borderRadius: 10 }}
  />
);
