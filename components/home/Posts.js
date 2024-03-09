import { View } from "react-native";
import React from "react";
import posts from "../../assets/data/posts.json";
import useStyles from "../../styles/ui.styles";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";
import PostComments from "./PostComments";

const Posts = () => {
  const { gap10, gap25, flexC, py5 } = useStyles();
  return (
    <View style={[py5, flexC, gap25]}>
      {posts.slice(0, 5).map((item, index) => {
        return (
          <View key={index} style={[gap10, flexC]}>
            <PostHeader post={item} />
            <PostBody post={item} />
            <PostFooter post={item} />
            <PostComments post={item} />
          </View>
        );
      })}
    </View>
  );
};

export default Posts;
