import { StyleSheet } from "react-native";
import { color, fonts, fontSize, size } from "../../theme";

export const mainView = () => ({
  flex: 1,
  backgroundColor: color.primary
})

export const imageBackground = () => ({
  flex: 1,
  zIndex: size.moderateScale(1),
  justifyContent: 'center',
  alignItems: 'center'
})

export const cardView = () => ({
  padding: size.moderateScale(20),
  backgroundColor: color.customBlack(0.2)
})

export const titleText = () => ({
  fontSize: fontSize.smallMedium,
  fontFamily: fonts.poppinsBoldItalic,
  letterSpacing: size.moderateScale(2), 
})

export const quoteView = () => ({
   
})

export const quoteText = () => ({
   
})