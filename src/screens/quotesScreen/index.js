import React, { useEffect } from 'react'
import { View, Text, ImageBackground, StatusBar } from 'react-native'

import * as styles from './styles'
import { Images } from '../../theme/Images'
import { color, size } from '../../theme'
import { useDispatch } from 'react-redux'
import { fetchQuotes } from '../../redux/actions/AuthAction'



export const QuotesScreen = () => {


  const dispatch = useDispatch();

  const getRandomQuote = async () => {
    try {
      const randomQuote = await dispatch(fetchQuotes());
      console.log('randomQuote:: ', randomQuote)
    }
    catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    dispatch(getRandomQuote())
  },[])

  return (
    <View style={styles.mainView()}>
      <StatusBar backgroundColor={color.transparent} translucent={true} barStyle='dark-content' />
      <ImageBackground
        source={Images.quotesBg}
        width={size.deviceWidth}
        height={size.deviceHeight}
        style={styles.imageBackground()}
        blurRadius={2}
        resizeMode='cover'
      >
        <View style={styles.cardView()}>
          <Text style={styles.titleText()}>Quote of the day</Text>
          <View style={styles.quoteView()}>
            <Text style={styles.quoteText()}></Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}
