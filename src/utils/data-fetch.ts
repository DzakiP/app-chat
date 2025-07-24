import {data} from "@/db/data";
import { IChatRoom} from "@/types/chat";

export const getChatRooms = (roomType: string): IChatRoom[] => {
    if(roomType === "all") {
        return data.results;
    } else if (roomType === "people"){
        return data.results.filter((room) => room.room.participant.length == 2);
    }

    return [];
}

export const getChatRoomById = (id: number) => {
    return data.results.find((chat) => chat.room.id === id);
}