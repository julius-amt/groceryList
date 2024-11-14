export interface GroceryListPrices {
    [key: string]: number;
}

export interface GroceryListItem {
    name: string;
    quantity: number;
    unit: string;
}

export interface GroceryListJson {
    items: GroceryListItem[];
}
