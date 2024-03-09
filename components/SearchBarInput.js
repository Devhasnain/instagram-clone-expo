import { View } from "react-native";
import React from "react";
import useStyles from "../styles/ui.styles";
import { Icon, SearchBar, useThemeMode } from "@rneui/themed";

const SearchBarInput = ({state, setState}) => {
  const { py5, searchBar,searchBarText ,p0, bgTransparent, borderTransparent } = useStyles();
  const { mode } = useThemeMode();
  const handleChange = (e) => {
    setState(e);
  };

  return (
    <View style={[py5]}>
      <SearchBar
        value={state}
        onChangeText={handleChange}
        inputContainerStyle={[
          searchBar,
          { borderRadius: 10, paddingHorizontal: 7 },
        ]}
        style={searchBarText}
        containerStyle={[p0, bgTransparent, borderTransparent]}
        searchIcon={
          <Icon
            type="feather"
            name="search"
            size={20}
            color={mode === "dark" ? "white" : "black"}
          />
        }
        placeholder="Search"
        placeholderTextColor={mode === "dark" ? "white" : "black"}
      />
    </View>
  );
};

export default SearchBarInput;
