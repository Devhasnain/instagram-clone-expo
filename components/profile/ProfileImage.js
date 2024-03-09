import { Image, TouchableOpacity, View } from "react-native";
import React from "react";
import { Text } from "@rneui/themed";
import useStyles from "../../styles/ui.styles";
import { LinearGradient } from "expo-linear-gradient";

const ProfileImage = ({ username }) => {
  const {
    h_full,
    w_full,
    profileImage,
    flexC,
    alignCenter,
    gap6,
    profileName,
  } = useStyles();

  return (
    <View style={[flexC, alignCenter, gap6]}>
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
        <TouchableOpacity style={[profileImage]}>
          <Image
            alt=""
            source={require("../../assets/images/user.jpg")}
            resizeMode="cover"
            style={[h_full, w_full]}
          />
        </TouchableOpacity>
      </LinearGradient>

      <Text style={[profileName]}>{username}</Text>
    </View>
  );
};

export default ProfileImage;
