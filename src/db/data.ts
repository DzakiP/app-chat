interface IData {
  results: {
    room: {
      name: string;
      id: number;
      image_url: string;
      participant: {
        id: string;
        name: string;
        role?: number;
      }[];
    };
    comments: {
      id: number;
      type: string;
      message: string;
      sender: string;
      media_url?: string;
      timestamp: string;
    }[];
  }[];
}

export const data: IData = {
  "results": [
    {
      "room": {
        "name": "Product A",
        "id": 12456,
        "image_url": "https://picsum.photos/id/237/200/300",
        "participant": [
          {
            "id": "admin@mail.com",
            "name": "Admin",
            "role": 0
          },
          {
            "id": "agent@mail.com",
            "name": "Agent A",
            "role": 1
          },
          {
            "id": "customer@mail.com",
            "name": "king customer",
            "role": 2
          }
        ]
      },
      "comments": [
        {
          "id": 885512,
          "type": "text",
          "message": "Selamat malam",
          "sender": "customer@mail.com",
          "timestamp": "2024-01-20T19:00:00Z"
        },
        {
          "id": 885513,
          "type": "text",
          "message": "Malam",
          "sender": "agent@mail.com",
          "timestamp": "2024-01-20T19:01:00Z"
        },
        {
          "id": 885514,
          "type": "text",
          "message": "Ada yang bisa saya bantu?",
          "sender": "agent@mail.com",
          "timestamp": "2024-01-20T19:01:30Z"
        },
        {
          "id": 885515,
          "type": "text",
          "message": "Saya ingin mengirimkan bukti pembayaran, karena diaplikasi selalu gagal",
          "sender": "customer@mail.com",
          "timestamp": "2024-01-20T19:02:00Z"
        },
        {
          "id": 885516,
          "type": "text",
          "message": "Baik, silahkan kirimkan lampiran bukti pembayarannya",
          "sender": "agent@mail.com",
          "timestamp": "2024-01-20T19:02:30Z"
        },
        {
          "id": 885517,
          "type": "image",
          "message": "Ini bukti pembayarannya",
          "sender": "customer@mail.com",
          "timestamp": "2024-01-20T19:03:00Z",
          "media_url": "https://picsum.photos/400/600",
        },
        {
          "id": 885518,
          "type": "text",
          "message": "Terima kasih, saya akan memverifikasi pembayaran Anda",
          "sender": "agent@mail.com",
          "timestamp": "2024-01-20T19:03:30Z"
        },
        {
          "id": 885519,
          "type": "pdf",
          "message": "Berikut adalah invoice resmi untuk transaksi Anda",
          "sender": "agent@mail.com",
          "timestamp": "2024-01-20T19:05:00Z",
          "media_url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        },
        {
          "id": 885520,
          "type": "video",
          "message": "Tutorial cara melakukan pembayaran di aplikasi",
          "sender": "agent@mail.com",
          "timestamp": "2024-01-20T19:06:00Z",
          "media_url": "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
        },
        {
          "id": 885521,
          "type": "text",
          "message": "Terima kasih atas bantuannya!",
          "sender": "customer@mail.com",
          "timestamp": "2024-01-20T19:07:00Z"
        }
      ]
    }
  ]
}