import fs from "fs";
import { GroceryListItem, GroceryListPrices } from "./types/grocery";

// Read the content of a file
export const readFile = (filePath: string) => fs.readFileSync(filePath, "utf8");

// Check if a file exists
export const fileExists = (filePath: string) => fs.existsSync(filePath);

// Calculate the total price of the grocery list and create a receipt
export const calculateTotalPriceAndCreateReceipt = (
    items: GroceryListItem[],
    prices: GroceryListPrices
): string => {
    let totalPrice = 0;
    let receiptContent = "Grocery List:\n--------------------\n";
    for (const item of items) {
        const price = prices[item.name];
        const totalPriceForItem = price * item.quantity || 0;
        totalPrice += totalPriceForItem;
        receiptContent += `${item.name} - ${item.quantity} ${
            item.unit
        } - $${totalPriceForItem.toFixed(2)}\n`;
    }

    // Add the total price to the reciept
    receiptContent += `--------------------\nTotal Price: $${totalPrice.toFixed(
        2
    )}`;
    return receiptContent;
};

// Write the receipt to a file
export const writeReceiptToFile = (
    receiptContent: string,
    receiptPath: string
) => {
    if (!fs.existsSync(receiptPath)) {
        fs.writeFileSync(receiptPath, receiptContent);
        console.log("Reciept created successfully");
    } else {
        // removee the reciept file if it already exists
        fs.unlinkSync(receiptPath);
        fs.writeFileSync(receiptPath, receiptContent);
        console.log("Receipt created successfully");
    }
};
