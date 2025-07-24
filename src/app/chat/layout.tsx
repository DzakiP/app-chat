import { Stack } from "@mantine/core";

export default function ChatLayout({
    children,
    }: {
    children: React.ReactNode;
    }) {
    return (
        <Stack justify="center" align="center" style={{ height: "100vh" }}>
        {children}
        </Stack>
    );
}