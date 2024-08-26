import { Feather } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";

const ChatRoom = () => {
    const item = useLocalSearchParams();
    const router = useRouter();

    return (
        <View>
            <Header infoConnect={item} router={router} />
            <Text>ChatRoom with {item.username}</Text>
            <Footer />
        </View>
    );
};

const Header = ({ infoConnect, router }) => {
    return (
        <Stack.Screen
            options={{
                title: "",
                headerShadowVisible: false,
                headerLeft: () => (
                    <View className=" flex-row items-center gap-1 px-4 py-2">
                        <TouchableOpacity onPress={() => router.back()}>
                            <Feather
                                name="arrow-left"
                                size={heightPercentageToDP(4)}
                                color="gray"
                            />
                        </TouchableOpacity>
                        <View className=" flex-row items-center gap-4 ">
                            <Image
                                style={{
                                    height: heightPercentageToDP(6),
                                    aspectRatio: 1,
                                    borderRadius: 100,
                                }}
                                className="border border-blue-400"
                                source={infoConnect?.profileURL}
                                contentFit="cover"
                                transition={500}
                            />
                            <Text className="text-lg font-bold ">
                                {infoConnect.username}
                            </Text>
                        </View>
                    </View>
                ),
                headerRight: () => {
                    return (
                        <View className="flex-row gap-6 items-center ">
                            <TouchableOpacity>
                                <Feather
                                    name="phone-call"
                                    size={heightPercentageToDP(3)}
                                    color="gray"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Feather
                                    name="video"
                                    size={heightPercentageToDP(3)}
                                    color="gray"
                                />
                            </TouchableOpacity>
                        </View>
                    );
                },
            }}
        />
    );
};

const Footer = () => {
    return (
        <View>
            <Text>Footer</Text>
        </View>
    );
};

export default ChatRoom;
