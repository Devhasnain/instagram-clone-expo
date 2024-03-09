import { Image, ScrollView, View } from "react-native";
import React from "react";
import { Button, Divider, Input, Text } from "@rneui/themed";
import useStyles from "../styles/ui.styles";
import { Picker } from "@react-native-picker/picker";

const inputs = [
  {
    type: "text",
    title: "Name",
    name: "name",
  },
  {
    type: "text",
    title: "Username",
    name: "username",
  },
  {
    type: "text",
    title: "Bio",
    name: "bio",
  },
  {
    type: "text",
    title: "Number",
    name: "number",
  },
];

const EditProfile = () => {
  const {
    flex1,
    themebg,
    px10,
    h_full,
    w_full,
    profileImage,
    alignCenter,
    justifyCntr,
    flexC,
    py5,
    picker,
    pickerIcon,
    dividerColor,
  } = useStyles();

  return (
    <View style={[flex1, themebg, px10]}>
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
      <View style={[flexC, justifyCntr, alignCenter, py5]}>
        <View style={[profileImage]}>
          <Image
            alt=""
            source={require("../assets/images/user.jpg")}
            style={[h_full, w_full]}
          />
        </View>
      </View>
      <View>
        {inputs.map((item, index) => (
          <View key={index}>
            <Input
              label={() => <Text>{item.title}</Text>}
              inputMode={item.type}
              placeholder={item.name}
            />
          </View>
        ))}
        <View></View>
      </View>
      <View style={[px10]}>
        <Text>Gender</Text>
        <Picker
          style={[picker]}
          placeholder="Gender"
          dropdownIconColor={pickerIcon.color}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
        <Divider width={1} style={[dividerColor]} orientation="vertical" />
      </View>
      <View style={[px10, { paddingVertical: 40 }]}>
        <Button title={"Update"} />
      </View>
      </ScrollView>

    </View>
  );
};

export default EditProfile;
