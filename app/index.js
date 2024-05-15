import { View, Text, Button, StyleSheet, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";

const HomePage = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        style={{ margin: 25, width: 100, height: 100, borderRadius: 50 }}
        source={require("../assets/bennett.png")}
      />
      <Text style={{ fontSize: 30, marginBottom: 25 }}>Bennett's Portfolio</Text>
      <Link style={styles.linkButton} href={"/projects"}>
        Projects Page
      </Link>
      <Link style={styles.linkButton} href={"/skills"}>
        Skills Page
      </Link>
      <Link style={styles.linkButton} href={"/Contact"}>
        Contact Page
      </Link>
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

export default HomePage;
