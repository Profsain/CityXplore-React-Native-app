import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { CategoryList, GoogleMapView, Header } from '../Components/Home'

const Home = () => {
  return (
    <SafeAreaView className="p-4">
      <Header />

      {/* Google Map View */}
      <GoogleMapView />

      {/* categoryList */}
      <CategoryList />
    </SafeAreaView>
  )
}

export default Home