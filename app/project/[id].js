import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { useLocalSearchParams } from "expo-router";

const ProjectID = () => {
  const { id } = useLocalSearchParams();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>Project: {id}</Text>

      <Link href={"/"}>Home Page</Link>
      <Link href={"/projects"}>Projects Page</Link>
    </View>
  );
};

export default ProjectID;
