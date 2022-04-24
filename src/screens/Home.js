import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect } from "react";
import HeaderTabs from "../components/HeaderTabs";
import Searchbar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItems, {
  localRestaurants,
} from "../components/RestaurantItems";

const YELP_API_KEY =
  "V4TfFyhZkYEsskZx1vVeJyoyQfLqViTjUftHRItbyiwjT1bmKLLBqHyNg-fFgffSpakeDqpDMRGuqICGyifzGy1WBdKbvqIO62uD2kD97vcTjkLC8UBBvZrl5_pVYnYx";

export default function Home() {
  const [restaurantData, setRestaurantData] = React.useState(localRestaurants);
  const getRestaurantFromYelp = () => {
    const yelpUrl =
      "https://api.yelp.com/v3/businesses/search?term=restaurants&location=SantaBarbara";

    const apiOptions = {
      headers: {
        authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => setRestaurantData(json.businesses));
  };
  useEffect(() => {
    getRestaurantFromYelp();
  }, []);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <Searchbar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}
