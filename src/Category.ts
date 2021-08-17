
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

export type CategoryType = keyof typeof categories;

export default class Category {
    public static get(category: CategoryType) {
        return categories[category];
    }

    public static getAll(): ({
        id: string;
        name: string;
    })[] {
        return Object.keys(categories).map((key) => (
            {
                id: key,
                // @ts-ignore
                ...Category.get(key),
            }
        ));
    }
}