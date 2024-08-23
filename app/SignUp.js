import {
    AntDesign,
    Entypo,
    FontAwesome5,
    MaterialCommunityIcons,
    Octicons,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import {
    Alert,
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

function SignUp() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("trinhlek4@gmail.com");
    const [password, setPassword] = useState("123456");
    const [avatar, setAvatar] = useState("");
    const [username, setUsername] = useState("");

    const handleRegister = () => {
        if (!(email && password && avatar && username)) {
            Alert.alert("Signup", "Please field all the fields...");
            return;
        }

        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            router.push("Home");
        }, 1500);
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
                        Register
                    </Text>
                    <Image
                        style={{ height: hp(14) }} // Cung cấp width cho Image nếu cần
                        resizeMode="contain"
                        source={require("../assets/images/react-logo.png")}
                    />
                </View>
                <View className="gap-5 w-full">
                    <View
                        style={{ height: hp(7) }}
                        className="flex flex-row gap-4 px-4 bg-neutral-100 justify-center items-center rounded-2xl pb-4"
                    >
                        <FontAwesome5 name="user-alt" color="black" />
                        <TextInput
                            onChangeText={(value) => setUsername(value)}
                            style={{ fontSize: hp(2) }}
                            placeholder="Enter your username..."
                            className="flex-1 font-semibold text-neutral-500"
                            placeholderTextColor={"gray"}
                            value={username}
                        ></TextInput>
                    </View>

                    <View
                        style={{ height: hp(7) }}
                        className="flex flex-row gap-4 px-4 bg-neutral-100 justify-center items-center rounded-2xl pb-4"
                    >
                        <MaterialCommunityIcons
                            name="file-image-plus-outline"
                            color="black"
                        />
                        <TextInput
                            onChangeText={(value) => setAvatar(value)}
                            style={{ fontSize: hp(2) }}
                            placeholder="Enter your avatar..."
                            className="flex-1 font-semibold text-neutral-500"
                            placeholderTextColor={"gray"}
                            value={avatar}
                        ></TextInput>
                    </View>
                    <View
                        style={{ height: hp(7) }}
                        className="flex flex-row gap-4 px-4 bg-neutral-100 justify-center items-center rounded-2xl pb-4"
                    >
                        <Octicons name="mail" size={hp(2)} color="gray" />
                        <TextInput
                            onChangeText={(value) => setEmail(value)}
                            style={{ fontSize: hp(2) }}
                            placeholder="Enter your email..."
                            className="flex-1 font-semibold text-neutral-500"
                            placeholderTextColor={"gray"}
                            value={email}
                        ></TextInput>
                    </View>

                    <View
                        style={{ height: hp(7) }}
                        className="flex flex-row gap-4 px-4 bg-neutral-100 justify-center items-center rounded-2xl pb-4"
                    >
                        <Octicons name="lock" size={hp(2)} color="gray" />
                        <TextInput
                            onChangeText={(value) => setAvatar(value)}
                            style={{ fontSize: hp(2) }}
                            placeholder="Enter your password..."
                            className="flex-1 font-semibold text-neutral-500"
                            placeholderTextColor={"gray"}
                            secureTextEntry={true}
                            value={avatar}
                        ></TextInput>
                    </View>

                    <Text className="text-lg text-red-600 font-bold text-right">
                        Forgot your password ?
                    </Text>
                    <TouchableOpacity
                        style={{ height: hp(6.5) }}
                        className="bg-indigo-500 rounded-2xl justify-center items-center"
                        onPress={handleRegister}
                    >
                        <Text className="text-3xl text-white font-bold">
                            Submit
                        </Text>
                    </TouchableOpacity>
                    <View className="gap-9">
                        <Text className="  font-semibold text-center">
                            You already an account ?{" "}
                            <Text
                                className="text-blue-600"
                                onPress={() => router.push("SignIn")}
                            >
                                Sign In Now
                            </Text>
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default SignUp;
