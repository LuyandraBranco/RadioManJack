import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ButtonTypeProps {
  name: string;
}
export function ButtonTypeStation({ name }: ButtonTypeProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  return (
    <TouchableOpacity
      style={[styles.button, isFocused && styles.focused]}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    paddingLeft: 25,
    paddingRight: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#FFA500',
  },
  focused: {
    backgroundColor: "#FFA500",
  },
  text: {
    color: "#fff",
    fontSize: 14,
  },
});
