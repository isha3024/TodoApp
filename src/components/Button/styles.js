import { color, size } from "../../theme"

export const button = (loading) => ({
  width: '100%',
  paddingVertical: size.moderateScale(10),
  backgroundColor: loading ? color.semiTransBlack : color.darkGrey,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: size.moderateScale(5)
})

export const btnTitle = () => ({
  fontSize: 30,
  fontWeight: 'bold'
})