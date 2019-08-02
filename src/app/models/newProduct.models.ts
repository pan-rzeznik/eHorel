export interface Product {
    type: string;
    name: string;
    description: string;
    price: number;
    size?: number[];
    storage: number;
    photo?: string[];
    isNew?: boolean;
}
