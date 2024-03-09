import { View } from "react-native";
import React from "react";
import posts from "../../assets/data/posts.json";
import useStyles from "../../styles/ui.styles";
import PostCard from "./PostCard";
const Posts = () => {
  const { dflex } = useStyles();
  return (
    <View style={[dflex, { flexWrap: "wrap", gap:4, marginTop:4}]}>
      {posts.map((item, index) => {
        return <PostCard key={index} post={item} />;
      })}
    </View>
  );
};

export default Posts;
