import { Dimensions, Image, TouchableOpacity } from "react-native";
import React from "react";
import useStyles from "../../styles/ui.styles";

const { width } = Dimensions.get("screen");
const PostCard = ({ post }) => {
  const { w_full, h_full } = useStyles();
  let cardWith = width / 3;
  return (
    <TouchableOpacity
      style={{
        width: cardWith - 2.7,
        height: 180,
      }}
    >
      <Image alt="" source={{ uri: post.avatar }} style={[w_full, h_full]} />
    </TouchableOpacity>
  );
};

export default PostCard;
