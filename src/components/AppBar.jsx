import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import StyleText from "./StyleText";
import Constants from "expo-constants";
import theme from "../../theme";
import { Link } from "react-router-native";
const appBarHeight = 0;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + appBarHeight,
    flexDirection: "row",
    paddingBottom: 10,
    paddingLeft: 10,
  },
  text: {
    color: theme.appBar.textPrimary,
    paddingHorizontal: 10,
  },
});

const AppBarTab = ({ active, children, to }) => {
  return (
    <Link to={to} component={TouchableWithoutFeedback}>
      <StyleText fontWeight="bold" style={styles.text}>
        {children}
      </StyleText>
    </Link>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab active to="/">
        Repositories
      </AppBarTab>

      <AppBarTab active to="/signin">
        Sign in
      </AppBarTab>
    </View>
  );
};

export default AppBar;
