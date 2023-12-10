import { useEffect, useState, useContext } from "react";
import { View, Text } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { UserLocationContext } from "../../Context/UserLocationContext";

const GoogleMapView = () => {
  const { location, setLocation } = useContext(UserLocationContext);

  const [region, setRegion] = useState({});

  const setUserLocation = () => {
    // check if location is available
    if (location) {
      // set region to user's current location
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0522,
        longitudeDelta: 0.0421,
      });
    }
  };

  useEffect(() => {
    setUserLocation();
  }, [location]);

  return (
    <View className="mt-4">
      <Text className="text-xl font-bold pl-2">Top Near Places</Text>
      <View className="my-4 overflow-hidden rounded-3xl">
        <MapView
          className="w-400 h-60 "
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          region={region}
        >
          {/* add map marker */}
          <Marker title="You" coordinate={region} />
        </MapView>
      </View>
    </View>
  );
};

export default GoogleMapView;
