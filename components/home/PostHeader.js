import { TouchableOpacity, View } from "react-native";
import React from "react";
import useStyles from "../../styles/ui.styles";
import { Icon, Text } from "@rneui/themed";
import AvatarImage from "../AvatarImage";

const PostHeader = ({ post }) => {
  const { mx10, dflex, alignCenter, justifyBtw, spaceX10, postHeaderText } =
    useStyles();
  return (
    <View style={[dflex, alignCenter, justifyBtw, mx10]}>
      <View style={[dflex, alignCenter, spaceX10]}>
        <AvatarImage isStory={false} url={post.avatar} />
        <Text numberOfLines={1} style={[postHeaderText]}>
          {post?.name
            ? post.name?.length >= 20
              ? post?.name.slice(0, 20) + "..."
              : post.name
            : "Unknow"}
        </Text>
      </View>
      <TouchableOpacity>
        <Icon type="entypo" name="dots-three-horizontal" size={16} />
      </TouchableOpacity>
    </View>
  );
};

export default PostHeader;
