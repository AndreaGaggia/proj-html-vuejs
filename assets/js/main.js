const app = new Vue({
    el: "#app",
    data: {
        heroBg: 2,
        dots: [2, 1, 3],
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
            address: {
                icon: "fas fa-map-marker-alt",
                text: "Main Avenue, 987",
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
                greyNurse: "#e7eee9",
                abbeyFade: "rgb(78 79 82 / 70%)",
                altPrimary: null,
            },
            background: {
                contactInfoBg: "#21333e",
                blueLagoon: "#048383",
                fountainBlueFade: "rgb(82 186 187 / 27%)",
                woodSmoke: "#111117",
                shark: "#1d2528",
                cardBg: "#19191f",
                greyNurse: "#e7eee9",
                altFade: null,
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
        servicesCards: [
            {
                icon: "fas fa-sitemap",
                title: "Audit & Assurance",
                onHover: false,
            },
            {
                icon: "fas fa-briefcase",
                title: "Financial Advisory",
                onHover: false,
            },
            {
                icon: "fas fa-chart-bar",
                title: "Analytics and M&A",
                onHover: false,
            },
            {
                icon: "fas fa-plane-departure",
                title: "Middle Marketing",
                onHover: false,
            },
            {
                icon: "fas fa-globe",
                title: "Legal Consulting",
                onHover: false,
            },
            {
                icon: "fas fa-inbox",
                title: "Regulatory Risk",
                onHover: false,
            },
        ],
        team: [
            {
                name: "David Cooper",
                role: "CTO & CO-FOUNDER",
                img: "./assets/images/team-1.jpg",
            },
            {
                name: "Emma Lopez",
                role: "CHIEF MARKETING",
                img: "./assets/images/team-2.jpg",
            },
            {
                name: "Oliver Jones",
                role: "CHIEF PROCUREMENT",
                img: "./assets/images/team-3.jpg",
            },
            {
                name: "T. Johnson",
                role: "CTO & PRESIDENT",
                img: "./assets/images/team-4.jpg",
            },
        ],
        newsCards: [
            {
                bg: "assets/images/news-1.jpg",
                title: "Increasing creativity is possible for everyone",
                details: false,
                author: "Andrea Miller",
                date: "2 Days Ago",
                subtitle:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim?",
            },
            {
                bg: "assets/images/news-2.jpg",
                title: "Beacuse market reasearch is part of the business plan",
                details: false,
                author: "Andrea Miller",
                date: "2 Days Ago",
                subtitle:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim?",
            },
            {
                bg: "assets/images/news-3.jpg",
                title: "Working from home is now a trend",
                details: false,
                author: "Andrea Miller",
                date: "2 Days Ago",
                subtitle:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim?",
            },
        ],
        otherNewsCards: [
            {
                bg: "assets/images/news-4.jpg",
                title: "Love the smell of my new agenda",
                details: false,
                author: "Andrea Miller",
                date: "2 Days Ago",
                subtitle:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim?",
            },
            {
                bg: "assets/images/news-5.jpg",
                title: "The entire morning trying to log in...",
                details: false,
                author: "Andrea Miller",
                date: "2 Days Ago",
                subtitle:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim?",
            },
        ],
        allNews: false,
        footerCards: [
            {
                title: "About",
                listItems: [
                    "The company",
                    "Institutional",
                    "Social & Events",
                    "Innovation",
                    "Environment",
                    "Technology",
                ],
            },
            {
                title: "Services",
                listItems: [
                    "Audit & Assurance",
                    "Financial Advisory",
                    "Analytics M&A",
                    "Middle Marketing",
                    "Legal Consulting",
                    "Regulatory Risk",
                ],
            },
            {
                title: "Support",
                listItems: [
                    "Responsibility",
                    "Terms of Use",
                    "About Cookies",
                    "Privacy Policy",
                    "Accessibility",
                    "Information",
                ],
            },
        ],
        selectValue: null,
        altColors: [
            {
                primary: "#ad6a35",
                faded: "#fead613d",
            },
            {
                primary: "#ff0000",
                faded: "#ff110060",
            },
            {
                primary: "#008000",
                faded: "#11e0113d",
            },
        ],
    },
    methods: {
        mainStyle(text, bg, font) {
            return `color: ${text}; background-color: ${bg}; font-size: ${font}`;
        },
        thePresident() {
            for (const member of this.team) {
                if (member.role.includes("PRESIDENT")) {
                    return member.name;
                }
            }
        },
        onHover(card) {
            card.onHover = true;
        },
        notOnHover(card) {
            card.onHover = false;
        },
        easterEgg() {
            window.scrollTo(0, document.body.scrollHeight);
        },
        alternativeColors(color) {
            this.colors.text.altPrimary = color.primary;
            this.colors.background.altFade = color.faded;
        },
    },
});
