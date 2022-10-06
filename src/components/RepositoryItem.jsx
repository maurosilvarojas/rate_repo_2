import { View, Text, StyleSheet } from "react-native";
import React from "react";
import StyleText from "./StyleText";
import theme from "../../theme";

const RepositoryItem = (props) => (
  <View key={props.id} style={theme.fontWeights.bold}>
    <StyleText fontWeight="bold">{props.fullName}</StyleText>
    <StyleText bold>{props.description}</StyleText>
    <StyleText blue >{props.language}</StyleText>
    <StyleText small>{props.stargazersCount}</StyleText>
    <StyleText small>{props.reviewCount}</StyleText>
    <StyleText small>{props.ratingAverage}</StyleText>
  </View>
);

export default RepositoryItem;
