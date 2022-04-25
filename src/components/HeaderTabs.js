import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function HeaderTabs(props) {
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        title="Delivery"
        btncolor="black"
        textcolor="white"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <HeaderButton
        title="Pick up"
        btncolor="white"
        textcolor="black"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
}

const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab === props.title ? "black" : "white",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
    onPress={() => props.setActiveTab(props.title)}
  >
    <Text
      style={{
        color: props.activeTab === props.title ? "white" : "black",
        fontSize: 15,
        fontWeight: "900",
      }}
    >
      {props.title}
    </Text>
  </TouchableOpacity>
);
