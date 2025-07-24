import {data} from "@/db/data";
import { IChatRoom} from "@/types/chat";
import Cookies from "js-cookie"

const userData = JSON.parse(Cookies.get("userData") || "{}");
const userEmail = userData.email;

export const getChatRooms = (roomType: string): IChatRoom[] => {
    if(roomType === "all") {
        return data.results;
    } else if (roomType === "people"){
        return data.results.filter((room) => room.room.participant.length == 2);
    }

    return [];
}

export const getChatRoomById = (id: number) => {
   const chatRoom = data.results.find((chat) => chat.room.id === id) as IChatRoom;

   const chats = {
    ...chatRoom,
    comments: chatRoom.comments.map((chat) => ({
        ...chat,
        senderName: chatRoom.room.participant.find((participant) =>
        participant.id === chat.sender)?.name,
    isMe: chat.sender === userEmail,
    })),
   }
   return chats;
}