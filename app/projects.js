import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";

const projects = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30, marginBottom: 25 }}>Bennett's Projects</Text>

      <Text style={{ fontSize: 20, marginBottom: 10 }}>Push Links</Text>
      <View style={{ flexDirection: "row" }}>
        <Link style={styles.linkButton} push href={"/project/NSCEvents"}>
          NSC Events
        </Link>
        <Link style={styles.linkButton} push href={"/project/BelindasCloset"}>
          Belinda's Closet
        </Link>
      </View>

      <Text style={{ fontSize: 20, marginBottom: 10 }}>Repalce Links</Text>
      <View style={{ flexDirection: "row" }}>
        <Link style={styles.linkButton} replace href={"/project/PortfolioProject"}>
          Portfolio Website
        </Link>
        <Link style={styles.linkButton} replace href={"/project/WordGame"}>
          Word Game
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  linkButton: {
    padding: 10,
    margin: 10,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default projects;
