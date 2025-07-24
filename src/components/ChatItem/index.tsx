import React from "react";
import{
    Paper,
    Text,
    Flex,
    Image,
    ThemeIcon,
    ActionIcon,
    Grid,
} from "@mantine/core";
import NextImage from "next/image";
import { IChat} from "@/types/chat";
import { IconFileTypePdf, IconDownload } from "@tabler/icons-react";

export interface ChatItemProps extends IChat {
    senderName: string;
    isMe: boolean;
}

export default function ChatItem({
    chat,
    isGroupChat = false,
}:{
    chat: ChatItemProps;
    isGroupChat?: boolean;
}) {
    return (
        <Flex align="center" justify={chat.isMe ? "flex-end" : "flex-start"}>
            <Message chat={chat} isGroupChat={isGroupChat} />
        </Flex>
    );
}

function Message({
    chat,
    isGroupChat = false,
}:{
    chat: ChatItemProps;
    isGroupChat?: boolean;
}) {
    return(
        <>
            {chat.type === "text" && (
                <Paper
                py={12}
                pl={12}
                pr={36}
                radius="md"
                style={{ width: "fit-content"}}
                maw="80%"
            >
                <Flex direction="column">
                    {!chat.isMe && isGroupChat && (
                        <Text size="sm" fw={500}>
                            {chat.senderName}
                        </Text>
                    )}
                </Flex>
                </Paper>
            )}

            {chat.type === "image" && (
                <Paper p={7} radius="md" style={{width: "fit-content"}} maw="80%">
                    <Flex direction="column" gap={8}>
                        {!chat.isMe && isGroupChat && (
                            <Text size="sm" fw={500}>
                                {chat.senderName}
                            </Text>
                        )}
                        <Image
                           component={NextImage}
                           radius={6}
                           src={chat.media_url}
                           alt={chat.message}
                           width={200}
                           height={200}
                        />
                    </Flex>
                </Paper>
            )}

            {chat.type === "video" && (
                <Paper p={7} radius="md" style={{width: "fit-content"}} maw="80%">
                    <Flex direction="column" gap={8}>
                        {!chat.isMe && isGroupChat && (
                            <Text size="sm" fw={500}>
                                {chat.senderName}
                            </Text>
                        )}
                        <video src={chat.media_url} controls style={{ maxWidth: "100%", borderRadius: 6 }} />
                    </Flex>
                </Paper>
            )}

            {chat.type === "pdf" && (
                 <Paper p={7} radius="md" style={{ width: "fit-content" }} maw="80%">
                    <Grid justify="space-between" align="center" gutter="xs">
                        <Grid.Col span="content">
                        <ThemeIcon variant="white" size="xl" color="red">
                            <IconFileTypePdf style={{ width: "100%", height: "100%" }} />
                        </ThemeIcon>
                        </Grid.Col>
                        <Grid.Col span="auto">
                        <Text size="sm">{chat.message}</Text>
                        </Grid.Col>
                        <Grid.Col span="content">
                        <ActionIcon
                            variant="subtle"
                            size="lg"
                            onClick={() => {
                            fetch(chat.media_url as string).then((response) => {
                                response.blob().then((blob) => {
                                const fileURL = window.URL.createObjectURL(blob);
                                let alink = document.createElement("a");
                                alink.href = fileURL;
                                alink.download = chat.message;
                                alink.click();
                                });
                            });
                            }}
                        >
                            <IconDownload
                            style={{ width: "70%", height: "70%" }}
                            stroke={1.5}
                            />
                        </ActionIcon>
                        </Grid.Col>
                    </Grid>
                </Paper>
            )}
        </>
    )
}