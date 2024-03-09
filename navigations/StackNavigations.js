import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigations from "./BottomTabNavigations";
import Login from "../screens/auth/login";
import SignUp from "../screens/auth/signUp";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import LoadingScreen from "../components/LoadingScreen";
import useRefreshToken from "../lib/auth/hooks/useRefreshToken";
import { setToken, setUser } from "../lib/redux/reducers/authSlice";
import Settings from "../screens/settings";
import useStyles from "../styles/ui.styles";
import EditProfile from "../screens/editProfile";
import Friends from "../screens/friends";
import { StatusBar } from "expo-status-bar";
import { useThemeMode } from "@rneui/themed";
import Notifications from "../screens/notifications";

const Stack = createNativeStackNavigator();

const StackNavigations = () => {
  const { isLoggedIn, user, token } = useSelector((state) => state.authSlice);

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { customHeader, customHeaderTitle } = useStyles();
  const { mode } = useThemeMode();

  // useEffect(() => {
  //   const gettoken = async () => {
  //     setLoading(true);
  //     try {
  //       const t = await AsyncStorage.getItem("token");
  //       if (!t) {
  //         throw new Error("Authentication Failed");
  //       }
  //       const res = await useRefreshToken(t);
  //       if (res.status === 200) {
  //         dispatch(setUser(res.data));
  //         dispatch(setToken(t));
  //       }
  //       setLoading(false);
  //     } catch (error) {
  //       setLoading(false);
  //       await AsyncStorage.removeItem("token");
  //     }
  //   };
  //   gettoken();
  // }, [token]);

  return (
    <>
      <StatusBar
        style={mode === "dark" ? "light" : "dark"}
        backgroundColor={mode === "dark" ? "black" : "white"}
      />
      {loading ? (
        <LoadingScreen />
      ) : (
        <NavigationContainer>
          <Stack.Navigator>
            {isLoggedIn && user ? (
              <>
                <Stack.Screen
                  name="main"
                  component={BottomTabNavigations}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="settings"
                  component={Settings}
                  options={{
                    headerStyle: customHeader,
                    headerTitleStyle: customHeaderTitle,
                    headerShadowVisible: false,
                    title: "Settings and Activity",
                    headerShown: true,
                    headerTintColor: customHeaderTitle.color,
                    headerBackTitleStyle: customHeaderTitle,
                  }}
                />
                <Stack.Screen
                  name="editprofile"
                  
                  component={EditProfile}
                  options={{
                    headerStyle: customHeader,
                    headerShadowVisible: false,
                    headerTitleStyle: customHeaderTitle,
                    title: "Edit Profile",
                    headerShown: true,
                    headerTintColor: customHeaderTitle.color,
                    headerBackTitleStyle: customHeaderTitle,
                  }}
                />

                <Stack.Screen
                  name="friends"
                  component={Friends}
                  options={{
                    headerStyle: customHeader,
                    headerTitleStyle: customHeaderTitle,
                    headerShadowVisible: false,
                    title: user?.username ?? "Unknown",
                    headerShown: true,
                    headerTintColor: customHeaderTitle.color,
                    headerBackTitleStyle: customHeaderTitle,
                  }}
                />

                <Stack.Screen
                  name="notifications"
                  component={Notifications}
                  options={{
                    headerStyle: customHeader,
                    headerTitleStyle: customHeaderTitle,
                    title: "Notifications",
                    headerShadowVisible: false,
                    headerShown: true,
                    headerTintColor: customHeaderTitle.color,
                    headerBackTitleStyle: customHeaderTitle,
                  }}
                />
              </>
            ) : (
              <>
                <Stack.Screen
                  name="login"
                  component={Login}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="signup"
                  component={SignUp}
                  options={{
                    headerShown: false,
                  }}
                />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

export default StackNavigations;
