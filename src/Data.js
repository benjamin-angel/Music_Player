import { v4 as uuidv4 } from "uuid";

function chillHop() {
    return [
        {
            name: "Flushing the Stairs",
            artist: "Leavv",
            cover:
                "https://chillhop.com/wp-content/uploads/2020/09/6defa6c89a6902fdd84bccd720c2b8fd29c40990-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9917",
            id: uuidv4(),
            active: true,
            color: ["#ceea91", "#033846"],
        },
        {
            name: "Hidden Structure",
            artist: "Leavv, Flitz&Suppe",
            cover:
                "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9913",
            id: uuidv4(),
            active: false,
            color: ["#cc9164", "#478d6a"],
        },
        {
            name: "Sodium",
            artist: "Philanthrope, Tesk",
            cover:
                "https://chillhop.com/wp-content/uploads/2020/10/efaa848553d09b4d9fc0752844456e41b34de276-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9149",
            id: uuidv4(),
            active: false,
            color: ["#b9ecf1", "#59417f"],
        },
        {
            name: "Watercolor",
            artist: "Sleepy Fish",
            cover:
                "https://chillhop.com/wp-content/uploads/2020/07/5d37ecfe3dbb25f8bacbef5f8ab55434a8ce5d16-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=7982",
            id: uuidv4(),
            active: false,
            color: ["#2eb3e0", "#43527b"],
        },
        {
            name: "Into The Wind",
            artist: "Blue Wednesday, Magnus Klausen",
            cover:
                "https://chillhop.com/wp-content/uploads/2020/07/58028b4ad62050072228e4c833916e5512772399-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8102",
            id: uuidv4(),
            active: false,
            color: ["#e7848b", "#2f3246"],
        },
        {
            name: "Ocean Patio",
            artist: "Philanthrope, Dayle",
            cover:
                "https://chillhop.com/wp-content/uploads/2020/04/35a95878437b99e3384b023504b89403ae169707-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8036",
            id: uuidv4(),
            active: false,
            color: ["#f55a38", "#c1dae5"],
        },
    ];
}

export default chillHop;
