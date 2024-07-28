import { color, fonts, fontSize, size } from "../../theme";

export const mainView = () => ({
  flex: 1,
  backgroundColor: color.primary,
})

export const topView = () => ({
  paddingHorizontal: size.moderateScale(16),
  marginTop: size.moderateScale(50)
})

export const title = () => ({
  textAlign: 'left',
  color: color.cream,
  fontSize: fontSize.middleLarge,
  fontFamily: fonts.poppinsBold,
  letterSpacing: size.moderateScale(2),
})

export const inputView = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: color.secondary,
  paddingHorizontal: size.moderateScale(10),
  borderRadius: size.moderateScale(5),
  marginTop: size.moderateScale(15)
})

export const input = () => ({
  color: color.cream,
  fontSize: fontSize.small,
  fontFamily: fonts.poppinsRegular,
})

export const closeIcon = () => ({
  position: 'absolute',
  right: size.moderateScale(10),
  transform: [{rotate: '45deg'}]
})

export const middleView = () => ({
  marginTop: size.moderateScale(15),
  paddingHorizontal: size.moderateScale(16),
})

export const todoListTitle = () => ({
  color: color.cream,
  fontSize: fontSize.small,
  fontFamily: fonts.poppinsLight,
  letterSpacing: size.moderateScale(2),
  marginBottom: size.moderateScale(10),
  marginTop: size.moderateScale(20)
})

export const todoItemView = () => ({
  width: '100%',
  padding: size.moderateScale(10),
  marginVertical: size.moderateScale(10),
  borderRadius: size.moderateScale(5),
  backgroundColor: color.customWhite(0.1),
  flexDirection: 'row',
  alignItems: 'center',
})

export const todoItemText = (isCompleted) => ({
  flex: 1,
  color: isCompleted ? color.creamLight : color.cream,
  fontSize: fontSize.small,
  fontFamily: fonts.poppinsMedium,
  letterSpacing: size.moderateScale(2),
  paddingLeft: size.moderateScale(5),
  textDecorationLine: isCompleted ? 'line-through' : 'none'
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
