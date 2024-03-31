import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ButtonTypeProps {
  name: string;
  selectedGenre: string;
  onGenreSelect: (genre: string) => void;
}
export function ButtonTypeStation({ name, selectedGenre, onGenreSelect }: ButtonTypeProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TouchableOpacity
    style={[styles.button, selectedGenre === name && styles.focused]}
    onPress={() => onGenreSelect(name)}
  >
    <Text style={styles.text}>{name}</Text>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 36,
    paddingLeft: 25,
    paddingRight: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#192e3a",
    borderRadius: 10,
    marginRight: 10,
  },
  focused: {
    backgroundColor: "#2d92ef",
  },
  text: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500"
  },
});
