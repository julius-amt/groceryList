import path from "path";
import {
    GroceryListPrices,
    GroceryListJson,
    GroceryListItem,
} from "./types/grocery";
import {
    readFile,
    calculateTotalPriceAndCreateReceipt,
    writeReceiptToFile,
    fileExists,
} from "./helpers";

// Grocery list and prices
let GROCERY_LIST: GroceryListItem[] = [];
const GROCERY_LIST_PRICES: GroceryListPrices = {
    Milk: 1.5,
    Eggs: 2.0,
    Bread: 1.2,
    Apples: 3.0,
    Bananas: 1.8,
    Tomatoes: 2.5,
    Onions: 0.5,
    Potatoes: 1.0,
    Carrots: 1.5,
    Lettuce: 1.0,
    Cucumber: 0.7,
    Yogurt: 1.0,
    Cheese: 4.0,
    Coffee: 3.5,
    Tea: 2.5,
    Pasta: 1.2,
    Rice: 2.0,
};

const groceryListPath = path.join(__dirname, "data", "grocery_list.json");

// Read the grocery list
if (fileExists(groceryListPath)) {
    const groceryListData = readFile(groceryListPath);
    const groceryListJson: GroceryListJson = JSON.parse(groceryListData);

    GROCERY_LIST = groceryListJson.items;

    // calculate the total price of the grocery list and create a reciept
    const receiptContent = calculateTotalPriceAndCreateReceipt(
        GROCERY_LIST,
        GROCERY_LIST_PRICES
    );

    // Write the reciept to a file
    const receiptPath = path.join(__dirname, "data", "shopping_receipt.txt");
    writeReceiptToFile(receiptContent, receiptPath);
} else {
    console.error("Grocery list not found");
}
