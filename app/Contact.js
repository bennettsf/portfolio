import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Contact = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30, marginBottom: 25 }}>Contact Info</Text>

      <Text style={{ fontSize: 20, marginBottom: 15 }}>Phone: 555-555-5555</Text>
      <Text style={{ fontSize: 20, marginBottom: 15 }}>Email: bennett.fife@gmail.com</Text>
      <Text style={{ fontSize: 20, marginBottom: 15 }}>Github: bennettsf</Text>
      <Text style={{ fontSize: 20, marginBottom: 15 }}>LinkedIn: bennett-fife</Text>

      <Link href={"/"}>Go Back Home</Link>
    </View>
  );
};

export default Contact;
