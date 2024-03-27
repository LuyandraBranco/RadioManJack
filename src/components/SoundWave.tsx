import React from "react";
import { View } from "react-native";
import * as Animatable from "react-native-animatable";

export function SoundWave() {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      {[...Array(40)].map((_, index) => (
        <Animatable.View
          key={index}
          style={{
            width: 4,
            height: 65,
            backgroundColor: "orange",
            margin: 2,
            borderRadius: 8
          }}
          animation={{
            0: { transform: [{ scaleY: 0.1 }] },
            0.5: { transform: [{ scaleY: 1 }] },
            1: { transform: [{ scaleY: 0.1 }] },
          }}
          duration={500}
          iterationCount="infinite"
        />
      ))}
    </View>
  );
}
