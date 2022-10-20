import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.color.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.font.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorPrimary: {
    color: theme.color.primary,
  },
  colorSecundary: {
    color: theme.color.secundary,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  subheading: {
    fontSize: theme.fontSizes.subheading,
  },
  big: {
    fontSize: 20,
  },
  small: {
    fontSize: 10,
  },
  textAlignCenter: {
    textAlign: "center",
  },
});

export default function StyleText({
  children,
  color,
  fontSize,
  fontWeight,
  style,
  align,
  ...restOfProps
}) {
  const textStyles = [
    styles.text,
    align === "center" && styles.textAlignCenter,
    color === "primary " && styles.colorPrimary,
    color === "secondary" && styles.colorSecundary,
    fontSize === "subheading" && styles.subheading,
    fontWeight === "bold" && styles.bold,
    style,
  ];
  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  );
}
