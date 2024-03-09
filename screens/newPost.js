import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import useStyles from "../styles/ui.styles";
import { Button, Icon, Tab, Text } from "@rneui/themed";
// import * as ImagePicker from "expo-image-picker";
import { ImagePicker } from "expo-image-multiple-picker";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/native";
import Carousel from "react-native-reanimated-carousel";

const width = Dimensions.get('window').width;

const postTypesArr = [
  {
    title: "Post",
    post: "post",
    multiple: true,
    noAlbums: true,
    galleryColumns: 4,
    limit: 5,
    image: true,
    // video: false,
  },
  {
    title: "Reel",
    post: "reel",
    multiple: false,
    noAlbums: true,
    galleryColumns: 4,
    limit: 1,
    // image: false,
    video: true,
  },
  {
    title: "Story",
    post: "story",
    multiple: true,
    noAlbums: true,
    galleryColumns: 4,
    limit: 5,
    image: true,
    // video: false,
  },
];

const NewPost = () => {
  const {
    newPostPageContainer,
    newPostImageContainer,
    newPostImage,
    relative,
    newPostImageRemoveIcon,
    newPostCaptionInput,
    mx10,
    flexC,
    gap16,
    imageError,
    newPostCaptionInputPlaceholder,
    flex1,
    themebg,
    imageSelecterHeader,
    primary,
  } = useStyles();

  const { goBack } = useNavigation();
  const [image, setImage] = useState(null);
  const [imageErr, setImageErr] = useState(null);
  const [postType, setPostType] = useState(postTypesArr);
  const [activeTab, setActiveTab] = useState(0);
  const [activePostType, setActivePostType] = useState(postTypesArr[0]);
  const [rerender, setRerender] = useState(false);
  const [files, setFiles] = useState([]);
  const [step, setStep] = useState(0);

  const initialValues = {
    caption: "",
  };

  // const handleImagePicker = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //     allowsEditing: false,
  //     aspect: [4, 3],
  //     quality: 1,
  //     selectionLimit: 5,
  //   });

  //   if (!result.canceled) {
  //     setImage(result.assets[0].uri);
  //   }
  // };

  // useEffect(()=>{
  //   let lunchGallery= async ()=>{
  //     let result = await ImagePicker.launchImageLibraryAsync({
  //       mediaTypes: ImagePicker.MediaTypeOptions.All,
  //       allowsEditing: false,
  //       aspect: [4, 3],
  //       quality: 1,
  //       selectionLimit: 5,
  //     });

  //     console.log(result)
  //     if (!result.canceled) {
  //       setImage(result.assets[0].uri);
  //     }
  //   }
  //   lunchGallery();
  // },[]);

  const removeImage = () => {
    setImage(null);
  };

  const onSubmit = async (data) => {
    if (!image) {
      setImageErr("Image is required!.");
      return;
    }
    try {
      console.log(data);
    } catch (error) {}
  };

  return (
    <React.Fragment>
      {step === 0 && (
        <View style={{ flex: 1, position: "relative" }}>
          <ImagePicker
            theme={{
              header: WhatsAppHeader,
            }}
            key={rerender}
            onSave={(assets) => {
              setFiles(assets);
              setStep(1);
            }}
            onCancel={() => goBack()}
            {...activePostType}
          />
          <View
            style={{
              position: "absolute",
              backgroundColor: "transparent",
              width: "100%",
              bottom: 15,
              left: 0,
              zIndex: 20,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "black",
                opacity: 0.6,
                width: "90%",
                alignSelf: "center",
                borderRadius: 50,
                paddingHorizontal: 20,
                paddingBottom: 8,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <Tab
                indicatorStyle={{ backgroundColor: "white", margin: "auto" }}
                value={activeTab}
                onChange={(e) => {
                  setActiveTab(e);
                  setActivePostType(postTypesArr[e]);
                  setRerender(false);
                }}
              >
                {postType.map((item, index) => {
                  return (
                    <Tab.Item key={index}>
                      <Text h4 h4Style={{ fontSize: 19, color: "white" }}>
                        {item.title}
                      </Text>
                    </Tab.Item>
                  );
                })}
              </Tab>
            </View>
          </View>
        </View>
      )}
      {step === 1 && (
        <View style={[flex1, themebg]}>
          <View style={imageSelecterHeader}>
            <TouchableOpacity
              onPress={() => {
                setStep(0);
              }}
            >
              <Icon name="arrow-back" size={25} color="#EDF8F5" />
            </TouchableOpacity>

            <Text style={{ color: "white", fontSize: 20 }}>
              Write a Caption
            </Text>

            <TouchableOpacity>
              <Text style={[primary, { fontSize: 16 }]}>Next</Text>
            </TouchableOpacity>
            {/* {props.view == "gallery" && (
              <>
                <TouchableOpacity
                  onPress={() => {
                    goBack();
                  }}
                >
                  <Icon name="arrow-back" size={25} color="#EDF8F5" />
                </TouchableOpacity>
                {props.imagesPicked > 0 && (
                  <>
                    <Text>{props.imagesPicked} Selected</Text>
                    <TouchableOpacity onPress={props.save}>
                      <Text style={[primary, { fontSize: 16 }]}>Next</Text>
                    </TouchableOpacity>
                  </>
                )}
              </>
            )} */}
          </View>
          <Carousel
            loop
            width={width}
            height={width / 2}
            autoPlay={true}
            data={[...new Array(6).keys()]}
            scrollAnimationDuration={1000}
            onSnapToItem={(index) => console.log("current index:", index)}
            renderItem={({ index }) => (
              <View
                style={{
                  flex: 1,
                  borderWidth: 1,
                  justifyContent: "center",
                }}
              >
                <Text style={{ textAlign: "center", fontSize: 30 }}>
                  {index}
                </Text>
              </View>
            )}
          />
        </View>
      )}
    </React.Fragment>
  );
};

const WhatsAppHeader = (props) => {
  const { imageSelecterHeader, primary } = useStyles();
  const { goBack } = useNavigation();
  return (
    <View style={imageSelecterHeader}>
      {props.view == "album" && (
        <Text style={{ color: "white", fontSize: 20 }}>Select an album</Text>
      )}
      {props.view == "gallery" && (
        <>
          <TouchableOpacity
            onPress={() => {
              goBack();
            }}
          >
            <Icon name="arrow-back" size={25} color="#EDF8F5" />
          </TouchableOpacity>
          {props.imagesPicked > 0 && (
            <>
              <Text>{props.imagesPicked} Selected</Text>
              <TouchableOpacity onPress={props.save}>
                <Text style={[primary, { fontSize: 16 }]}>Next</Text>
              </TouchableOpacity>
            </>
          )}
        </>
      )}
    </View>
  );
};

export default NewPost;
