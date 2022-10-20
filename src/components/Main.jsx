import Constants from "expo-constants";

import { Text, View, StyleSheet } from "react-native";
import RepositoryList from "./RespositoryList.jsx";
import SignIn from "./SignIn";
import AppBar from "./AppBar";
import { Switch, Route, Routes } from "react-router-native";

import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.color.white,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/signin" element={<SignIn />} exact />
      </Routes>
    </View>
  );
};

export default Main;
