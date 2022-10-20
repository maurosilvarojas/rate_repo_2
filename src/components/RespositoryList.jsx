import React from "react";
import { Text, FlatList,StyleSheet ,View} from "react-native";
import respositories from "../../data/respositories";
import RepositoryItem from "./RepositoryItem";


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
}); 

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  return (
    <FlatList
      data={respositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item: repo }) => (<RepositoryItem {... repo} />)}
    />
  );
};

export default  RepositoryList;
