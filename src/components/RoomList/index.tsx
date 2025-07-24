import React from "react";
import { Stack } from "@mantine/core";
import RoomItem from "@/components/RoomItem";
import { IChatRoom } from "@/types/chat";

export default function RoomList({
    chatRooms,
}:{
    chatRooms: IChatRoom[];
}) {
    return (
        <Stack style={{ width: "100%" }}>
            {chatRooms.map((chatRoom) => (
                <RoomItem key={chatRoom.room.id} chatRoom={chatRoom} />
            ))}
        </Stack>
    )
}