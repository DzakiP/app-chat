import React from "react";
import { Grid, Avatar } from "@mantine/core";
import SearchInput from "@/components/Input/SearchInput";

export default function Navbar({
    search,
    setSearch,
}:{
    search: string;
    setSearch: (value: string) => void;
}) {
    return (
        <Grid align="center" justify="space-between" style={{ padding: "10px 20px" }}>
            <Grid.Col span={2}>
                <Avatar radius="xl" size="md" src="/logo.png" alt="Logo" />
            </Grid.Col>
            <Grid.Col span="auto">
                <SearchInput search={search} setSearch={setSearch} placeholder="Search..." />
            </Grid.Col>
        </Grid>
    );
}