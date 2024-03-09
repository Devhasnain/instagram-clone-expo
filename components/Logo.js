import { View, Text, Image } from "react-native";
import React from "react";
import useStyles from "../styles/ui.styles";

const Logo = () => {
  const { authLogo, authLogoImage } = useStyles();
  return (
    <View style={[authLogo]}>
      <Image
        alt=""
        source={require("../assets/images/logo.png")}
        style={[authLogoImage]}
      />
    </View>
  );
};

export default Logo;
