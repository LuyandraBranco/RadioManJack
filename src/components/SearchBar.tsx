import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export function SearchBar({ onSearch }:any) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setSearchQuery}
        value={searchQuery}
        placeholder="Procurar..."
        placeholderTextColor="#fff"
        onSubmitEditing={handleSearch} 
      />
      <Ionicons name="search" size={20} color="#fff" style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#053045",
    padding: 10,
    borderRadius: 40,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    paddingRight: 30,
    paddingLeft: 10,
    color: "#fff",
  },
  icon: {
    position: "absolute",
    right: 15,
  },
});
