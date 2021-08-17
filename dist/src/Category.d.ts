declare const categories: {
    work: {
        name: string;
    };
    communication: {
        name: string;
    };
    games: {
        name: string;
    };
    financial: {
        name: string;
    };
    social: {
        name: string;
    };
    entertainment: {
        name: string;
    };
    shopping: {
        name: string;
    };
    education: {
        name: string;
    };
};
export declare type CategoryType = keyof typeof categories;
export default class Category {
    static get(category: CategoryType): {
        name: string;
    } | {
        name: string;
    } | {
        name: string;
    } | {
        name: string;
    } | {
        name: string;
    } | {
        name: string;
    } | {
        name: string;
    } | {
        name: string;
    };
    static getAll(): ({
        id: string;
        name: string;
    })[];
}
export {};
//# sourceMappingURL=Category.d.ts.map