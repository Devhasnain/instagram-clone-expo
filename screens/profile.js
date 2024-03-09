import React from "react";
import Layout from "../components/Layout";
import Header from "../components/profile/Header";
import Details from "../components/profile/Details";
import { useSelector } from "react-redux";
import ActionButtons from "../components/profile/ActionButtons";
import { ScrollView } from "react-native";
import Tabs from "../components/profile/Tabs";

const Profile = () => {
  const { user } = useSelector((state) => state.authSlice);
  return (
    <Layout>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 5 }}
      >
        <Header />
        <Details user={user} />
        <ActionButtons user={user} />
        <Tabs />
      </ScrollView>
    </Layout>
  );
};

export default Profile;
