import 'react-native-gesture-handler'
import React from 'react'
import {
  AppRegistry,
  BackHandler,
  View
} from 'react-native'

import ViewPager from '@react-native-community/viewpager'

import Presence from './Presence'
import Reimbursement from './Reimbursement'

export default Home = ({navigation}) => {  
  BackHandler.addEventListener('hardwareBackPress', () => {
    return true
  })

  return (
      <ViewPager initialPage={0} style={{flex: 1}}>
        <View key="1">
          <Presence navigation={navigation} />
        </View>
        <View key="2">
          <Reimbursement />
        </View>
    </ViewPager> 
  );
}