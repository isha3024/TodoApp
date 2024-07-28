import { StyleSheet } from "react-native";

const customStyles = StyleSheet.create ({
    maincontainer: {
      flex: 1,
      backgroundColor: '#041c32',
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      color: '#FFF'
    },
    shape: {
      height: 200,
      width: 200,
      backgroundColor: '#FFF',
      borderWidth: 10,
      borderColor: '#041c32',
      borderRadius: 50
    }
})

export {
    customStyles
}