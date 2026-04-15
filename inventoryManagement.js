/**
 * Lab: Product Inventory Management System
 * Objective: Manage product data using JavaScript arrays
 */

// 1. Create and initialize the products array
let products = ["Laptop", "Phone", "Headphones", "Monitor"];

// 2. Access Product Information
// Logs the first item (index 0) to the console
function logFirstProduct() {
    console.log(products[0]);
}

// 3. Add a Product
// Uses the .push() method to add a new name to the end of the array
function addProduct(productName) {
    products.push(productName);
}

// 4. Update Product Information
// Takes index (position) and newName as arguments to modify the array
function updateProductName(position, newName) {
    if (position >= 0 && position < products.length) {
        products[position] = newName;
    }
}

// 5. Remove a Product
// Uses the .pop() method to remove the final item in the array
function removeLastProduct() {
    products.pop();
}

// --- Verification ---
logFirstProduct(); // Logs: Laptop
addProduct("Mouse");
updateProductName(1, "Smartphone"); // Changes "Phone" to "Smartphone"
removeLastProduct(); // Removes "Mouse"
console.log(products); // Logs: ["Laptop", "Smartphone", "Headphones", "Monitor"]



// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
