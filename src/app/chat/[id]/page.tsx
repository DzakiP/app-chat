"use client";
import React, { useState } from "react";
import { Stack, ScrollArea } from "@mantine/core";
import ChatList from "@/components/ChatList";
import ChatInput from "@/components/Input/ChatInput";
import { getChatRoomById } from "@/utils/data-fetch";
import { IChatRoom } from "@/types/chat";
import { ChatItemProps } from "@/components/ChatItem";

export default function page({ params}: {params: {id:string}}){
    const chatRoom = getChatRoomById(parseInt(params.id)) as IChatRoom;
    const chats = chatRoom.comments as ChatItemProps[];
    const isGroupChat = chatRoom.room.participant.length > 2;
    const [value, setValue] = useState("");

    return (
        <Stack gap={0}>
            <ScrollArea style={{ height: "calc(100vh - 60px)" }}>
                <ChatList chats={chats} isGroupChat={isGroupChat} />
            </ScrollArea>
            <ChatInput value={value} setValue={setValue} />
        </Stack>
    )
}