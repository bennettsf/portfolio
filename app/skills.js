import { View, Text, SectionList, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const SKILLS = [
  {
    title: "Languages",
    data: ["Python", "JavaScript", "Java"],
  },
  {
    title: "Databases",
    data: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Operating Systems",
    data: ["Windows", "Linux"],
  },
  {
    title: "IDEs",
    data: ["VS Code", "IntelliJ", "PyCharm", "Android Studio"],
  },
];

const Skills = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Bennett's Skills</Text>
      <SafeAreaView style={styles.listContainer}>
        <SectionList
          sections={SKILLS}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.item}>{item}</Text>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  heading: {
    fontSize: 30,
    marginBottom: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  listContainer: {
    flex: 1,
    width: "100%",
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  itemContainer: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
  item: {
    fontSize: 16,
  },
});

export default Skills;
