import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState('Delivery');
  return (
    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
      <HeaderButton
        title='Delivery'
        btncolor='black'
        textcolor='white'
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        title='Pick up'
        btncolor='white'
        textcolor='black'
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab === props.title ? 'black' : 'white',
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
    onPress={() => props.setActiveTab(props.title)}
  >
    <Text
      style={{
        color: props.activeTab === props.title ? 'white' : 'black',
        fontSize: 15,
        fontWeight: '900',
      }}
    >
      {props.title}
    </Text>
  </TouchableOpacity>
);
