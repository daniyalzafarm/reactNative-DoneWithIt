import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";
function OfflineNotice(props) {
  const netInfo = useNetInfo();
  console.log(netInfo);
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );

  return null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    height: 75,
    width: "100%",
    // position: "absolute",

    top: Constants.statusBarHeight,
    zIndex: 1,
  },
  text: {
    color: colors.white,
  },
});
export default OfflineNotice;
