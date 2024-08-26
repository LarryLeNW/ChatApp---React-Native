import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

const ChatList = ({ userChats }) => {
    return (
        <View className="flex-1">
            <FlatList
                data={userChats}
                contentContainerStyle={{
                    flex: 1,
                    paddingVertical: 25,
                }}
                keyExtractor={(item) => Math.random()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <ChatItem data={item} index={index} />
                )}
            />
        </View>
    );
};

const ChatItem = ({ data }) => {
    return (
        <TouchableOpacity>
            <Text>{data}</Text>
        </TouchableOpacity>
    );
};

export default ChatList;
