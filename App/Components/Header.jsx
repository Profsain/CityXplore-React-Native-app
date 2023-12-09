import { View, Text, Image, TextInput } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View className="flex flex-row items-center">
      <Image
        source={require("./../../assets/citylogo.jpg")}
        className="w-8 h-8 rounded-md"
      />

      <View>
        <TextInput
          placeholder="Search"
          className="border-2  rounded-full border-gray-400 pl-2 mx-3 w-60"
        />
          </View>
          
          <Image source={require("./../../assets/avatar.jpg")} className="w-8 h-8 rounded-full"/>
    </View>
  );
};

export default Header;
