import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { useAuth } from "../../context/authContext";

function Home() {
    const router = useRouter();
    return (
        <View>
            <Text className="text-3xl font-bold text-blue-500">Home 2</Text>
        </View>
    );
}

export default Home;
