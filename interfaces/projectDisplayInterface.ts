export interface IProjectDisplay {
    name: string;
    image: string;
    date: string;
    description: string;
    usedTech: {
        name: string;
        link: string;
        image: string;
    }[];
}