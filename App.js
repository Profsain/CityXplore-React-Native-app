import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';
import * as Location from "expo-location";
import { UserLocationContext } from './App/Context/UserLocationContext';
// fonts
import { useFonts } from 'expo-font';

export default function App() {
  // load fonts
  // const [fontsLoaded] = useFonts({
  //   'ubuntu-Black': require('./assets/Fonts/Ubuntu-Bold.ttf'),
  //   'ubuntu-Regular': require('./assets/Fonts/Ubuntu-Regular.ttf'),
  // });
   // get user location
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  
  return (
    <View style={styles.container}>
      <UserLocationContext.Provider value={{location, setLocation}}>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </UserLocationContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
