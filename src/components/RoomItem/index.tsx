import React from "react";
import { Avatar, Flex, Text, Group, Card, ThemeIcon } from "@mantine/core";
import { IconPhoto, IconVideo, IconFileDescription } from "@tabler/icons-react";
import { IChatRoom, ChatType } from "@/types/chat";
import classes from "./RoomItem.module.css";

export default function RoomItem({ chatRoom } : {
    chatRoom: IChatRoom;
} ) {
    const roomName = chatRoom.room.name;
    const roomImage = chatRoom.room.image_url;
    const isGroupChat = chatRoom.room.participant.length > 2;
    const lastChat = chatRoom.comments[chatRoom.comments.length - 1];
    const senderName = chatRoom.room.participant.find(
        (participant) => participant.id === lastChat.sender
    )?.name;

    return (
        <Card className={classes.chatRoomItem}>
            <Group>
                <Avatar src={roomImage}/>
                <Flex direction="column">
                    <Text size="sm">
                        {roomName}
                    </Text>

                    <Message
                        type={lastChat.type}
                        isGroupChat={isGroupChat}
                        message={lastChat.message}
                        sender={senderName}
                    />
                </Flex>
            </Group>
        </Card>
    );
}

function Message({
    type,
    isGroupChat = false,
    message,
    sender,
}:{
    type: ChatType;
    isGroupChat: boolean;
    message: string;
    sender?: string;
}) {
    return (
        <Group justify="flex-start">
            {isGroupChat && (
                <Text size="xs">
                    {sender}:{""}
                </Text>
            )}
            {type !== "text" &&(
                <ThemeIcon size="sm">
                    {type === "image" && (
                        <IconPhoto size={16} />
                    )}
                    {type === "video" && (
                        <IconVideo size={16} />
                    )}
                    {type === "pdf" && (
                        <IconFileDescription size={16} />
                    )}
                </ThemeIcon>
            )}
            <Text size="xs">
                {type === "image" && "Photo"}
                {type === "video" && "Video"}
                {type === "pdf" && "Document"}
                {type === "text" && message}
            </Text>
        </Group>
    );
}