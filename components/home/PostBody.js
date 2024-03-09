import { View, Text, Image } from "react-native";
import React from "react";
import useStyles from "../../styles/ui.styles";

const PostBody = ({ post }) => {
  const { postImage, postImageContainer } = useStyles();
  return (
    <View style={[postImageContainer]}>
      <Image style={[postImage]} source={{ uri: post.avatar }} alt="" />
    </View>
  );
};

export default PostBody;
