import * as React from "react";
import { StyleSheet, View } from "react-native";

const RectangleComponent = () => {
  return <View style={styles.groupChild} />;
};

const styles = StyleSheet.create({
  groupChild: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 25,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 4,
      height: -4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    width: 360,
    height: 298,
  },
});

export default RectangleComponent;