import { TouchableOpacity, View } from "react-native";
import React from "react";
import useStyles from "../../styles/ui.styles";
import { Icon, Text } from "@rneui/themed";
import PostComments from "./PostComments";

const tabs = [
  {
    for: "like",
    icon: <Icon type="antdesign" name="hearto" size={24} />,
  },
  {
    for: "comment",
    icon: <Icon type="feather" name="message-circle" size={27} />,
  },
  {
    for: "share",
    icon: <Icon type="ionicons" name="share" size={25} />,
  },
];

const PostFooter = ({ post }) => {
  const { dflex, alignCenter, gap16, mx10, justifyBtw } = useStyles();
  return (
    <View>
      <View style={[mx10, dflex, alignCenter, justifyBtw]}>
        <View style={[dflex, alignCenter, gap16]}>
          {tabs.map((item, index) => {
            return <TouchableOpacity key={index}>{item.icon}</TouchableOpacity>;
          })}
        </View>
        <TouchableOpacity>
          <Icon type="feather" name="bookmark" size={26} />
        </TouchableOpacity>
      </View>
      <PostSubFooter post={post} />
    </View>
  );
};

const PostSubFooter = ({ post }) => {
  const { postHeaderText, mx10, flexC, pt6, gap6 } = useStyles();
  return (
    <View style={[mx10, flexC, pt6, gap6]}>
      <View>
        <Text>{"20,548"} Likes </Text>
      </View>
      <View>
        <Text numberOfLines={2}>
          <Text style={[postHeaderText]}>{post?.name} </Text>
          The key to your success on Fiverr is the brand you build for yourself
          through your Fiverr reputation. We gathered some tips and resources to
          help you become a leading seller on Fiverr.
        </Text>
      </View>
    </View>
  );
};

export default PostFooter;
