import { color, fonts, fontSize, size } from "../../theme";

export const keyboardAwareStyle = () => ({
  flex: 1,
})

export const mainView = () => ({
  flex: 1,
  backgroundColor: color.primary
})

export const topView = () => ({

})

export const header = () => ({
  paddingHorizontal: size.moderateScale(16)
})

export const middleView = () => ({
  flex: 1,
  paddingVertical: size.moderateScale(80),
})

export const title = () => ({
  fontSize: fontSize.large,
  color: color.cream,
  fontFamily: fonts.poppinsSemiBold,
  textAlign: 'center',
  letterSpacing: size.moderateScale(3),
  textTransform: 'uppercase'
})

export const formDataView = () => ({
  flex: 1,
  gap: size.moderateScale(40)
})

export const inputBoxWrapper = () => ({
  
})

export const inputBox = () => ({
  marginHorizontal: size.moderateScale(16),
  marginBottom: size.moderateScale(30),
  paddingHorizontal: size.moderateScale(5),
  flexDirection: 'row',
  alignItems: 'center',
  gap: size.moderateScale(5),
  borderBottomWidth: size.moderateScale(1),
  borderBottomColor: color.creamLight,
  borderRadius: size.moderateScale(10),
})

export const errorText = () => ({
  color: color.lightGrey,
  fontSize: fontSize.littleSmall,
  fontFamily: fonts.poppinsRegular,
  letterSpacing: size.moderateScale(2),
  position: 'absolute',
  bottom: size.moderateScale(-18),
  left: size.moderateScale(5)
})

export const inputStyle = () => ({
  flex: 1,
  color: color.creamLight,
  fontSize: fontSize.smallMedium,
  fontFamily: fonts.poppinsRegular,
  letterSpacing: size.moderateScale(2)
})


export const buttonWrapper = () => ({
  marginHorizontal: size.moderateScale(16),
  marginTop: size.moderateScale(20)
})

export const button = (loading) => ({
  backgroundColor: loading ? color.disabled : color.darkGrey,
  width: '100%',
  borderRadius: size.moderateScale(5)
})

export const linkWrapper = () => ({
  alignItems: 'flex-end',
  marginHorizontal: size.moderateScale(16),
  marginTop: size.moderateScale(5),
})

export const linkText = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.poppinsRegular,
  letterSpacing: size.moderateScale(2)
})

