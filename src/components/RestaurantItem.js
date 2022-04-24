import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestaurantItem() {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 20 }}>
      <View style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
        <ResutaurantImage />
        <RestaurantInfo />
      </View>
    </TouchableOpacity>
  );
}

const ResutaurantImage = () => (
  <>
    <Image
      source={{
        uri: "https://www.thebalancesmb.com/thmb/kectf9d4azgI8yVnBuoB0h2Z8zA=/3865x2174/smart/filters:no_upscale()/overhead-view-of-smiling-female-friends-sharing-lunch-in-restaurant-928010348-5b4abe8f46e0fb003712c478.jpg",
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", top: 20, right: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#ffffff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <View>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          Farm house Kitchen Thai Cuisone
        </Text>
        <Text style={{ fontSize: 15, color: "grey" }}>30~45 - min</Text>
      </View>
      <View
        style={{ backgroundColor: "#eee", highlight: 30, width: 30 }}
      ></View>
      <View
        style={{
          backgroundColor: "#eee",
          width: 30,
          height: 30,
          alignItems: "center",
          borderRadius: 15,
          justifyContent: "center",
        }}
      >
        <Text>4.5</Text>
      </View>
    </View>
  );
};
