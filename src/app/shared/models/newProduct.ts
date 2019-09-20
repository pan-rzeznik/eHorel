export interface Product {
    id?: string;
    category: string;
    name: string;
    description: string;
    price: number;
    size: number[];
    storage: number;
    photos: string[];
    isNew: boolean;
    promotion: boolean;
}
