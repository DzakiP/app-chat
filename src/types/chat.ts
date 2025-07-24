export enum USER_ROLE {
    Admin = 0,
    Agent = 1,
    Customer = 2,
}

export type ChatType = "text" | "image" | "video" | "pdf";

export interface IParticipant {
    id: string;
    name: string;
    role?: USER_ROLE;
}

export interface IChat{
    id:number;
    type:ChatType;
    message:string;
    sender:string;
    media_url?:string;
}

export interface IChatRoomDetail{
    name: string;
    id: number;
    image_url: string;
    participant:IParticipant[];
}

export interface IChatRoom{
    room: IChatRoomDetail;
    comments: IChat[];
}

export interface IData{
    results: IChatRoom[];
}