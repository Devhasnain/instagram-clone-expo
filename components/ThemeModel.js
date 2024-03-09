import React from "react";
import { CheckBox, Dialog, useThemeMode } from "@rneui/themed";
import useStyles from "../styles/ui.styles";
const ThemeModel = ({ isOpen, setIsOpen }) => {
  const { dialogModel } = useStyles();
  const { setMode, mode } = useThemeMode();
  const toggleTheme = () => {
    setMode(mode === "dark" ? "light" : "dark");
    setIsOpen(!isOpen);
  };
  return (
    <Dialog
      isVisible={isOpen}
      overlayStyle={[dialogModel]}
      onBackdropPress={() => {
        setIsOpen(!isOpen);
      }}
    >
      <CheckBox
        onPress={toggleTheme}
        containerStyle={{ backgroundColor: "transparent" }}
        title={"Dark Mode"}
        textStyle={{
          color: "black",
        }}
        checked={mode === "dark"}
      />
      <CheckBox
        containerStyle={{ backgroundColor: "transparent" }}
        title={"Light Mode"}
        textStyle={{
          color: "black",
        }}
        onPress={toggleTheme}
        checked={mode === "light"}
      />
    </Dialog>
  );
};

export default ThemeModel;
