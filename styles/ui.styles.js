import { makeStyles } from "@rneui/themed";

const styles = makeStyles((theme) => ({
  conatinerHome: {
    backgroundColor: theme.colors.background,
    flex: 1,
  },
  dflex: {
    display: "flex",
    flexDirection: "row",
  },
  flexC: {
    display: "flex",
    flexDirection: "column",
  },
  h_full: {
    height: "100%",
  },
  w_full: {
    width: "100%",
  },
  homeLogo: {
    width: 120,
    aspectRatio: 2 / 0.7,
  },
  alignCenter: {
    alignItems: "center",
  },
  alignStart: {
    alignItems: "flex-start",
  },
  justifyBtw: {
    justifyContent: "space-between",
  },
  justifyCntr: {
    justifyContent: "center",
  },
  justifyArund: {
    justifyContent: "space-around",
  },
  justifyEven: {
    justifyContent: "space-evenly",
  },
  spaceX2: {
    columnGap: 2,
  },
  spaceX4: {
    columnGap: 4,
  },
  spaceX6: {
    columnGap: 6,
  },
  spaceX8: {
    columnGap: 8,
  },
  spaceX10: {
    columnGap: 10,
  },
  mx10: {
    marginHorizontal: 10,
  },
  gap4: {
    gap: 4,
  },
  gap6: {
    gap: 6,
  },
  gap8: {
    gap: 8,
  },
  gap10: {
    gap: 10,
  },
  gap12: {
    gap: 12,
  },
  gap14: {
    gap: 14,
  },
  gap16: {
    gap: 16,
  },
  gap25: {
    gap: 26,
  },
  px10: {
    paddingHorizontal: 10,
  },
  px12: {
    paddingHorizontal: 12,
  },
  px14: {
    paddingHorizontal: 14,
  },
  messageBadge: {
    position: "absolute",
    top: -6,
    right: -6,
    backgroundColor: "red",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    height: 20,
    width: 20,
    padding: 1,
    justifyContent: "center",
    zIndex: 10,
  },
  messageBadgeText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
  storyImageContainer: {
    aspectRatio: 1,
    width: 73,
    borderRadius: 50,
    overflow: "hidden",
  },
  postAvatarContainer: {
    aspectRatio: 1,
    borderRadius: 50,
    borderColor: theme.colors.grey4,
    borderWidth: 1,
    overflow: "hidden",
  },
  storyText: {
    fontWeight: "600",
  },
  py2: {
    paddingVertical: 4,
  },
  py5: {
    paddingVertical: 5,
  },
  py10: {
    paddingVertical: 10,
  },
  my10: {
    marginVertical: 10,
  },
  pb12: {
    paddingBottom: 12,
  },
  pt5: {
    paddingTop: 5,
  },
  pt6: {
    paddingTop: 6,
  },
  pt7: {
    paddingTop: 7,
  },
  postImageContainer: {
    width: "100%",
    height: 450,
  },
  postImage: {
    height: "100%",
    resizeMode: "cover",
  },
  postHeaderText: {
    fontWeight: "700",
    fontSize: 15.5,
  },
  my12: {
    marginVertical: 12,
  },
  textGray: {
    color: "gray",
  },
  tabarStyles: {
    backgroundColor: theme.colors.background,
    height: 50,
    borderTopColor: theme.colors.grey4,
  },
  newPostPageHeader: {
    backgroundColor: theme.colors.background,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 12,
  },
  newPostPageHeaderTitle: {
    fontSize: 20,
    fontWeight: "700",
  },
  newPostPageContainer: {
    backgroundColor: theme.colors.background,
    flex: 1,
    paddingTop: 15,
  },
  newPostImageContainer: {
    width: "100%",
    height: 300,
    backgroundColor: theme.colors.grey5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  newPostImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  relative: {
    position: "relative",
  },
  absolute: {
    position: "absolute",
  },
  newPostImageRemoveIcon: {
    position: "absolute",
    backgroundColor: theme.colors.grey2,
    padding: 4,
    borderRadius: 50,
    top: 5,
    right: 5,
    opacity: 0.9,
  },
  imageError: {
    fontSize: 12,
    marginHorizontal: 10,
    color: "red",
  },
  newPostCaptionInput: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.grey4,
    paddingVertical: 4,
    fontSize: 17,
    color: theme.colors.grey2,
  },
  newPostCaptionInputPlaceholder: {
    color: theme.colors.grey3,
  },
  authScrollView: {
    height: "100%",
    backgroundColor: theme.colors.background,
  },
  authLayoutContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    backgroundColor: theme.colors.background,
    paddingHorizontal: 20,
  },
  authLogo: {
    height: 70,
    width: 70,
  },
  authLogoImage: {
    backgroundColor: "white",
    overflow: "hidden",
    borderRadius: 19,
    width: "100%",
    height: "100%",
  },
  Input: {
    borderColor: theme.colors.grey3,
    borderRadius: 2,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 8,
    fontSize: 14,
    color: theme.colors.grey2,
  },

  Button: {},
  profileImage: {
    height: 82,
    width: 82,
    borderRadius: 100,
    overflow: "hidden",
  },
  profileName: {
    fontSize: 15,
    fontWeight: "700",
  },
  ProfileAcitonButton: {
    backgroundColor: theme.colors.grey5,
    padding: 10,
    textAlign: "center",
    borderRadius: 10,
  },
  textCenter: {
    textAlign: "center",
  },
  customHeader: {
    backgroundColor: theme.colors.background,
    color: theme.mode === "dark" ? "white" : "black",
  },
  customHeaderTitle: {
    color: theme.mode === "dark" ? "white" : "black",
  },
  flex1: {
    flex: 1,
  },
  themebg: {
    backgroundColor: theme.colors.background,
  },
  searchBar: {
    backgroundColor: theme.colors.grey5,
    padding: 0,
    borderWidth: 0,
    fontSize: 17,
    color: "white",
    width: "100%",
    marginHorizontal: 3,
  },
  searchBarText: {
    color: theme.mode === "dark" ? "white" : "black",
  },
  picker: {
    backgroundColor: theme.colors.background,
    color: theme.mode === "dark" ? "white" : "black",
  },
  pickerIcon: {
    color: theme.colors.grey4,
  },
  dividerColor: {
    backgroundColor: theme.colors.grey5,
    color: theme.colors.grey5,
  },
  tabIndicatorStyle: {
    backgroundColor: theme.mode === "dark" ? "white" : "gray",
    height: 1,
  },
  dialogModel: {
    backgroundColor: theme.colors.searchBg,
    padding: 0,
  },
  storyBadge: {
    position: "absolute",
    bottom: 2,
    right: 2,
    backgroundColor: theme.colors.primary,
    zIndex: 100,
    borderRadius: 50,
  },
  bgTransparent: {
    backgroundColor: "transparent",
  },
  borderTransparent: {
    borderColor: "transparent",
  },
  p0: {
    padding: 0,
  },
  primary: {
    color: theme.colors.primary,
  },
  forgotPassword: {
    textAlign: "right",
    fontSize: 13,
    color: theme.colors.primary,
    paddingTop: 4,
  },
  disabledButton: {
    backgroundColor: theme.colors.grey5,
  },
  imageSelecterHeader: {
    paddingTop: 40,
    padding: 10,
    height: 80,
    width: "100%",
    backgroundColor: theme.colors.background,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

export default styles;
