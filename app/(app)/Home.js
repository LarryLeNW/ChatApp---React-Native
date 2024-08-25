import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { useAuth } from "../../context/authContext";

function Home() {
    const router = useRouter();
    const { logout } = useAuth();
    return (
        <View>
            <Text className="text-3xl font-bold text-blue-500">Home</Text>
            <Text className="text-3xl font-bold text-red-500" onPress={logout}>
                Logout
            </Text>
        </View>
    );
}

export default Home;
