/**
 * TypeScript Data Types
 * Goal: Understand what each data type means and why it helps you write safer code.
 * Note: Lines that cause compile-time errors are kept commented so you can test them one by one.
 */

// 1) number  -> used for calculations (price, age, quantity, etc.)
let price: number = 499.99;
let quantity: number = 2;

let totalAmount: number = price * quantity; // arithmetic is safe
console.log("Total Amount:", totalAmount);

// price = "500"; // Compile-time error: Type 'string' is not assignable to type 'number'

// 2) string -> text values (name, email, messages, labels)
let customerName: string = "Pranaya Rout";
let email: string = "pranaya@example.com";

console.log("Customer:", customerName.toUpperCase()); // string methods are available
console.log("Email:", email);

// email = 12345; // Compile-time error: Type 'number' is not assignable to type 'string'

// 3) boolean -> true/false flags (logged in?, active?, enabled?)
let isLoggedIn: boolean = true;
let isPremiumUser: boolean = false;

if (isLoggedIn) {
  console.log("User is logged in");
}
console.log("Premium User?", isPremiumUser);

// isLoggedIn = "yes"; // Compile-time error: Type 'string' is not assignable to type 'boolean'

// 4) Arrays -> list of same-type values (very common in Angular for API lists)
let cartItemPrices: number[] = [199.99, 299.5, 149];
let tags: string[] = ["Angular", "TypeScript", "WebAPI"];

console.log("Cart Prices:", cartItemPrices);
console.log("Tags:", tags.join(", "));

// cartItemPrices.push("300"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'

// 5) null vs undefined (very important in Angular forms + API handling)
// null -> intentionally empty (you are setting it empty on purpose)
// undefined -> not assigned yet (value is missing/not initialized)
let selectedCoupon: string | null = null; // can be string OR null
let deliveryInstruction: string | undefined; // declared but not assigned => undefined

console.log("Selected Coupon:", selectedCoupon); // null
console.log("Delivery Instruction:", deliveryInstruction); // undefined

// Using them safely:
if (selectedCoupon === null) {
  console.log("No coupon applied yet.");
}

if (deliveryInstruction === undefined) {
  console.log("No delivery instruction provided yet.");
}

// 6) any -> allows ANY type (TypeScript stops protecting you) - NOT recommended in Angular
let dynamicValue: any = "100";

// TypeScript allows this, but it may crash at runtime depending on the value:
console.log("dynamicValue (any) as string:", dynamicValue.toUpperCase()); // works now

dynamicValue = 100;
// The next line compiles fine, but will crash at runtime because 100 has no toUpperCase()
// console.log(dynamicValue.toUpperCase()); // Runtime error if you uncomment

// 7) unknown -> safer than any (forces you to check type before use)
let apiResponse: unknown = "SUCCESS";

// console.log(apiResponse.toUpperCase()); // Error: Object is of type 'unknown'

// Safe usage with type check (type narrowing)
if (typeof apiResponse === "string") {
  console.log("API Response (string):", apiResponse.toUpperCase());
}

apiResponse = 200;

if (typeof apiResponse === "number") {
  console.log("API Response (number):", apiResponse.toFixed(2));
}

/////

/**
 * TypeScript Type Inference
 * Type Inference means:
 *  - You don't always need to write the type.
 *  - TypeScript "figures out" the type from the assigned value.
 *  - After inference, TypeScript enforces that type strictly.
 */

console.log("=== Type Inference Demo ===");

// 1) Inference from initial value
let courseName = "TypeScript Fundamentals"; 
// TypeScript inferred: courseName is a string
// So now courseName behaves like a string everywhere.

console.log("Course Name (upper):", courseName.toUpperCase()); // string method allowed

// courseName = 123; 
// Error (if you uncomment): Type 'number' is not assignable to type 'string'
// Because TypeScript already inferred courseName as string.

// 2) Inference from number calculation
let fee = 2000;          
// inferred as number

let gst = fee * 0.18;    
// inferred as number because it's a numeric calculation

let totalFee = fee + gst; 
// inferred as number

console.log("Fee:", fee);
console.log("GST:", gst);
console.log("Total Fee:", totalFee);

// totalFee = "3000"; 
// Error (if you uncomment): Type 'string' is not assignable to type 'number'

// 3) Inference in arrays (very common in Angular)
let modules = ["Intro", "TypeScript", "Angular Basics"];
// inferred type: string[] (array of strings)
// So TypeScript allows only strings in this array.

modules.push("Routing");  // allowed (string)

 //modules.push(100);     
// Error (if you uncomment): Argument of type 'number' is not assignable to parameter of type 'string'
console.log("Modules:", modules.join(", "));
console.log("=== End ===");


/////////////////


// 1) Define an interface (a contract for object shape)
interface IUser {
  id: number;          // required property
  name: string;        // required property
  email: string;       // required property
  isActive?: boolean;  // optional property (may or may not come from API)
}
// 2) Create an object that MUST match the interface shape
// We are NOT creating an object of the interface
// We are creating plain JavaScript objects that are checked against the interface
// It means: Create a normal JavaScript object, and tell TypeScript to VERIFY that it matches IUser
const user1: IUser = {
  id: 101,
  name: "Pranaya Rout",
  email: "pranaya@example.com"
  // isActive is optional, so we can skip it
};
const user2: IUser = {
  id: 102,
  name: "Ravi",
  email: "ravi@example.com",
  isActive: true
};

const user3: IUser = {
  id: 103,
  name: "A",
  email: "a@example.com",
  isActive: false
};
console.log("User1:", user1);
console.log("User2:", user2);
console.log("User3:", user3);
// user1.id = "103"; 
// Compile-time error if uncommented: Type 'string' is not assignable to type 'number'
// 3) Interface for list/array of objects (very common in Angular)
let users: IUser[] = [user1, user2];
users.push(user3); // allowed because user3 matches IUser

users = [user1, user2,user3];
console.log("Total Users:", users.length);
// users.push({ id: 103, name: "A", email: 123 });
// Error if uncommented: Type 'number' is not assignable to type 'string' (email must be string)
console.log("=== End ===");