import React, { useEffect, useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../../commons";
import { Image, Platform, StyleSheet, View } from "react-native";
import { Button } from "../Button";
import * as ImagePicker from "expo-image-picker";

export const AvatarManager = (props) => {
  const [image, setImage] = useState(props.image);
  const [permissions, setPermissions] = useState({
    camera: false,
    disk: false,
  });

  useEffect(() => {
    requestLibraryPerm().then();
    requestCameraPerm().then();
  }, []);

  const requestCameraPerm = async () => {
    if (Platform.OS !== "web") {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      setPermissions((prev) => ({ ...prev, camera: status === "granted" }));
    }
  };
  const requestLibraryPerm = async () => {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setPermissions((prev) => ({ ...prev, disk: status === "granted" }));
    }
  };

  const pickImageFromCamera = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      handleImageChange(result.uri);
    }
  };
  const pickImageFromDisk = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      handleImageChange(result.uri);
    }
  };

  const handleImageChange = (image) => {
    if (props.onImageChange) {
      props.onImageChange(image);
    }
  };
  return (
    <View style={styles.avatar_container}>
      <View style={styles.avatar_image}>
        {image ? (
          <Image source={{ uri: image }} style={{ width: 140, height: 140 }} />
        ) : (
          <MaterialCommunityIcons
            name={"account"}
            color={Colors.GRAY}
            size={100}
          />
        )}
      </View>
      <View style={styles.buttons_container}>
        <Button
          kind={"SECONDARY"}
          style={styles.button}
          disable={!permissions.disk}
          onPress={pickImageFromDisk}
        >
          Choose from disk
        </Button>
        <Button
          kind={"SECONDARY"}
          style={styles.button}
          disable={!permissions.camera}
          onPress={pickImageFromCamera}
        >
          Take a photo
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar_container: {
    width: "100%",
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  avatar_image: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: Colors.GRAY,
    borderStyle: "solid",
    borderRadius: 4,
    backgroundColor: Colors.WHITE,
    alignItems: "center",
    justifyContent: "center",
  },
  buttons_container: {
    marginLeft: 20,
  },
  button: {
    marginTop: 8,
  },
});
