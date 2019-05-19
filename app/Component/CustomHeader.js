import Icon from "react-native-vector-icons/Ionicons";
import React from "react";
import { View, StyleSheet,Text } from "react-native";


const CustomHeader = () => (
  <View style={styles.container}>
    <Text style={styles.text}>SIK</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignContent: 'flex-start'
  },
  text :{
    fontSize: 28,
    color: '#FF0000',
    marginLeft: 20
  }
});


export default CustomHeader;