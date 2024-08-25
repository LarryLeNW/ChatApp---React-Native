import LottieView from "lottie-react-native";
import React from "react";
import { View } from "react-native";

const Loading = () => {
    return (
        <View
            style={{ height: "100%" }}
            className="flex justify-center items-center"
        >
            <LottieView
                className="w-2/3 h-2/3 "
                source={require("../assets/loading.json")}
                autoPlay
                loop
            />
        </View>
    );
};

export default Loading;
