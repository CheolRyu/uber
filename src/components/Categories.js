import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';

const items = [
  {
    images: require('../../assets/images/shopping-bag.png'),
    text: 'Pick Up',
  },
  {
    images: require('../../assets/images/bread.png'),
    text: 'Bakery Items',
  },
  {
    images: require('../../assets/images/fast-food.png'),
    text: 'Fast Food',
  },
  {
    images: require('../../assets/images/deals.png'),
    text: 'Deals',
  },
  {
    images: require('../../assets/images/coffee.png'),
    text: 'Coffee',
  },
  {
    images: require('../../assets/images/desserts.png'),
    text: 'Dessert',
  },
  {
    images: require('../../assets/images/soft-drink.png'),
    text: 'Soft Drinks',
  },
  {
    // images: require('../../assets/images/splash.png'),
    // text: 'Splash',
  },
];

export default function Categories() {
  return (
    <View
      style={{
        marginTop: 5,
        paddgingLeft: 20,
        paddingVertical: 10,
        backgroundColor: 'white',
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* loop starts here*/}
        {items.map((item, index) => (
          <View style={{ alignItems: 'center', marginRight: 30 }} key={index}>
            <Image
              source={item.images}
              style={{ width: 50, height: 40, resizeMode: 'contain' }}
            />
            <Text style={{ fontSize: 13, fontWeight: '900' }}>{item.text}</Text>
          </View>
        ))}
        {/* loop ends here*/}
      </ScrollView>
    </View>
  );
}
