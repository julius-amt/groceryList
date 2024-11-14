import fs from "fs";
import path from "path";
import {
    GroceryListPrices,
    GroceryListJson,
    GroceryListItem,
} from "./types/grocery";

const GROCERY_LIST_PRICES: GroceryListPrices = {};

const groceryListPath = path.join(__dirname, "data", "grocery_list.json");

// Read the grocery list
if (fs.existsSync(groceryListPath)) {
    const groceryListData = fs.readFileSync(groceryListPath, "utf8");
    const groceryListJson: GroceryListJson = JSON.parse(groceryListData);

    const groceryListItems: GroceryListItem[] = groceryListJson.items;

    // Loop through the grocery list and randomely generate prcices to the GROCERY_LIST_PRICES object
    groceryListItems.forEach((item: GroceryListItem) => {
        const itemPrice2DP = (Math.random() * 10).toFixed(2); // Randomely generate a price between 0 and 10 with 2 decimal places
        const itemPrice = parseFloat(itemPrice2DP);
        GROCERY_LIST_PRICES[item.name] = itemPrice;
    });

    // console.log(GROCERY_LIST_PRICES);
} else {
    console.error("Grocery list not found");
}

//
