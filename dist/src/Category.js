const categories = {
    work: {
        name: "Work",
    },
    communication: {
        name: "Communication",
    },
    games: {
        name: "Games",
    },
    financial: {
        name: "Financial",
    },
    social: {
        name: "Social"
    },
    entertainment: {
        name: "Entartainment",
    },
    shopping: {
        name: "Shopping",
    },
    education: {
        name: "Education",
    },
};
export default class Category {
    static get(category) {
        return categories[category];
    }
    static getAll() {
        return Object.keys(categories).map((key) => (Object.assign({ id: key }, Category.get(key))));
    }
}
