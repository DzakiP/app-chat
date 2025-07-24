import React from "react";
import { ActionIcon, CloseButton, Input } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

export default function SearchInput({
    search,
    setSearch,
    placeholder = ""
}: {
    search: string;
    setSearch: (value: string)=> void;
    placeholder?: string;
}){
    return (
        <Input
            placeholder={placeholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            rightSectionPointerEvents="all"
            radius="lg"
            size="xs"
            style={{ width: "100%" }}
            rightSection={
                search === "" ? (
                    <ActionIcon
                        variant="transparent"
                        size="md"
                        style={{display: search ? "none" : undefined}}
                >
                    <IconSearch size={16} />
                </ActionIcon>
                ):(
                    <CloseButton
                        size="md"
                        variant="transparent"
                        onClick={() => setSearch("")}
                        style={{display: search ? undefined : "none"}}
                    />
                )
            }
        />
    );
}