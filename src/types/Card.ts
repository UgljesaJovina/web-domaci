import { Ingredient } from "./Ingredient";

interface ICard {
    id: string;
    name: string;
    shortText: string;
    bgImage: string;
    redirect?: string;
    prepTime?: string;
    ingredients?: Ingredient[];
    prepInstructions?: string[];
}

export type { ICard }