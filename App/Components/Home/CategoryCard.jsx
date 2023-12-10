import { View, Text, Image,  } from "react-native";

const CategoryCard = ({ category }) => {
  const { id, name, value, icon } = category;
  return (
    <View className="p-2 m-2 w-24 h-24 bg-gray-200 items-center justify-center rounded-lg">
      <Image source={icon} className="w-8 h-8 " />
      <Text>{name}</Text>
    </View>
  );
};

export default CategoryCard;
