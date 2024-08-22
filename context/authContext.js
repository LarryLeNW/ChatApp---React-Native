import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [isAuthenticated, setIsAuthenticated] = useState(undefined);

    useEffect(() => {
        // state change
        setTimeout(() => setIsAuthenticated(false), 500);
    }, []);

    const register = (email, password, username, profileURL) => {
        try {
            // handle
        } catch (error) {}
    };

    const login = (email, password) => {
        try {
            // handle
        } catch (error) {}
    };

    const logout = () => {
        try {
            // handle
        } catch (error) {}
    };

    return (
        <AuthContext.Provider
            value={{ user, isAuthenticated, login, register, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const value = useContext(AuthContext);

    if (!value)
        throw new Error("useAuth must be wrapped inside AuthContextProvider");

    return value;
};
