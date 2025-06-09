import type Nature from "../enums/nature.enum";

export default interface IExperience {
    id: number;
    title: string;
    nature: Nature;
    company?: string;
    duree: string;
    tags: string[];
    description: string;
    url?: string;
}
