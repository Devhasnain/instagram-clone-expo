import { View, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import useStyles from "../styles/ui.styles";
import { Button, Text } from "@rneui/themed";
import AvatarImage from "./AvatarImage";
import posts from "../assets/data/users.json";

const Followers = () => {
  const { dflex, alignCenter, justifyBtw, px10, gap10 } = useStyles();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[px10, { gap: 12, paddingVertical: 25 }]}
    >
      <View style={[{ paddingBottom: 10 }]}>
        <Text h4 h4Style={{ fontSize: 18 }}>
          All Followers
        </Text>
      </View>

      {posts.map((item, index) => {
        return (
          <View key={index} style={[dflex, alignCenter, justifyBtw]}>
            <View style={[dflex, alignCenter, gap10]}>
              <AvatarImage isStory={false} width={53} url={item.image} />
              <View>
                <Text style={{ fontSize: 13 }}>{item.firstName}</Text>
                <Text style={{ fontSize: 16, color: "gray" }}>
                  {item.username}
                </Text>
              </View>
              <TouchableOpacity>
                <Text>Follow</Text>
              </TouchableOpacity>
            </View>

            <View>
              <Button
                color={"gray"}
                radius={10}
                title={"Remove"}
                type="solid"
                titleStyle={{ fontSize: 14.5 }}
                size="md"
              />
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Followers;
