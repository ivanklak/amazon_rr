interface IRating {
    rate: number;
    count: number;
}

export interface IProduct {
    count?: number;
    id: number;
    title: string;
    price: string;
    category: string;
    description: string
    image: string;
    rating: IRating
}