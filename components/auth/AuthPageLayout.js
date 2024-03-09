import React from "react";
import useStyles from "../../styles/ui.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, View } from "react-native";
import { Text } from "@rneui/themed";
import { useNavigation, useRoute } from "@react-navigation/native";
import Logo from "../Logo";

const AuthPageLayout = ({ children }) => {
  const {
    authLayoutContainer,
    flexC,
    alignCenter,
    justifyCntr,
    authScrollView,
    primary
  } = useStyles();

  const { name } = useRoute();
  const { navigate } = useNavigation();

  const handleRedirect = () => {
    navigate(name === "login" ? "signup" : "login");
  };

  return (
    <ScrollView
      contentContainerStyle={authScrollView}
      showsVerticalScrollIndicator={false}
    >
      <SafeAreaView style={[authLayoutContainer]}>
        <View style={[flexC, alignCenter, justifyCntr]}>
          <Logo/>
        </View>
        <View style={{ marginTop: 70 }}>{children}</View>
        <View style={[{ marginTop: 20 }]}>
          <Text onPress={handleRedirect} style={{ textAlign: "center" }}>
            {name === "login" ? "Don't " : "Already "}
            have an account?
            <Text
              style={primary}
            >
              {name === "login" ? " Sign Up" : " Sign In"}
            </Text>
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default AuthPageLayout;
