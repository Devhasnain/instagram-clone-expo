import { TouchableOpacity, View } from "react-native";
import React from "react";
import { Icon, Text } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import useStyle from "../../styles/ui.styles";

const PageHeader = ({ navigation, title }) => {
  const { newPostPageHeader, newPostPageHeaderTitle } = useStyle();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={[newPostPageHeader]}>
      <TouchableOpacity onPress={goBack}>
        <Icon type="antdesign" name="arrowleft" size={26} />
      </TouchableOpacity>
      <Text style={[newPostPageHeaderTitle]}>Create New Post</Text>
      <View style={{ width: 30 }} />
    </SafeAreaView>
  );
};

export default PageHeader;
