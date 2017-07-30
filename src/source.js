const images = {
    HeavyMetal: require('../img/HeavyMetal2.jpg'),
    Countdown: require('../img/Countdown.jpg'),
    Endgame: require('../img/Endgame.jpg'),
    IronMaiden: require('../img/IronMaiden.jpg'),
    KillEmAll: require('../img/KillEmAll.jpg'),
    Killers: require('../img/Killers.jpg'),
    KIMB: require('../img/KIMB.jpg'),
    MasterOfPuppets: require('../img/MasterOfPuppets.jpg'),
    NumberOfBeast: require('../img/NumberOfBeast.jpg'),
    RideTheLightning: require('../img/RideTheLightning.jpg'),
    RustInPeace: require('../img/RustInPeace.jpg'),
    IronMaidenBand: require('../img/IronMaidenBand.jpg'),
    Metallica: require('../img/Metallica.jpg'),
    Megadeth: require('../img/Megadeth.jpg'),
}

export const playlist = {
    title: 'Only Metal',
    duration: 14494,
    img: images.HeavyMetal,
    albums: [
        {
            key: 1,
            title: "Kill 'Em All",
            band: "Metallica",
            duration: 3075,
            img: images.KillEmAll
        },
        {
            key: 2,
            title: "Ride the Lightning",
            band: "Metallica",
            duration: 2843,
            img: images.RideTheLightning
        },
        {
            key: 3,
            title: "Master of Puppets",
            band: "Metallica",
            duration: 3286,
            img: images.MasterOfPuppets
        },
        {
            key: 4,
            title: "Rust in Peace",
            band: "Megadeth",
            duration: 2444,
            img: images.RustInPeace
        },
        {
            key: 5,
            title: "Countdown to Extinction",
            band: "Megadeth",
            duration: 2846,
            img: images.Countdown
        }
    ]
};

export const bands = [
    {
        key: 1,
        name: 'Metallica',
        description: "Metallica is an American heavy metal band based in San Rafael, California. The band was formed in 1981 in Los Angeles when vocalist/guitarist James Hetfield responded to an advertisement posted by drummer Lars Ulrich in a local newspaper. Metallica's current line-up comprises founding members Hetfield and Ulrich, longtime lead guitarist Kirk Hammett and bassist Robert Trujillo. Guitarist Dave Mustaine (who went on to form Megadeth) and bassists Ron McGovney, Cliff Burton and Jason Newsted are also former members of the band.",
        img: images.Metallica,
        albums: [
            {
                key: 1,
                title: "Kill 'Em All",
                band: "Metallica",
                duration: 3075,
                img: images.KillEmAll
            },
            {
                key: 2,
                title: "Ride the Lightning",
                band: "Metallica",
                duration: 2843,
                img: images.RideTheLightning
            },
            {
                key: 3,
                title: "Master of Puppets",
                band: "Metallica",
                duration: 3286,
                img: images.MasterOfPuppets
            }
        ]
    },
    {
        key: 2,
        name: 'Megadeth',
        description: "Megadeth is an American heavy metal band from Los Angeles, California. Guitarist Dave Mustaine and bassist David Ellefson formed the band in 1983 shortly after Mustaine's dismissal from Metallica. A pioneer of the American thrash metal scene, the band is credited as one of the genre's \"big four\" with Anthrax, Metallica and Slayer, responsible for thrash metal's development and popularization. Megadeth plays in a technical style, featuring fast rhythm sections and complex arrangements. Themes of death, war, politics and religion are prominent in the song lyrics.",
        img: images.Megadeth,
        albums: [
            {
                key: 4,
                title: "Rust in Peace",
                band: "Megadeth",
                duration: 2444,
                img: images.RustInPeace
            },
            {
                key: 5,
                title: "Countdown to Extinction",
                band: "Megadeth",
                duration: 2846,
                img: images.Countdown
            },
            {
                key: 6,
                title: "Endgame",
                band: "Megadeth",
                duration: 2682,
                img: images.Endgame
            },
        ]
    },
    {
        key: 3,
        name: 'Iron Maiden',
        description: "Iron Maiden are an English heavy metal band formed in Leyton, East London, in 1975 by bassist and primary songwriter Steve Harris. The band's discography has grown to thirty-eight albums, including sixteen studio albums, eleven live albums, four EPs, and seven compilations.",
        img: images.IronMaidenBand,
        albums: [
            {
                key: 7,
                title: "Iron Maiden",
                band: "Iron Maiden",
                duration: 2255,
                img: images.IronMaiden
            },
            {
                key: 8,
                title: "Killers",
                band: "Iron Maiden",
                duration: 2298,
                img: images.Killers
            },
            {
                key: 9,
                title: "The Number of the Beast",
                band: "Iron Maiden",
                duration: 2351,
                img: images.NumberOfBeast
            }
        ]
    }
];

export const albums = [
    {
        key: 1,
        title: "Kill 'Em All",
        band: "Metallica",
        duration: 3075,
        img: images.KillEmAll
    },
    {
        key: 2,
        title: "Ride the Lightning",
        band: "Metallica",
        duration: 2843,
        img: images.RideTheLightning
    },
    {
        key: 3,
        title: "Master of Puppets",
        band: "Metallica",
        duration: 3286,
        img: images.MasterOfPuppets
    },
    {
        key: 4,
        title: "Rust in Peace",
        band: "Megadeth",
        duration: 2444,
        img: images.RustInPeace
    },
    {
        key: 5,
        title: "Countdown to Extinction",
        band: "Megadeth",
        duration: 2846,
        img: images.Countdown
    },
    {
        key: 6,
        title: "Endgame",
        band: "Megadeth",
        duration: 2682,
        img: images.Endgame
    },
    {
        key: 7,
        title: "Iron Maiden",
        band: "Iron Maiden",
        duration: 2255,
        img: images.IronMaiden
    },
    {
        key: 8,
        title: "Killers",
        band: "Iron Maiden",
        duration: 2298,
        img: images.Killers
    },
    {
        key: 9,
        title: "The Number of the Beast",
        band: "Iron Maiden",
        duration: 2351,
        img: images.NumberOfBeast
    }
];
