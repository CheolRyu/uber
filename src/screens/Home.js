import { View, Text, SafeAreaView, ScrollView } from 'react-native';

import React, { useEffect, useState } from 'react';
import HeaderTabs from '../components/home/HeaderTabs';
import Searchbar from '../components/home/SearchBar';
import Categories from '../components/home/Categories';
import { Divider } from 'react-native-elements';
import RestaurantItems, {
  localRestaurants,
} from '../components/home/RestaurantItems';
import BottomTabs from '../components/home/BottomTabs';

const YELP_API_KEY =
  'V4TfFyhZkYEsskZx1vVeJyoyQfLqViTjUftHRItbyiwjT1bmKLLBqHyNg-fFgffSpakeDqpDMRGuqICGyifzGy1WBdKbvqIO62uD2kD97vcTjkLC8UBBvZrl5_pVYnYx';

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState('Santa Barbara');
  const [activeTab, setActiveTab] = useState('Delivery');
  const getRestaurantFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };
  useEffect(() => {
    getRestaurantFromYelp();
  }, [city, activeTab]);
  return (
    <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
      <View style={{ backgroundColor: 'white', padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <Searchbar cityhandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
