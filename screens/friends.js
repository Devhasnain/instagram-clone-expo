import { View } from "react-native";
import React, { useState } from "react";
import useStyles from "../styles/ui.styles";
import { Tab, Text } from "@rneui/themed";
import Followers from "../components/Followers";

const Friends = () => {
  const { flex1, themebg, tabIndicatorStyle, px10 } = useStyles();
  const [index, setIndex] = useState(0);

  return (
    <View style={[flex1, themebg]}>
      <Tab
        value={index}
        indicatorStyle={tabIndicatorStyle}
        onChange={(e) => setIndex(e)}
      >
        <Tab.Item>
          <Text>113 followers</Text>
        </Tab.Item>
        <Tab.Item>
          <Text>113 following</Text>
        </Tab.Item>
      </Tab>
      {index === 0 && <Followers />}
    </View>
  );
};

export default Friends;
