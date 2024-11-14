
---

# Grocery Shopping Automation Script

This project is a Node.js and TypeScript script that automates grocery shopping calculations. It reads a list of grocery items from a JSON file, calculates the total cost based on predefined prices, and generates a receipt saved in a text file.

## Table of Contents
- [Project Structure](#project-structure)
- [Objectives](#objectives)
- [Features](#features)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [File Descriptions](#file-descriptions)
- [Error Handling](#error-handling)
- [Limitations](#limitations)
- [License](#license)

## Project Structure
The project is organized as follows:
```
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── data
│   │   ├── grocery_list.json
│   │   └── shopping_receipt.txt
│   ├── helpers.ts
│   ├── script.ts
│   └── types
│       └── grocery.d.ts
└── tsconfig.json
```

### Objectives
The primary objectives of this project are:
- Demonstrate use of the Node.js `fs` (File System) module for file operations.
- Modularize code using helper functions.
- Apply functional programming principles and structured data handling.

## Features
- Reads a grocery list from a JSON file.
- Calculates the total cost of items based on a predefined price list.
- Generates a formatted receipt with the grocery list and total cost.
- Uses modular helper functions to organize file operations and calculations.

## Setup and Installation
To get started, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/julius-amt/groceryList.git
   cd groceryList/
   ```

2. **Install Dependencies**:
   Install Node.js dependencies using `npm`:
   ```bash
   npm install
   ```

3. **TypeScript Configuration**:
   Ensure `tsconfig.json` is configured correctly to compile TypeScript files in the `src` directory.

## Usage
1. **Update the Grocery List**:
   Modify `src/data/grocery_list.json` to customize your list of grocery items and quantities.

2. **Run the Script**:
   Execute the script with:
   ```bash
   npm run dev
   ```
   This will generate a receipt (`shopping_receipt.txt`) in the `src/data/` directory.

## File Descriptions

### JSON Files
- **grocery_list.json**: A JSON file containing the list of grocery items, quantities, and units. Example:
  ```json
  {
    "items": [
      { "name": "Milk", "quantity": 1, "unit": "liters" },
      ...
    ]
  }
  ```

- **shopping_receipt.txt**: The output file containing the generated grocery receipt, listing each item with its quantity, unit, price, and the total cost.

### TypeScript Files
- **script.ts**: Main script that:
  - Reads the grocery list from `grocery_list.json`
  - Calls helper functions to calculate the total price and create a receipt
  - Writes the receipt to `shopping_receipt.txt`

- **helpers.ts**: Contains helper functions:
  - `readFile`: Reads a file and returns its content as a string.
  - `fileExists`: Checks if a file exists at the specified path.
  - `calculateTotalPriceAndCreateReceipt`: Takes the list of grocery items and their prices to generate the receipt content.
  - `writeReceiptToFile`: Writes the generated receipt to a file, deleting any existing receipt file to avoid duplication.

- **grocery.d.ts**: Type definitions for grocery list items and price structure:
  ```typescript
  export interface GroceryListItem {
      name: string;
      quantity: number;
      unit: string;
  }

  export interface GroceryListJson {
      items: GroceryListItem[];
  }

  export interface GroceryListPrices {
      [key: string]: number;
  }
  ```

## Error Handling
- **Missing File**: Logs an error if `grocery_list.json` is not found.
- **Invalid Data Structure**: Parses and validates JSON data, logging an error if it does not match the expected structure.
- **File Write Operations**: Handles existing receipt files by deleting them before creating a new one.

## Limitations
- **Static Price List**: Prices are predefined in the script. For customization, the price list must be updated directly in `script.ts`.
- **Limited Unit Compatibility**: The script assumes the unit cost is per quantity. Conversions (e.g., grams to kilograms) would require additional logic.

## License
This project is open-source and available under the MIT License.
