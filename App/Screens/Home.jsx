import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import Header from '../Components/Header'

const Home = () => {
  return (
    <SafeAreaView className="p-4">
      <Header />
    </SafeAreaView>
  )
}

export default Home