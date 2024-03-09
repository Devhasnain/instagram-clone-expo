import { TouchableOpacity, View } from "react-native";
import React from "react";
import useStyles from "../../styles/ui.styles";
import { Icon, Text } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const ActionButtons = ({ user }) => {
  const {
    dflex,
    alignCenter,
    gap8,
    px10,
    pt7,
    ProfileAcitonButton,
    textCenter,
  } = useStyles();
  const { navigate } = useNavigation();

  const redirectToEditProfile = () => {
    navigate("editprofile");
  };

  return (
    <View style={[dflex, alignCenter, gap8, pt7, px10]}>
      <TouchableOpacity
        onPress={redirectToEditProfile}
        style={[ProfileAcitonButton, { flex: 1 }]}
      >
        <Text style={[textCenter]}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[ProfileAcitonButton, { flex: 1 }]}>
        <Text style={[textCenter]}>Share Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[ProfileAcitonButton]}>
        <Icon type="ionicons" name="person-add" size={17} />
      </TouchableOpacity>
    </View>
  );
};

export default ActionButtons;
