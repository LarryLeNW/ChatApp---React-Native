import { AntDesign, Entypo, Octicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import {
    Image,
    StatusBar,
    Text,
    TextInput,
    Touchable,
    TouchableOpacity,
    View,
} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Loading from "../components/Loading";

function SignIn() {
    const router = useRouter();
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            router.push("Home");
        }, 1500);
        console.log("🚀 ~ SignIn ~ emailRef:", emailRef.value);
        console.log("🚀 ~ SignIn ~ passwordRef:", passwordRef.value);
    };

    return isLoading ? (
        <Loading />
    ) : (
        <View style={{ flex: 1 }}>
            <StatusBar style="dark" />
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 5,
                    }}
                >
                    <Text
                        className="text-blue-600"
                        style={{ fontSize: hp(3), fontWeight: "bold" }}
                    >
                        Sign In
                    </Text>
                    <Image
                        style={{ height: hp(14) }} // Cung cấp width cho Image nếu cần
                        resizeMode="contain"
                        source={require("../assets/images/react-logo.png")}
                    />
                </View>
                <View className="gap-10 w-full">
                    <View
                        style={{ height: hp(7) }}
                        className="flex flex-row gap-4 px-4 bg-neutral-100 justify-center items-center rounded-2xl"
                    >
                        <Octicons name="mail" size={hp(2)} color="gray" />
                        <TextInput
                            onChangeText={(value) => (emailRef.current = value)}
                            style={{ fontSize: hp(2) }}
                            placeholder="Enter your email..."
                            className="flex-1 font-semibold text-neutral-500"
                            placeholderTextColor={"gray"}
                        ></TextInput>
                    </View>
                    <View
                        style={{ height: hp(7) }}
                        className="flex flex-row gap-4 px-4 bg-neutral-100 justify-center items-center rounded-2xl"
                    >
                        <Octicons name="lock" size={hp(2)} color="gray" />
                        <TextInput
                            onChangeText={(value) =>
                                (passwordRef.current = value)
                            }
                            style={{ fontSize: hp(2) }}
                            placeholder="Enter your password..."
                            className="flex-1 font-semibold text-neutral-500"
                            placeholderTextColor={"gray"}
                            secureTextEntry={true}
                        ></TextInput>
                    </View>
                    <Text className="text-lg text-red-600 font-bold text-right">
                        Forgot your password ?
                    </Text>
                    <TouchableOpacity
                        style={{ height: hp(6.5) }}
                        className="bg-indigo-500 rounded-2xl justify-center items-center"
                        onPress={handleLogin}
                    >
                        <Text className="text-3xl text-white font-bold">
                            Submit
                        </Text>
                    </TouchableOpacity>
                    <View className="gap-9">
                        <Text className="  font-semibold text-center">
                            Don't have an account?{" "}
                            <Text className="text-orange-600"> Sign Up</Text>
                        </Text>
                        <View className="flex-row justify-around items-center ">
                            <View className="p-2 rounded-full border-2 border-orange-500">
                                <AntDesign
                                    name="google"
                                    size={40}
                                    color="orange"
                                />
                            </View>
                            <View className="p-2  rounded-full border-2 border-blue-500">
                                <Entypo
                                    name="facebook-with-circle"
                                    color={"blue"}
                                    size={40}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default SignIn;
