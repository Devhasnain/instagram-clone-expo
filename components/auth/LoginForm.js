import { Alert, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Button, Text } from "@rneui/themed";
import { Formik } from "formik";
import useStyles from "../../styles/ui.styles";
import { useNavigation } from "@react-navigation/native";
import { useSign } from "../../lib/auth/hooks/useCreateSession";
import { useDispatch } from "react-redux";
import { setToken } from "../../lib/redux/reducers/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginForm = () => {
  const {
    Input,
    newPostCaptionInputPlaceholder,
    flexC,
    gap16,
    forgotPassword,
    disabledButton,
  } = useStyles();

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (data) => {
    setLoading(true);
    const { email, password } = data;
    try {
      const res = await useSign(email, password);
      const { success, token } = res.data;
      if (token && success) {
        dispatch(setToken(token));
        await AsyncStorage.setItem("token", token);
        setLoading(false);
        Alert.alert("Login successful");
      } else {
        throw new Error("Unexpected Error occured while Login.");
      }
    } catch (error) {
      setLoading(false);
      Alert.alert(error?.response?.data?.msg ?? error?.message);
    }
  };

  const { navigate } = useNavigation();

  const handleForgetPassword = () => {};

  return (
    <View style={[flexC, gap16]}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <React.Fragment>
            <View>
              <TextInput
                style={[Input]}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                placeholder="Enter Emailaddress"
                placeholderTextColor={newPostCaptionInputPlaceholder.color}
                value={values.email}
              />
            </View>
            <View>
              <TextInput
                style={[Input]}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                inputMode="text"
                secureTextEntry
                placeholder="Enter password"
                placeholderTextColor={newPostCaptionInputPlaceholder.color}
                value={values.password}
              />
              <TouchableOpacity onPress={handleForgetPassword}>
                <Text style={forgotPassword}>Forget Password</Text>
              </TouchableOpacity>
            </View>

            <View>
              <Button
                disabledStyle={disabledButton}
                disabled={loading}
                onPress={handleSubmit}
                title={"Login"}
                size="lg"
              />
            </View>
          </React.Fragment>
        )}
      </Formik>
    </View>
  );
};

export default LoginForm;
