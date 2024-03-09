import { View, ScrollView } from "react-native";
import React from "react";
import useStyles from "../../styles/ui.styles";
import users from "../../assets/data/posts.json";
import { Text } from "@rneui/themed";
import AvatarImage from "../AvatarImage";
import UploadStory from "../UploadStory";

const Stories = () => {
  const { flexC, px14, gap10, alignCenter, storyText } = useStyles();
  return (
    <ScrollView
      contentContainerStyle={[px14, gap10]}
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces={true}
    >
      <View style={[flexC, alignCenter]}>
        <UploadStory />
        <Text style={[storyText]} numberOfLines={1}>
          Your Story
        </Text>
      </View>
      {users.map((item, index) => {
        return (
          <View key={index} style={[flexC, alignCenter]}>
            <AvatarImage isStory={true} url={item.avatar} />
            <Text style={[storyText]} numberOfLines={1}>
              {item?.name
                ? item.name?.length >= 8
                  ? item?.name.slice(0, 8) + "..."
                  : item.name
                : "Unknow"}
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Stories;
