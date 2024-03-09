import { ScrollView } from "react-native";
import React, { useState } from "react";
import useStyles from "../styles/ui.styles";
import SearchBarInput from "../components/SearchBarInput";
import { SafeAreaView } from "react-native-safe-area-context";

const Search = () => {
  const { flex1, themebg, px10, py10 } = useStyles();
  const [searchText, setSearchText] = useState("");
  return (
    <SafeAreaView style={[flex1, themebg, px10]}>
      <ScrollView showsVerticalScrollIndicator={false} bounces contentContainerStyle={[py10]}>
        <SearchBarInput state={searchText} setState={setSearchText} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
