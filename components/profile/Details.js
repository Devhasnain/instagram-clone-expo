import { TouchableOpacity, View } from "react-native";
import React from "react";
import useStyles from "../../styles/ui.styles";
import ProfileImage from "./ProfileImage";
import { Text } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const Details = ({ user }) => {
  const { dflex, alignCenter, flexC, justifyArund, py5 } = useStyles();

  const { navigate } = useNavigation();
  const redirectToFriendsPage = () => {
    navigate("friends");
  };

  return (
    <View style={[dflex, alignCenter, justifyArund, py5]}>
      <ProfileImage username={user?.username ?? ""} />
      <View style={[dflex, alignCenter, { columnGap: 25 }]}>
        <View style={[flexC, alignCenter]}>
          <Text h4 h4Style={{ fontSize: 18 }}>
            4
          </Text>
          <Text>posts</Text>
        </View>
        <TouchableOpacity
          onPress={redirectToFriendsPage}
          style={[flexC, alignCenter]}
        >
          <Text h4 h4Style={{ fontSize: 18 }}>
            455
          </Text>
          <Text>followers</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={redirectToFriendsPage}
          style={[flexC, alignCenter]}
        >
          <Text h4 h4Style={{ fontSize: 18 }}>
            423
          </Text>
          <Text>following</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Details;
