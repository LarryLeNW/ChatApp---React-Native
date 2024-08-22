import { Image, StatusBar, Text, View } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function SignIn() {
    return (
        <View className="flex-1">
            <StatusBar style="dark" />
            <View className="flex-1 gap-12" style={{ padding: hp(2) }}>
                <View className="items-center animate-spin">
                    <Image
                        style={{ height: hp(25) }}
                        resizeMode="contain"
                        source={require("../assets/images/react-logo.png")}
                    />
                </View>
            </View>
        </View>
    );
}

export default SignIn;
