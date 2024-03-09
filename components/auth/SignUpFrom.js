import { Alert, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Button } from "@rneui/themed";
import { Formik } from "formik";
import useStyles from "../../styles/ui.styles";
import { useDispatch } from "react-redux";
import { useSignUp } from "../../lib/auth/hooks/useCreateSession";
import { setToken } from "../../lib/redux/reducers/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const { Input, newPostCaptionInputPlaceholder, flexC, gap16, disabledButton } = useStyles();
  const [loading, setLoading] = useState(false);
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const onSubmit = async (data) => {
    setLoading(true);
    const { username, email, password } = data;
    try {
      const res = await useSignUp(username, email, password);
      const { success, token } = res.data;
      if (token && success) {
        dispatch(setToken(token));
        await AsyncStorage.setItem("token", token);
        setLoading(false);
        Alert.alert("Sign Up successful");
      } else {
        throw new Error("Unexpected Error occured while Login.");
      }
    } catch (error) {
      setLoading(false);
      Alert.alert(error?.response?.data?.msg ?? error?.message);
    }
  };

  return (
    <View style={[flexC, gap16]}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <React.Fragment>
            <View>
              <TextInput
                style={[Input]}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                placeholder="Enter username"
                value={values.username}
                placeholderTextColor={newPostCaptionInputPlaceholder.color}
              />
            </View>
            <View>
              <TextInput
                style={[Input]}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                inputMode="email"
                value={values.email}
                placeholder="Enter your Emailaddress"
                placeholderTextColor={newPostCaptionInputPlaceholder.color}
              />
            </View>
            <View>
              <TextInput
                style={[Input]}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                inputMode="text"
                value={values.password}
                secureTextEntry
                placeholder="Enter your password"
                placeholderTextColor={newPostCaptionInputPlaceholder.color}
              />
            </View>

            <View>
              <Button
              disabledStyle={disabledButton}
                disabled={loading}
                onPress={handleSubmit}
                title={"Submit"}
                size="lg"
              />
            </View>
          </React.Fragment>
        )}
      </Formik>
    </View>
  );
};

export default SignUpForm;
