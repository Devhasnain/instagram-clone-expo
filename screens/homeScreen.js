import React from "react";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Posts from "../components/home/Posts";
import { ScrollView } from "react-native";
import Layout from "../components/Layout";
import { Divider } from "@rneui/themed";
import useStyles from "../styles/ui.styles";
const HomeScreen = () => {
  const { dividerColor } = useStyles();
  return (
    <Layout>
      <ScrollView
        contentContainerStyle={[{ gap: 10 }]}
        showsVerticalScrollIndicator={false}
        bounces
      >
        <Header />
        <Stories />
        <Divider
          width={1}
          style={[
            dividerColor,
            {
              opacity: 0.3,
            },
          ]}
          orientation="vertical"
        />
        <Posts />
      </ScrollView>
    </Layout>
  );
};

export default HomeScreen;
