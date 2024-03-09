import { View } from "react-native";
import React from "react";
import useStyles from "../styles/ui.styles";
import { Image } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";

const AvatarImage = ({ url, isStory, width }) => {
  const { storyImageContainer, w_full, h_full, postAvatarContainer } =
    useStyles();
  return (
    <LinearGradient
      colors={[
        // "#405DE6",
        // "#5851DB",
        // "#833AB4",
        "#C13584",
        "#E1306C",
        "#FD1D1D",
        "#F56040",
        "#F77737",
        "#FCAF45",
      ]}
      // colors={["#808080", "#808080"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{
        padding: 2.5,
        borderRadius: 50,
        position: "relative",
      }}
    >
      <View
        style={[
          isStory
            ? storyImageContainer
            : { ...postAvatarContainer, width: width ? width : 40 },
        ]}
      >
        <Image
          alt=""
          source={{ uri: url }}
          style={[w_full, h_full]}
          resizeMode="cover"
        />
      </View>
    </LinearGradient>
  );
};

export default AvatarImage;
