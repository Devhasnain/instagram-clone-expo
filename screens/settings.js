import { ScrollView, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import useStyles from "../styles/ui.styles";
import { Button, Divider, Icon, Text } from "@rneui/themed";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { logOutUser } from "../lib/redux/reducers/authSlice";
import ThemeModel from "../components/ThemeModel";
import SearchBarInput from "../components/SearchBarInput";

const tabs = [
  {
    title: "Account Center",
    for: ["Password", "Security", "Personal Details"],
    icon: <Icon type="ionicons" name="person" size={28} />,
  },
  {
    title: "Notifications",
    for: [],
    icon: <Icon type="materialicons" name="notifications-none" size={28} />,
  },
  {
    title: "Saved",
    for: [],
    icon: (
      <Icon
        type="feather"
        name="bookmark"
        style={{ paddingHorizontal: 2 }}
        size={25}
      />
    ),
  },
  {
    title: "Appearance",
    for: [],
    icon: (
      <Icon
        type="entypo"
        name="light-up"
        style={{ paddingHorizontal: 3.5 }}
        size={22}
      />
    ),
  },
];

const Settings = () => {
  const {
    flex1,
    themebg,
    px10,
    dflex,
    alignCenter,
    justifyBtw,
    gap10,
    pt7,
    flexC,
    gap12,
  } = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");
    dispatch(logOutUser());
  };

  return (
    <View style={[flex1, themebg, px10]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBarInput state={searchText} setState={setSearchText} />
        <View style={[pt7, flexC, gap12]}>
          {tabs.map((item, index) => (
            <React.Fragment key={index}>
              <TouchableOpacity
                style={[dflex, alignCenter, justifyBtw, { padding: 5 }]}
                key={index}
                onPress={() => {
                  if (item.title === "Appearance") {
                    setIsOpen(!isOpen);
                  }
                }}
              >
                <View style={[dflex, alignCenter, gap10]}>
                  {item.icon}
                  <Text>{item.title}</Text>
                </View>
                <View>
                  <Icon type="antdesign" name="arrowright" size={20} />
                </View>
                <ThemeModel isOpen={isOpen} setIsOpen={setIsOpen} />
              </TouchableOpacity>
            </React.Fragment>
          ))}
          <View style={[pt7, px10]}>
            <Divider width={1} orientation="vertical" />
            <View style={[{ paddingVertical: 30 }, flexC, gap12]}>
              <Button title={"Logout"} onPress={handleLogout} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Settings;
