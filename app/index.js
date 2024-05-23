import React, { useState, useEffect } from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Link } from "expo-router";

const HomePage = () => {
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === "granted");
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  if (hasGalleryPermission === false) {
    return <Text>No access to Internal Storage</Text>;
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ alignItems: "center" }}>
        {image && <Image style={styles.image} source={{ uri: image }} />}
        <Button title="Change Profile Pic" onPress={() => pickImage()} style={styles.button} />
      </View>
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
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  linkButton: {
    fontSize: 20,
    margin: 5,
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
  },
  image: {
    marginTop: 25,
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
});

export default HomePage;
