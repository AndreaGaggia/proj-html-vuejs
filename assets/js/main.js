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
            topHeaderBg: "#21333e",
            silverSand: "#bcbdbd",
        },
    },
    methods: {
        mainColors(text, bg) {
            return `color: ${text}; background-color: ${bg}`;
        },
    },
});
