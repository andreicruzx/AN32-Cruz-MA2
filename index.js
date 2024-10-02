/* 
Dynamic Smart Inventory Management System
This script manages the inventory for an electronics store, 
calculating total inventory value, updating product quantities, 
and identifying the most expensive product in stock.
*/

// Store Details
const storeName = "Tech Support"; // The name of the store
const storeLocation = "Downtown Kinaladkad"; // The location of the store
const storeCapacity = 200; // The maximum number of products the store can hold

// Dynamic Product Inventory
let products = [
    { name: "ElectricFan", price: 3500, quantity: 50 },
    { name: "SmartTilibisyon", price: 9999, quantity: 100 },
    { name: "Orea Dog", price: 12999, quantity: 80 }
];

// Calculate total inventory value
let totalInventoryValue = 0; // Initialize total inventory value

// Loop through products to calculate total inventory value
for (let i = 0; i < products.length; i++) {
    totalInventoryValue += products[i].price * products[i].quantity;
}

// Modify Product Information: Update quantity of Electricfan
products[0].quantity += 10; // Received a new shipment of 10 Electricfan

// Product with Highest Price
let mostExpensiveProduct = products[0]; // Assume the first product is the most expensive initially

// Loop to find the most expensive product
for (let i = 1; i < products.length; i++) {
    if (products[i].price > mostExpensiveProduct.price) {
        mostExpensiveProduct = products[i]; // Update if a more expensive product is found
    }
}

// Output the results
console.log("Store Name: " + storeName);
console.log("Store Location: " + storeLocation);
console.log("Total Number of Products in Store: " + products.length);
console.log("Total Value of Inventory: ₹" + totalInventoryValue);
console.log("Updated Quantity of ElectricFan: " + products[0].quantity);
console.log("Most Expensive Product: " + mostExpensiveProduct.name);

// Stretch Goal: Add an additional product
products.push({ name: "Doorbell", price: 7999, quantity: 30 }); // Adding a new product

// Update total inventory value with the new product
totalInventoryValue += products[products.length - 1].price * products[products.length - 1].quantity;

// Output updated total inventory value
console.log("Updated Total Value of Inventory after adding Doorbell: ₹" + totalInventoryValue);
