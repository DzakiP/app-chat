import React from "react";
import { Stack, Text, LoadingOverlay } from "@mantine/core";
import RoomItem from "@/components/RoomItem";
import { IChatRoom } from "@/types/chat";

export default function RoomList({
    chatRooms,
    loading = false,
}:{
    chatRooms: IChatRoom[];
    loading?: boolean;
}) {
    return (
        <Stack style={{ height: "100vh", align: "stretch", gap: 0 }}>
           <LoadingOverlay
                visible={loading}
                zIndex={1000}
                overlayProps={{ radius: "sm", blur: 2 }}
            />
            {chatRooms.map((chatRoom)=>(
                <RoomItem key={chatRoom.room.id} chatRoom={chatRoom} />
            ))}
            {chatRooms.length === 0 && !loading && (
                <Text ta="center" size="lg" c="dimmed" mt="60%">
                    No chat rooms available
                </Text>
            )}
        </Stack>
    )
}