import fs from "fs";
import path from "path";
import {
    GroceryListPrices,
    GroceryListJson,
    GroceryListItem,
} from "./types/grocery";

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
if (fs.existsSync(groceryListPath)) {
    const groceryListData = fs.readFileSync(groceryListPath, "utf8");
    const groceryListJson: GroceryListJson = JSON.parse(groceryListData);

    GROCERY_LIST = groceryListJson.items;
} else {
    console.error("Grocery list not found");
}

// calculate the total price of the grocery list and create a reciept
let totalPrice = 0;
let receiptContent = "Grocery List:\n--------------------\n";
for (const item of GROCERY_LIST) {
    const price = GROCERY_LIST_PRICES[item.name];
    totalPrice += price * item.quantity || 0;

    receiptContent += `${item.name} - ${item.quantity} ${item.unit} - $${price}\n`;
}

// Add the total price to the reciept
receiptContent += `--------------------\nTotal Price: $${totalPrice.toFixed(
    2
)}`;

// Write the reciept to a file
const receiptPath = path.join(__dirname, "data", "shopping_receipt.txt");
if (!fs.existsSync(receiptPath)) {
    fs.writeFileSync(receiptPath, receiptContent);
    console.log("Reciept created successfully");
} else {
    // removee the reciept file if it already exists
    fs.unlinkSync(receiptPath);
    fs.writeFileSync(receiptPath, receiptContent);
    console.log("Receipt created successfully");
}
