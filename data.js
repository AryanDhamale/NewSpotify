const heatwave=new Audio('./mus/Heat Waves cover커버 by Highcloud.mp3');
const maroon=new Audio('./mus/Maroon 5  Memories  cover by JFla.mp3');
const step=new Audio('./mus/Steps.mp3');
const subway=new Audio ('./mus/Subway Dreams.mp3');
const ofset=new Audio('./mus/Ofshane  Sunset n Beachz.mp3');
const running=new Audio('./mus/Running.mp3');
const shapeofyou=new Audio('./mus/Ed Sheeran  Shape Of You  cover by JFla.mp3');
const closer=new Audio('./mus/So Beautifull Cover The Chainsmokers Closer  cover by JFla.mp3');
const ocean=new Audio('./mus/Mike Perry  The Ocean  cover by JFla.mp3');
const believer=new Audio('./mus/Imagine Dragons  Believer  cover by JFla.mp3');
const havana=new Audio('./mus/Camila Cabello  Havana  cover by JFla.mp3');
const memories=new Audio('./mus/Bad Liar.mp3');
const zombie=new Audio('./mus/Zombie.mp3');
const BAdwolf=new Audio('./mus/Tyler Rake Extraction  Tribute Bad Wolf.mp3');
const lose=new Audio('./mus/Eminem  Lose Yourself  cover by JFla.mp3');
const thunder=new Audio('./mus/Imagine Dragons  Thunder  cover by JFla.mp3');
const stay=new Audio('./mus/Zedd  Stay  cover by JFla.mp3');
const waydownwego=new Audio('./mus/Way down We Go.mp3');
const kudahafiz=new Audio('./mus/Khuda Haafiz Title Track  Vidyut JammwalShivaleeka OberoiMithoon ft Vishal DadlaniSayeed Quadri.mp3');
const lifegoeson=new Audio('./mus/BTS 방탄소년단 Life Goes On Official MV.mp3');
const yaali=new Audio('./mus/Ya Ali Reham Ali 3 songs in 1 video  The Twilight Saga complete fight.mp3');
const silkysmoth=new Audio('./mus/Audio Hertz  Silky Smooth.mp3');
const vergil=new Audio('./mus/Show me your motivation.mp3');
const drop=new Audio('./mus/Drop (320 kbps).mp3');


let shape_of_you=[
    {
        ele:shapeofyou,
        name:"Ed Sheeran  Shape Of You  cover by JFla",
        img:"https://avatar-ex-swe.nixcdn.com/song/2017/12/09/1/f/7/3/1512799083839_640.jpg",
        bot:"J.fla",
        color:"shape-of-you"
    }
];
let Rose=[
    {
        ele:havana,
        name:"Camila Cabello  Havana  cover by JFla ",
        img:"https://i.scdn.co/image/ab67616d0000b27359280306a49b3b7f13124a31",
        bot:"J.fla",
        color:"Rose"
    }
];
let Memories=[
    {
        ele:memories,
        name:"Bad Liar",
        img:"https://i.scdn.co/image/ab67616d0000b27306d111e569f2b9e1179d9ad6",
        bot:"J.fla",
        color:"Memories"
    },
    {
        ele:zombie,
        name:"Zombie",
        bot:"J.fla"
    },
    {
        ele:BAdwolf,
        name:"Tyler Rake Extraction  Tribute Bad Wolf",
        bot:"Unknown"
    }
];

let Natural=[
    {
        ele:lose,
        name:"Eminem  Lose Yourself  cover by JFla",
        img:"https://i.scdn.co/image/ab67616d0000b27397f10e853186a6cbf1fd8473",
        bot:"J.fla",
        color:"Natural"
    },
    {
       ele:thunder,
       name:"Imagine Dragons  Thunder  cover by JFla",
       bot:"J.fla"
    }
];
let Stay=[
    {
        ele:stay,
        name:"Zedd  Stay  cover by JFla ",
        img:"https://images.genius.com/56cf42919333a7b42ec8b05aeb3dff44.1000x1000x1.jpg",
        bot:"J.fla",
        color:"Stay"
    }
];

let Believer=[
    {
        ele:believer,
        name:"Imagine Dragons  Believer  cover by JFla ",
        img:"https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/90/5c/da/905cda7f-2a83-cabe-c2eb-b680e770a276/cover.jpg/400x400cc.jpg",
        bot:"J.fla",
        color:"Beliver"
    }
]
let The_ocean=[
    {
        ele:ocean,
        name:"Mike Perry  The Ocean  cover by JFla",
        img:"https://i1.sndcdn.com/avatars-000550760208-hsm3cl-t500x500.jpg",
        bot:"J.fla",
        color:"ocean"
    }
];

let Maroon_5=[
    {
        ele:maroon,
        name:"Maroon 5",
        img:"https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evNZY5NHq-default.jpg",
        bot:"2015 Album",
        color:"maroon-5"
    }
]

let Closer=[
    {
        ele:closer,
        name:"So Beautifull Cover The Chainsmokers Closer  cover by JFla",
        img:"https://cdns-images.dzcdn.net/images/artist/bf08bb807733bf1537ce6f278cd052c1/500x500.jpg",
        bot:"2018 Album",
        color:"closer"
    }
];

let Background=[
     {
        ele:silkysmoth,
        name:"Audio Hertz  Silky Smooth",
        img:"https://charts-images.scdn.co/assets/locale_en/regional/daily/region_dk_default.jpg",
        bot:"All album",
        color:"top-50"
     },
     {
        ele:subway,
        name:"Subway Dreams",
        bot:"SHAO"
     },
     {
        ele:step,
        name:"Steps",
        bot:"SHAO"
     },
     {
       ele:ofset,
       name:"Ofshane  Sunset n Beachz",
       bot:"SHAO"
     },
     {
        ele:drop,
        name:"Drop (320 kbps)",
        bot:"SHAO"
     }
];

let Way_Down_we_Go=[
    {
        ele:waydownwego,
        name:"Way Down We Go",
        img:"https://i1.sndcdn.com/artworks-AZxbsfTmF8l64GI1-fLn6Gg-t500x500.jpg",
        bot:"KALEO",
        color:"way-down-we-go"
    }
];

let Vergil=[
     {
    ele:vergil,
    name:"Show me your motivation",
    img:"https://vsthemes.org/uploads/posts/workshop/282199778763fdc58f436c0834797500.webp",
    bot:"Vergil",
    color:"Vergil" 
    }
];

let Khuda_Hafiz=[
    { 
     ele:kudahafiz,
     name:"Khuda Haafiz",
     img:"https://c.saavncdn.com/086/Khuda-Haafiz-Hindi-2020-20230620104621-500x500.jpg",
     bot:"Vishal Dadlani",
     color:"Khuda_Hafiz"
    }
];

let BTS=[
    {
        ele:lifegoeson,
        name:"BTS 방탄소년단 Life Goes On Official MV",
        img:"https://i0.wp.com/heyhallyu.com/wp-content/uploads/2023/09/242016.jpg?fit=2500%2C2500&ssl=1",
        bot:"OFFCIAL 2024 CALENDER",
        color:"BTS"
     }
];


let YAALI=[
    {
        ele:yaali,
        name:" Ya Ali Reham Ali 3 songs in 1 video  The Twilight Saga complete fight",
        img:"https://i1.sndcdn.com/artworks-0brduk0iNyz0bdLY-oNDoyw-t500x500.jpg",
        bot:"Ya Ali",
        color:"YAALI"
    }
];

let nameofArr=[
    {
        name:"Closer",
        arrName:Closer
    },
    {
        name:"Maroon_5",
        arrName:Maroon_5
    },
    {
        name:"The_ocean",
        arrName:The_ocean
    },
    {
        name:"shape_of_you",
        arrName:shape_of_you
    },
    {
        name:"Background",
        arrName:Background     
    },
    {
        name:"Believer",
        arrName:Believer
    },
    {
        name:"Rose",
        arrName:Rose
    },
    {
        name:"Momories",
        arrName:Memories
    },
    {
        name:"Natural",
        arrName:Natural
    },
    {
        name:"Stay",
        arrName:Stay
    },
    {
        name:"Way Down We Go",
        arrName:Way_Down_we_Go
    },
    {
        name:"Khuda Hafiz",
        arrName:Khuda_Hafiz
    },
    {
        name:"BTS",
        arrName:BTS
    },
    {
        name:"YAALI",
        arrName:YAALI
    },
    {
        name:"Vergil",
        arrName:Vergil
    }
];