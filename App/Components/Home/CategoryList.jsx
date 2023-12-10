import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const CategoryList = () => {
  // category list to be replace with api data
  const categoryList = [
    {
      id: 1,
      name: "Gas Station",
      value: "gas_station",
      icon: require("../../../assets/gasicon.png"),
    },
    {
      id: 2,
      name: "Restaurant",
      value: "restaurant",
      icon: require("../../../assets/resicon.png"),
    },
    {
      id: 3,
      name: "Hotels",
      value: "hotels",
      icon: require("../../../assets/hotelicon.png"),
    },
  ];

  return (
    <View className="my-4">
      <Text className="text-xl font-medium mb-2 text-gray-600">
        Selected Top Category
      </Text>

      {/* use FlatList to render short list */}
      <FlatList
        data={categoryList}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => console.log(item.name)}>
            <CategoryCard category={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CategoryList;
