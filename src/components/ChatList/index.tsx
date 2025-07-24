import React from "react";
import { Stack } from "@mantine/core";
import { IChat } from "@/types/chat";
import ChatItem, { ChatItemProps } from "@/components/ChatItem";

export default function ChatList({ chats, isGroupChat = false}: {
    chats: ChatItemProps[]; isGroupChat?: boolean}){
        console.log("dumb chats", chats);
    return (
       <Stack h="100%" w="100%" gap={8} px={12} py={12}>
        {chats.map((chat) => (
            <ChatItem key={chat.id} chat={chat} isGroupChat={isGroupChat} />
        ))}
       </Stack>
    );
}