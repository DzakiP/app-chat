"use client";
import React, { useState, useEffect } from 'react';
import { IChatRoom } from '@/types/chat';
import { getChatRooms } from "@/utils/data-fetch"; 
import RoomList from "@/components/RoomList";
import NavbarRoom from "@/components/NavbarRoom";
import { Stack, Tabs, ScrollArea } from "@mantine/core";
import Navbar from "@/components/Navbar";

export default function ChatPage(){
    const [data, setData] = useState<IChatRoom[]>([]);
    const [filteredData, setFilteredData] = useState<IChatRoom[]>(data);
    const [search, setSearch] = useState("");
    const [activeTab, setActiveTab] = useState<string | null>("all");
    const [loading, setLoading] = useState(true); 

    useEffect(() =>{
        try{
            setLoading(true);
            const chatRooms = getChatRooms(activeTab || "all");
            setData(chatRooms);
        } catch (error) {
            console.error(error);
        }finally {
            setLoading(false);
        }
    }, [activeTab]);

    useEffect(() => {
        setFilteredData(data);
    }, [data]);

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
                <RoomList chatRooms={filteredData} loading={loading} />
            </ScrollArea>
        </Stack>
    )
}

