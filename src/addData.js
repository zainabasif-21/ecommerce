import { collection, addDoc } from "firebase/firestore";
import db from "./Firebase.js";

let prodData=[
    {
        "id": 1,
        "name": "CyberBook Pro",
        "description": "Thin and lightweight design",
        "price": 1451,
        "brand": "Kwinu",
        "category": "gaming console",
        "stock": 98,
        "imageUrl": "http://dummyimage.com/239x100.png/dddddd/000000"
    },
    {
        "id": 2,
        "name": "PowerPad 900",
        "description": "Powerful performance for multitasking",
        "price": 4076,
        "brand": "Mynte",
        "category": "headphones",
        "stock": 75,
        "imageUrl": "http://dummyimage.com/226x100.png/5fa2dd/ffffff"
    },
    {
        "id": 3,
        "name": "CyberPhone 300",
        "description": "High-resolution display for crisp visuals",
        "price": 1645,
        "brand": "Meedoo",
        "category": "headphones",
        "stock": 86,
        "imageUrl": "http://dummyimage.com/233x100.png/cc0000/ffffff"
    },
    {
        "id": 4,
        "name": "GigaPad 300",
        "description": "Powerful performance for multitasking",
        "price": 4698,
        "brand": "Yodo",
        "category": "smartphone",
        "stock": 63,
        "imageUrl": "http://dummyimage.com/128x100.png/ff4444/ffffff"
    },
    {
        "id": 5,
        "name": "DataPhone X",
        "description": "High-resolution display for crisp visuals",
        "price": 4343,
        "brand": "Wordtune",
        "category": "graphics card",
        "stock": 55,
        "imageUrl": "http://dummyimage.com/150x100.png/ff4444/ffffff"
    },
    {
        "id": 6,
        "name": "DataMaster 900",
        "description": "Sleek and modern design with premium materials",
        "price": 868,
        "brand": "Kanoodle",
        "category": "headphones",
        "stock": 99,
        "imageUrl": "http://dummyimage.com/220x100.png/5fa2dd/ffffff"
    },
    {
        "id": 7,
        "name": "GamerDesk 3000",
        "description": "Sleek and modern design with premium materials",
        "price": 1307,
        "brand": "Vimbo",
        "category": "camera",
        "stock": 44,
        "imageUrl": "http://dummyimage.com/243x100.png/cc0000/ffffff"
    },
    {
        "id": 8,
        "name": "PixelDesk Elite",
        "description": "Thin and lightweight design",
        "price": 4724,
        "brand": "Trudoo",
        "category": "laptop",
        "stock": 78,
        "imageUrl": "http://dummyimage.com/157x100.png/ff4444/ffffff"
    },
    {
        "id": 9,
        "name": "PixelPad 500",
        "description": "Sleek and modern design with premium materials",
        "price": 1644,
        "brand": "Skiptube",
        "category": "laptop",
        "stock": 43,
        "imageUrl": "http://dummyimage.com/107x100.png/ff4444/ffffff"
    },
    {
        "id": 10,
        "name": "CyberDesk 5000",
        "description": "Long battery life for all-day use",
        "price": 647,
        "brand": "Yozio",
        "category": "smartphone",
        "stock": 36,
        "imageUrl": "http://dummyimage.com/132x100.png/dddddd/000000"
    },
    {
        "id": 11,
        "name": "DataMaster 900",
        "description": "Sleek and modern design with premium materials",
        "price": 3230,
        "brand": "Skyble",
        "category": "tablet",
        "stock": 48,
        "imageUrl": "http://dummyimage.com/241x100.png/dddddd/000000"
    },
    {
        "id": 12,
        "name": "ElectroDesk 5000",
        "description": "Thin and lightweight design",
        "price": 1528,
        "brand": "Jazzy",
        "category": "tablet",
        "stock": 68,
        "imageUrl": "http://dummyimage.com/250x100.png/dddddd/000000"
    },
    {
        "id": 13,
        "name": "TechPhone 300",
        "description": "Long battery life for all-day use",
        "price": 4201,
        "brand": "Fivechat",
        "category": "graphics card",
        "stock": 42,
        "imageUrl": "http://dummyimage.com/183x100.png/dddddd/000000"
    },
    {
        "id": 14,
        "name": "SmartPhone X",
        "description": "Long battery life for all-day use",
        "price": 3429,
        "brand": "Voolith",
        "category": "gaming console",
        "stock": 13,
        "imageUrl": "http://dummyimage.com/194x100.png/5fa2dd/ffffff"
    },
    {
        "id": 15,
        "name": "CyberScreen Pro",
        "description": "Long battery life for all-day use",
        "price": 4592,
        "brand": "Avamba",
        "category": "camera",
        "stock": 63,
        "imageUrl": "http://dummyimage.com/202x100.png/dddddd/000000"
    },
    {
        "id": 16,
        "name": "ElectroPhone 7",
        "description": "High-resolution display for crisp visuals",
        "price": 2712,
        "brand": "Tazzy",
        "category": "camera",
        "stock": 99,
        "imageUrl": "http://dummyimage.com/198x100.png/5fa2dd/ffffff"
    },
    {
        "id": 17,
        "name": "TechPhone 300",
        "description": "Long battery life for all-day use",
        "price": 3821,
        "brand": "Yakidoo",
        "category": "camera",
        "stock": 62,
        "imageUrl": "http://dummyimage.com/229x100.png/cc0000/ffffff"
    },
    {
        "id": 18,
        "name": "SmartDesk 1000",
        "description": "Sleek and modern design with premium materials",
        "price": 3573,
        "brand": "Thoughtstorm",
        "category": "graphics card",
        "stock": 25,
        "imageUrl": "http://dummyimage.com/184x100.png/ff4444/ffffff"
    },
    {
        "id": 19,
        "name": "PowerPad 900",
        "description": "Sleek and modern design with premium materials",
        "price": 720,
        "brand": "Fivebridge",
        "category": "graphics card",
        "stock": 84,
        "imageUrl": "http://dummyimage.com/162x100.png/5fa2dd/ffffff"
    },
    {
        "id": 20,
        "name": "DataPad 500",
        "description": "Powerful performance for multitasking",
        "price": 1096,
        "brand": "Voolia",
        "category": "laptop",
        "stock": 40,
        "imageUrl": "http://dummyimage.com/225x100.png/dddddd/000000"
    },
    {
        "id": 21,
        "name": "ElectroPhone 7",
        "description": "Thin and lightweight design",
        "price": 167,
        "brand": "Katz",
        "category": "camera",
        "stock": 58,
        "imageUrl": "http://dummyimage.com/147x100.png/cc0000/ffffff"
    },
    {
        "id": 22,
        "name": "GamerDesk Elite",
        "description": "High-resolution display for crisp visuals",
        "price": 2326,
        "brand": "Voomm",
        "category": "camera",
        "stock": 92,
        "imageUrl": "http://dummyimage.com/249x100.png/5fa2dd/ffffff"
    },
    {
        "id": 23,
        "name": "GigaPhone 10",
        "description": "Thin and lightweight design",
        "price": 1167,
        "brand": "Skinix",
        "category": "smartwatch",
        "stock": 68,
        "imageUrl": "http://dummyimage.com/110x100.png/ff4444/ffffff"
    },
    {
        "id": 24,
        "name": "PowerTower 2000",
        "description": "High-resolution display for crisp visuals",
        "price": 1206,
        "brand": "Jayo",
        "category": "gaming console",
        "stock": 27,
        "imageUrl": "http://dummyimage.com/249x100.png/5fa2dd/ffffff"
    },
    {
        "id": 25,
        "name": "GigaPad 300",
        "description": "Thin and lightweight design",
        "price": 3458,
        "brand": "Yoveo",
        "category": "graphics card",
        "stock": 12,
        "imageUrl": "http://dummyimage.com/230x100.png/cc0000/ffffff"
    },
    {
        "id": 26,
        "name": "CyberDesk 5000",
        "description": "Powerful performance for multitasking",
        "price": 2825,
        "brand": "Lajo",
        "category": "smartwatch",
        "stock": 66,
        "imageUrl": "http://dummyimage.com/237x100.png/5fa2dd/ffffff"
    },
    {
        "id": 27,
        "name": "DigitalPad 3000",
        "description": "Sleek and modern design with premium materials",
        "price": 286,
        "brand": "Wikizz",
        "category": "graphics card",
        "stock": 46,
        "imageUrl": "http://dummyimage.com/228x100.png/dddddd/000000"
    },
    {
        "id": 28,
        "name": "PowerTower 2000",
        "description": "Long battery life for all-day use",
        "price": 2589,
        "brand": "Zoomzone",
        "category": "tablet",
        "stock": 18,
        "imageUrl": "http://dummyimage.com/207x100.png/dddddd/000000"
    },
    {
        "id": 29,
        "name": "SmartScreen 2000",
        "description": "Long battery life for all-day use",
        "price": 3217,
        "brand": "Fivespan",
        "category": "smartwatch",
        "stock": 32,
        "imageUrl": "http://dummyimage.com/134x100.png/dddddd/000000"
    },
    {
        "id": 30,
        "name": "SmartPhone X",
        "description": "High-resolution display for crisp visuals",
        "price": 3072,
        "brand": "Devpoint",
        "category": "smartwatch",
        "stock": 56,
        "imageUrl": "http://dummyimage.com/213x100.png/cc0000/ffffff"
    },
    {
        "id": 31,
        "name": "PowerPad 900",
        "description": "High-resolution display for crisp visuals",
        "price": 1480,
        "brand": "Fliptune",
        "category": "gaming console",
        "stock": 43,
        "imageUrl": "http://dummyimage.com/162x100.png/5fa2dd/ffffff"
    },
    {
        "id": 32,
        "name": "PixelPad 500",
        "description": "Thin and lightweight design",
        "price": 711,
        "brand": "Aimbo",
        "category": "smartphone",
        "stock": 92,
        "imageUrl": "http://dummyimage.com/205x100.png/ff4444/ffffff"
    },
    {
        "id": 33,
        "name": "CyberDesk 5000",
        "description": "Thin and lightweight design",
        "price": 3813,
        "brand": "Eire",
        "category": "headphones",
        "stock": 35,
        "imageUrl": "http://dummyimage.com/207x100.png/ff4444/ffffff"
    },
    {
        "id": 34,
        "name": "PixelPad 500",
        "description": "Powerful performance for multitasking",
        "price": 3252,
        "brand": "Skiba",
        "category": "camera",
        "stock": 90,
        "imageUrl": "http://dummyimage.com/135x100.png/ff4444/ffffff"
    },
    {
        "id": 35,
        "name": "SmartBook Pro",
        "description": "Long battery life for all-day use",
        "price": 3510,
        "brand": "Youspan",
        "category": "gaming console",
        "stock": 73,
        "imageUrl": "http://dummyimage.com/220x100.png/ff4444/ffffff"
    }
]

try {
    prodData.forEach(async (doc)=>{
        const docRef= await addDoc(collection(db,"products"),doc)
        console.log("Document written with ID: ", docRef.id);
    })

} catch (e) {
    console.error("Error adding document: ", e);
}