const app = new Vue({
    el: "#app",
    data: {
        contactInfo: {
            hours: {
                icon: "fas fa-clock",
                text: "Open Hours: Mon - Sat - 9:00 - 18:00",
            },
            tel: {
                icon: "fas fa-phone-alt",
                text: "+1 (305) 1234-5678",
            },
            mail: {
                icon: "fas fa-envelope",
                text: "hello@boolean.careers",
            },
        },
        colors: {
            text: {
                silverSand: "#bcbdbd",
                white: "#fff",
                blueLagoon: "#048383",
                fountainBlue: "#52babb",
            },
            background: {
                contactInfoBg: "#21333e",
                blueLagoon: "#048383",
                fountainBlueFade: "rgb(82 186 187 / 27%)",
            },
        },
        fonts: {
            small: "12px",
            mid: "14px",
            large: "18px",
        },
        navbar: {
            links: ["HOME", "ABOUT", "SERVICES", "TEAM", "BLOG"],
        },
    },
    methods: {
        mainStyle(text, bg, font) {
            return `color: ${text}; background-color: ${bg}; font-size: ${font}`;
        },
    },
});
