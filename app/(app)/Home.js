import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { useAuth } from "../../context/authContext";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import ChatList from "./ChatList";
import { heightPercentageToDP } from "react-native-responsive-screen";
import Loading from "../../components/Loading";

function Home() {
    const { user } = useAuth();
    const router = useRouter();
    const [userChats, setUserChats] = useState([1, 2, 3]);

    useEffect(() => {
        if (user?.userId)
            console.log(`fetch user chat by uid :  ${user?.userId}`);
    });

    return (
        <View className="flex-1  h-[100%]  ">
            <StatusBar style="light" />
            {userChats.length > 0 ? (
                <ChatList userChats={userChats} />
            ) : (
                <View className="flex items-center flex-1  h-[100%] ">
                    <Loading size={"h-[100%]"} />
                </View>
            )}
        </View>
    );
}

export default Home;
