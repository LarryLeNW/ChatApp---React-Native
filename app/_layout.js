import { Slot, useRouter, useSegments } from "expo-router";
import { View } from "react-native";
import { AuthContextProvider, useAuth } from "../context/authContext";
import { useEffect } from "react";

const MainLayout = () => {
    const { isAuthenticated } = useAuth();
    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
        if (typeof isAuthenticated === "undefined") return;
        const inApp = segments[0] == "(app)";
        if (isAuthenticated && !inApp) router.replace("Home");
        else if (isAuthenticated === false) router.replace("SignIn");
    }, [isAuthenticated]);

    return <Slot />;
};

const RootLayout = () => {
    return (
        <AuthContextProvider>
            <MainLayout />
        </AuthContextProvider>
    );
};

export default RootLayout;