import React from "react";
import useStyles from "../../styles/ui.styles";
import { Image, TouchableOpacity, View } from "react-native";
import { Icon, Text, useThemeMode } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const Tabs = [
  {
    title: "Notifications",
    icon: <Icon type="antdesign" name="hearto" size={22} />,
    path: "notifications",
  },
  {
    title: "Messages",
    icon: <Icon type="ionicons" name="message" size={22} />,

    path: "",
  },
];

const Header = () => {
  const {
    dflex,
    w_full,
    h_full,
    homeLogo,
    justifyBtw,
    alignCenter,
    gap16,
    mx10,
    messageBadge,
    messageBadgeText,
  } = useStyles();

  const { mode } = useThemeMode();
  const { navigate } = useNavigation();
  const redirectHandler = (path) => {
    navigate(path);
  };

  return (
    <View style={[dflex, justifyBtw, alignCenter, mx10]}>
      <View style={[homeLogo]}>
        <Image
          alt=""
          source={require("../../assets/images/logo1.png")}
          style={[h_full, w_full]}
          resizeMode="contain"
          tintColor={mode === "dark" ? "white" : "black"}
        />
      </View>
      <View style={[dflex, alignCenter, gap16]}>
        {Tabs.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <TouchableOpacity
                style={{
                  position: "relative",
                }}
                onPress={() => {
                  redirectHandler(item.path);
                }}
              >
                {item.title.toLowerCase() === "messages" ? (
                  <View style={[messageBadge]}>
                    <Text numberOfLines={1} style={[messageBadgeText]}>
                      11
                    </Text>
                  </View>
                ) : (
                  ""
                )}

                {item.icon}
              </TouchableOpacity>
            </React.Fragment>
          );
        })}
      </View>
    </View>
  );
};

export default Header;
