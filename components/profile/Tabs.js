import { View } from "react-native";
import React, { useState } from "react";
import { Icon, Tab } from "@rneui/themed";
import useStyles from "../../styles/ui.styles";
import Posts from "./Posts";

const Tabs = () => {
  const [index, setIndex] = useState(0);
  const { tabIndicatorStyle, flex1 } = useStyles();
  return (
    <View style={[flex1, { padding: 0 }]}>
      <Tab
        value={index}
        indicatorStyle={tabIndicatorStyle}
        onChange={(e) => setIndex(e)}
      >
        <Tab.Item
          icon={<Icon type="materialicons" name="grid-on" size={26} />}
        ></Tab.Item>
        <Tab.Item
          icon={<Icon type="materialicons" name="video-collection" size={26} />}
        ></Tab.Item>
      </Tab>
      {index === 0 && <Posts />}
      {index === 1 && <Posts />}
    </View>
  );
};

export default Tabs;
