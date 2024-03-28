import { Heart } from "phosphor-react-native";
import React from "react";
import { Image, View, Text } from "react-native";

export function CardStation() {
  return (
    <View
      style={{ width: "48%", height: 620, borderRadius: 20 }}
    >
      <View style={{ position: "relative" }}>
        <Image
          source={require("../assets/images/logo.png")}
          style={{ width: "100%", height: 200 }}
        />
        <View style={{ position: "absolute", bottom: 10, left: 10 }}>
          <Text style={{ color: "#fff", fontWeight: "400" }}>Radio Mais</Text>
          <Text style={{ color: "orange", fontSize: 12 }}>
            Seu segundo texto aqui
          </Text>
        </View>
      </View>
    </View>
  );
}
