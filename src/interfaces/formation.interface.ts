import type TypeFormation from "../enums/typeFormation.enum";

export default interface IFormation {
    id: number;
    type: TypeFormation;
    title: string;
    duree: string;
    specialite?: string[];
    url?: string;
}
