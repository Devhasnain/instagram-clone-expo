import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import useStyles from "../styles/ui.styles";
const Layout = ({ children }) => {
    const {conatinerHome} = useStyles();
  return <SafeAreaView style={[conatinerHome]} >{children}</SafeAreaView>;
};

export default Layout;
