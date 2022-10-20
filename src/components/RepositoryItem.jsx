import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import StyleText from "./StyleText";
import theme from "../../theme";

const parseThousand = (value) => {
  return value >= 1000 ? `${Math.round(value / 100) / 10} K` : String(value);
};

const RepositoryStats = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 15,
        
      }}
    >
      <View>
        <StyleText align="center" fontWeight="bold">
          {parseThousand(props.stargazersCount)}
        </StyleText>
        <StyleText>Stars</StyleText>
      </View>
      <View>
        <StyleText align="center" fontWeight="bold">
          {parseThousand(props.forksCount)}
        </StyleText>
        <StyleText small>Forks</StyleText>
      </View>
      <View>
        <StyleText align="center" fontWeight="bold">
          {props.reviewCount}
        </StyleText>
        <StyleText small>Review</StyleText>
      </View>
      <View>
        <StyleText align="center" fontWeight="bold">
          {props.ratingAverage}
        </StyleText>
        <StyleText small>Rating</StyleText>
      </View>
    </View>
  );
};

const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <RepositoryHeader {...props} />
    <RepositoryStats {...props} />
  </View>
);

const RepositoryHeader = (props) => (
  <View style={{ flexDirection: "row" }}>
    <View style={{flex:0}}>
      <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
    </View>

    <View
      style={{
        flexDirection: "column",
        justifyContent: "space-around",
        marginLeft: 15,
        flex:0
      }}
    >
      <StyleText fontSize="subheading" fontWeight="bold">
        {props.fullName}{" "}
      </StyleText>
      <StyleText style={styles.description}>{props.description}</StyleText>
      <StyleText style={styles.language}>{props.language}</StyleText>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
    margin: 12,
    alignSelf: "flex-start",
    overflow: "hidden",
  },
  language: {
    padding: 4,
    marginTop: 5,
    color: theme.color.white,
    backgroundColor: theme.color.primary,
    alignSelf: "flex-start",
    borderRadius: 4,
  },
  description: {
    alignSelf: "self-start",
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
});

export default RepositoryItem;
