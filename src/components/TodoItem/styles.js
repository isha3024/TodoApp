import { color, fonts, fontSize, size } from "../../theme";

export const todoItemView = () => ({
  width: '100%',
  padding: size.moderateScale(10),
  marginVertical: size.moderateScale(10),
  borderRadius: size.moderateScale(5),
  backgroundColor: color.customWhite(0.1),
  flexDirection: 'row',
  alignItems: 'center',
})

export const num = () => ({
  color: color.cream,
  fontSize: fontSize.small,
  fontFamily: fonts.poppinsMedium,
  letterSpacing: size.moderateScale(2)
})

export const todoItemText = () => ({
  flex: 1,
  color: color.cream,
  fontSize: fontSize.small,
  fontFamily: fonts.poppinsMedium,
  letterSpacing: size.moderateScale(2),
  paddingLeft: size.moderateScale(5)
})

export const trashIcons = () => ({
  justifyContent: 'center',
  alignItems: 'center',
  width: size.moderateScale(25),
  height: size.moderateScale(25),
  marginHorizontal: size.moderateScale(5),
  backgroundColor: color.red,
  borderRadius: size.moderateScale(20)
})

export const checkIcons = () => ({
  justifyContent: 'center',
  alignItems: 'center',
  width: size.moderateScale(25),
  height: size.moderateScale(25),
  marginHorizontal: size.moderateScale(5),
  backgroundColor: color.lightGrey,
  borderRadius: size.moderateScale(20)
})