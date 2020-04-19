import * as React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import { RectButton, ScrollView } from "react-native-gesture-handler";

export default function Symptom(props) {
  return (
    <View style={{ marginLeft: 0, height: 10, width: 130, marginRight: 20 }}>
      <View>
        <ImageBackground
          source={props.imgUri}
          style={{
            height: 130,
            width: 130,
            overflow: "hidden",
            borderRadius: 7,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 17,
              marginLeft: 2,
              marginTop: 105,
            }}
          >
            {props.name}
          </Text>
        </ImageBackground>
      </View>
    </View>
  );
}
