import {IData, USER_ROLE} from "@/types/chat";

export const data: IData = {
   results: [
    {
      room: {
        name: "Product A",
        id: 12456,
        image_url: "https://picsum.photos/id/237/200/300",
        participant: [
          {
            id: "admin@mail.com",
            name: "Admin",
            role: USER_ROLE.Admin
          },
          {
            id: "agent@mail.com",
            name: "Agent A",
            role: USER_ROLE.Agent
          },
          {
            id: "customer@mail.com",
            name: "king customer",
            role: USER_ROLE.Customer
          }
        ]
      },
      comments: [
        {
          id: 885512,
          type: "text",
          message: "Selamat malam",
          sender: "customer@mail.com"
        },
        {
          id: 885513,
          type: "text",
          message: "Malam",
          sender: "agent@mail.com"
        },
        {
          id: 885514,
          type: "text",
          message: "Ada yang bisa saya bantu?",
          sender: "agent@mail.com"
        },
        {
          id: 885515,
          type: "text",
          message: "Saya ingin mengirimkan bukti pembayaran, karena diaplikasi selalu gagal",
          sender: "customer@mail.com"
        },
        {
          id: 885516,
          type: "text",
          message: "Baik, silahkan kirimkan lampiran bukti pembayarannya",
          sender: "agent@mail.com"
        },
        {
          id: 885517,
          type: "image",
          message: "Berikut bukti pembayaran saya",
          media_url: "https://example.com/bukti-pembayaran.jpg",
          sender: "customer@mail.com"
        },
        {
          id: 885518,
          type: "pdf",
          message: "Invoice Pembayaran",
          media_url: "https://example.com/invoice.pdf",
          sender: "customer@mail.com"
        },
        {
          id: 885519,
          type: "video",
          message: "Video unboxing produk",
          media_url: "https://example.com/video-demo.mp4",
          sender: "customer@mail.com"
        }
      ]
    }
  ]
}