
# Grocery Shopping Automation

This project is a Node.js script designed to automate grocery shopping calculations by reading a predefined list of grocery items and quantities from a JSON file, calculating the total cost based on a price list, and generating a receipt.

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
The project follows this directory structure:
```
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── data
│   │   ├── grocery_list.json
│   │   └── shopping_receipt.txt
│   ├── script.ts
│   └── types
│       └── grocery.d.ts
└── tsconfig.json
```

### Objectives
The primary objectives of this project are:
- Demonstrate the use of the Node.js `fs` (File System) module for file operations.
- Practice string manipulation and calculations.
- Apply functional programming principles.

## Features
- Reads a grocery list from a JSON file.
- Calculates the total cost of items based on a predefined price list.
- Generates a formatted grocery receipt containing the list and the total cost.
- Writes the receipt to a text file and handles file existence gracefully.

## Setup and Installation
To get started with this project, follow these steps:

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
   Ensure `tsconfig.json` is configured to compile TypeScript files in the `src` directory.

## Usage
1. **Add Grocery List**:
   Edit `src/data/grocery_list.json` to add or modify the list of grocery items and their quantities.

2. **Run the Script**:
   Execute the script with:
   ```bash
   npm run dev
   ```
   This will create a receipt (`shopping_receipt.txt`) in the `src/data/` directory with a formatted list and total cost.

## File Descriptions

### JSON Files
- **grocery_list.json**: Contains the list of items and quantities needed for the shopping list, structured as an array of item objects:
  ```json
  {
    "items": [
      { "name": "Milk", "quantity": 1, "unit": "liter" },
      ...
    ]
  }
  ```

- **shopping_receipt.txt**: The generated receipt file showing each item, its quantity, unit, and calculated cost, followed by the total price.

### TypeScript Files
- **script.ts**: Main script that:
  - Reads from `grocery_list.json`
  - Calculates item and total costs
  - Writes to `shopping_receipt.txt`
  - Ensures error handling if files are missing

- **grocery.d.ts**: Type definitions for the grocery list structure:
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
- **File Not Found**: Logs an error message if `grocery_list.json` is missing.
- **Invalid Data**: Parses and validates data structure from `grocery_list.json`.
- **File Operations**: Checks if `shopping_receipt.txt` already exists and deletes it if necessary to avoid conflicts.

## Limitations
- **Static Price List**: Prices are predefined in the script; modifications require editing `script.ts`.
- **Limited Units**: Calculations assume the price per unit matches the quantity. If quantities need conversion (e.g., grams to kilograms), the script must be adapted.

## License
This project is open-source and available under the [MIT License](LICENSE).

--- 

This README covers setup, usage, structure, and other necessary details for anyone to understand and work with your grocery shopping script effectively.