import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/homeScreen";
import useStyles from "../styles/ui.styles";
import { Icon, useThemeMode } from "@rneui/themed";
import NewPost from "../screens/newPost";
import PageHeader from "../components/newPost/PageHeader";
import Profile from "../screens/profile";
import Search from "../screens/search";

const Tab = createBottomTabNavigator();

const BottomTabNavigations = () => {
  const { tabarStyles } = useStyles();
  const { mode } = useThemeMode();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: tabarStyles,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                type="feather"
                name="home"
                size={26}
                color={mode === "dark" ? "white" : "black"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                type="feather"
                name="search"
                size={26}
                color={mode === "dark" ? "white" : "black"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Newpost"
        component={NewPost}
        options={{
          tabBarStyle: {
            display: "none",
          },
          headerShown:false,
          // header: (props) => <PageHeader {...props} />,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                type="fontawsome6"
                name="add"
                size={34}
                color={mode === "dark" ? "white" : "black"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Reels"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                type="feather"
                name="video"
                size={26}
                color={mode === "dark" ? "white" : "black"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                type="octicons"
                name="person"
                size={30}
                color={mode === "dark" ? "white" : "black"}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigations;
