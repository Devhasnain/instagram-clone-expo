import { TouchableOpacity, View } from "react-native";
import React from "react";
import { Icon, Text } from "@rneui/themed";
import useStyles from "../../styles/ui.styles";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const tabs = [
  {
    for: "post",
    icon: <Icon type="materialicons" name="library-add" size={25} />,
  },
  {
    for: "menu",
    icon: <Icon type="feather" name="menu" size={27} />,
  },
];

const Header = () => {
  const { navigate } = useNavigation();
  const { user } = useSelector((state) => state.authSlice);
  const { px10, dflex, alignCenter, justifyBtw, gap16, pb12} = useStyles();
  const { email } = user;
  const redirectToSettings = () => {
    navigate("settings");
  };
  const redirectToNewPost = () => {
    navigate("Newpost");
  };

  return (
    <View style={[px10, dflex, alignCenter, justifyBtw, pb12]}>
      <Text numberOfLines={1} h4 h4Style={{ fontSize: 22, fontWeight: "600", width:"50%" }}>
        {email}
      </Text>
      <View style={[dflex, alignCenter, gap16]}>
        {tabs.map((item, index) => (
          <React.Fragment key={index}>
            {item.for === "menu" ? (
              <TouchableOpacity onPress={redirectToSettings}>
                {item.icon}
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={redirectToNewPost}>
                {item.icon}
              </TouchableOpacity>
            )}
          </React.Fragment>
        ))}
      </View>
    </View>
  );
};

export default Header;
