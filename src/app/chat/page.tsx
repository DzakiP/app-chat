"use client";
import React, { useState, useEffect } from 'react';
import { IChatRoom } from '@/types/chat';
import { data as chatData } from "@/db/data"; 
import RoomList from "@/components/RoomList";
import Navbar from "@/components/Navbar";
import { Stack, Tabs, ScrollArea } from "@mantine/core";

export default function ChatPage(){
    const [data, setData] = useState<IChatRoom[]>(chatData.results);
    const [filteredData, setFilteredData] = useState<IChatRoom[]>(chatData.results);
    const [search, setSearch] = useState("");
    const [activeTab, setActiveTab] = useState<string | null>("all");

    useEffect(() =>{
        setFilteredData(data);
    }, [data]);

    useEffect(() => {
        if(activeTab === "all"){
            setData(chatData.results);
        } else if (activeTab === "people"){
            setData(
                chatData.results.filter((room) =>
                room.room.participant.length <= 2)
            );
        }
        setSearch("");
    }, [activeTab]);

    useEffect(() => {
        setFilteredData(
            data.filter((room) =>
            room.room.name.toLowerCase().includes(search.toLowerCase()))
        )
    }, [search]);

    return (
        <Stack gap={0} style={{ height: "100vh" }}>
            <Navbar search={search} setSearch={setSearch}/>
            <Tabs radius="xl" px={8} py={4} value={activeTab} onChange={setActiveTab}>
                <Tabs.List justify="center">
                    <Tabs.Tab value="all">All</Tabs.Tab>
                    <Tabs.Tab value="people">People</Tabs.Tab>
                    <Tabs.Tab value="groups">Groups</Tabs.Tab>
                </Tabs.List>
            </Tabs>
            <ScrollArea style={{ height: "calc(100vh - 90px)" }}>
                <RoomList chatRooms={filteredData} />
            </ScrollArea>
        </Stack>
    )
}

