import { View } from "react-native";
import React from "react";
import useStyles from "../../styles/ui.styles";
import { Text } from "@rneui/themed";

const PostComments = ({ post }) => {
  const { mx10, textGray, postHeaderText } = useStyles();
  return (
    <View style={[mx10]}>
      <View>
        <Text style={[textGray]}>View all comments</Text>
      </View>
      <View>
        <Text numberOfLines={1}>
          <Text style={[postHeaderText]}>{post?.name} </Text>
          The key to your success on Fiverr is the brand you build for yourself
          through your Fiverr reputation. We gathered some tips and resources to
          help you become a leading seller on Fiverr.
        </Text>
      </View>
    </View>
  );
};

export default PostComments;
