import Icon from "react-native-vector-icons/Ionicons";
import React from "react";
import { View } from "react-native";


const CustomHeader = ({ navigation }) => (
  <View style={[styles.container]}>
    <Icon
      name="md-menu"
      size={32}
      color="black"
      onPress={() => navigation.openDrawer()}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    height: 70,
    paddingTop: 20
  }
});


export default CustomHeader;