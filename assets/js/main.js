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
                whiteLightFade: "rgb(255 255 255 / 70%)",
                blueLagoon: "#048383",
                blueLagoonLightFade: "rgb(0 187 187 / 80%)",
                fountainBlue: "#52babb",
                shark: "#1d2528",
                abbey: "#4e4f52",
            },
            background: {
                contactInfoBg: "#21333e",
                blueLagoon: "#048383",
                fountainBlueFade: "rgb(82 186 187 / 27%)",
                woodSmoke: "#111117",
                shark: "#1d2528",
            },
        },
        fonts: {
            small: "12px",
            mid: "14px",
            large: "18px",
            sectionTitle: "3rem",
        },
        navbar: {
            links: ["HOME", "ABOUT", "SERVICES", "TEAM", "BLOG"],
        },
        sectionResults: [
            {
                number: 128,
                label: "Certifications",
            },
            {
                number: 230,
                label: "Employees",
            },
            {
                number: 517,
                label: "Customers",
            },
            {
                number: 94,
                label: "Countries Served",
            },
        ],
    },
    methods: {
        mainStyle(text, bg, font) {
            return `color: ${text}; background-color: ${bg}; font-size: ${font}`;
        },
    },
});
