import { Image, View } from "react-native";
import React from "react";
import useStyles from "../styles/ui.styles";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "@rneui/themed";

const UploadStory = () => {
  const { storyImageContainer, h_full, w_full, storyBadge } = useStyles();
  return (
    <LinearGradient
      colors={[
        "#405DE6",
        "#5851DB",
        "#833AB4",
        "#C13584",
        "#E1306C",
        "#FD1D1D",
        "#F56040",
        "#F77737",
        "#FCAF45",
      ]}
      //   colors={["#808080", "#808080"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{
        padding: 2.5,
        borderRadius: 50,
        position: "relative",
      }}
    >
      <View style={[storyImageContainer]}>
        <Image
          alt=""
          source={require("../assets/images/user.jpg")}
          style={[h_full, w_full]}
        />
      </View>
      <View style={[storyBadge]}>
        <Icon type="ionicons" name="add" size={18} />
      </View>
    </LinearGradient>
  );
};

export default UploadStory;
