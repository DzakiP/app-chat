import React from "react";
import {useRouter} from "next/navigation";
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
    const router = useRouter();

    return (
        <Card 
            className={classes.chatRoomItem} 
            onClick={() => {
                router.push(`/chat/${chatRoom.room.id}`);
            }}>
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
        <>
            {type == "text" && (
                <Text size="xs">
                    {isGroupChat ? `${sender}: ${message}`: message}
                </Text>
            )}
            {type !== "text" &&(
                <Group justify="flex-start" gap={0}>
                   {isGroupChat && (
                    <Text c="dimmed" size="xs" truncate="end">
                        {`${sender}:`}
                    </Text>
                   )}
                   <ThemeIcon size="sm" color="gray" bg="none" ml={isGroupChat ? 0 : -4}>
                        {type === "image" && (
                            <IconPhoto style={{ width: 16, height: 16 }} />
                        )}
                        {type === "video" && (
                            <IconVideo style={{ width: 16, height: 16 }} />
                        )}
                        {type === "pdf" && (
                            <IconFileDescription style={{ width: 16, height: 16 }} />
                        )}
                   </ThemeIcon>
                   <Text size="xs" ml={4} truncate="end">
                        {type === "image" && "Photo"}
                        {type === "video" && "Video"}
                        {type === "pdf" && "Document"}
                     </Text>
                </Group>
            )}
        </>
    );
}