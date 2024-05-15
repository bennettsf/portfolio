import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home Page",
        }}
      />
      <Stack.Screen
        name="Contact"
        options={{
          headerTitle: "Contact Page",
        }}
      />
      <Stack.Screen
        name="project/[id]"
        options={{
          headerTitle: "Project Page",
        }}
      />
    </Stack>
  );
};

export default RootLayout;
