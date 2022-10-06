import Constants from "expo-constants";

import { Text, View } from "react-native";
import RepositoryList from "./RespositoryList";

const Main = () => {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
          <Text>List of repos..</Text>
          <RepositoryList/>
    </View>
  );
};

export default Main;
