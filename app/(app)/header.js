import React from "react";
import { Platform, Text, View } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import blurHash from "../../utils/common";
import { Image } from "expo-image";
import { useAuth } from "../../context/authContext";
import {
    Menu,
    MenuOption,
    MenuOptions,
    MenuTrigger,
} from "react-native-popup-menu";
const ios = Platform.OS == "ios";
const Header = () => {
    const { top } = useSafeAreaInsets();
    const { user, logout } = useAuth();

    console.log("🚀 ~ Header ~ user:", user);

    return (
        <View
            style={{ paddingTop: ios ? top : top + 10 }}
            className="flex-row justify-between px-5 bg-indigo-500 pb-6 rounded-b-sm shadow"
        >
            <View>
                <Text
                    style={{ fontSize: heightPercentageToDP(3) }}
                    className="font-medium text-white"
                >
                    Chats
                </Text>
            </View>
            <View>
                <Menu>
                    <MenuTrigger>
                        <Image
                            style={{
                                height: heightPercentageToDP(4.3),
                                aspectRatio: 1,
                                borderRadius: 100,
                            }}
                            source={user?.profileURL}
                            placeholder={blurHash}
                            contentFit="cover"
                            transition={500}
                        />
                    </MenuTrigger>
                    <MenuOptions>
                        <MenuOption
                            onSelect={() => alert(`Your Profile`)}
                            text="Your Profile"
                        />
                        <MenuOption onSelect={() => logout()}>
                            <Text style={{ color: "red" }}>Logout</Text>
                        </MenuOption>
                    </MenuOptions>
                </Menu>
            </View>
        </View>
    );
};

export default Header;
