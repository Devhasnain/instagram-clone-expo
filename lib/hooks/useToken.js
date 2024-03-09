import AsyncStorage from "@react-native-async-storage/async-storage";

const useToken = async () =>{
    let token = await AsyncStorage.getItem("token");
    return token
};
export default useToken;