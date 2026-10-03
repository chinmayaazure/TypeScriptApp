/**
 * TypeScript Functions
 * Goal: Understand function concepts in TypeScript:
 *  1) Parameter types
 *  2) Optional parameter (?)
 *  3) Default parameter
 *  4) Return type
 *  5) void return type
 */

console.log("=== Functions Demo ===");

/**
 * Calculates the final payable amount.
 * @param amount       -> required parameter (must be number)
 * @param discountPct  -> optional parameter (may be provided or not)
 * @param gstPct       -> default parameter (if not passed, 18 is used)
 * @returns number     -> function returns a number
 */

function calculatePayableAmount(
  amount: number,
  discountPct?: number,     // optional parameter (can be undefined)
  gstPct: number = 18       // default parameter (used when caller doesn't pass it)
): number {
  // If discountPct is not provided, treat it as 0
  const discount = amount * ((discountPct ?? 0) / 100);

  // Apply discount first
  const amountAfterDiscount = amount - discount;

  // Apply GST on discounted amount
  const gst = amountAfterDiscount * (gstPct / 100);

  // Final payable amount
  return amountAfterDiscount + gst;
}

// Call #1: Only required argument (discountPct not given, gstPct uses default 18)
const bill1 = calculatePayableAmount(2000);
console.log("Bill1 (no discount, default GST 18%):", bill1);

// Call #2: Discount given, GST uses default
const bill2 = calculatePayableAmount(2000, 10);
console.log("Bill2 (10% discount, default GST 18%):", bill2);

// Call #3: Discount and custom GST given
const bill3 = calculatePayableAmount(2000, 10, 5);
console.log("Bill3 (10% discount, GST 5%):", bill3);

// calculatePayableAmount("2000"); 
// Compile-time error if uncommented: Argument of type 'string' is not assignable to parameter of type 'number'

/**
 * A void function: returns nothing.
 * Common in Angular for logging, button click handlers, etc.
 */
function printInvoiceMessage(customerName: string): void {
  console.log(`Invoice generated for: ${customerName}`);
  // no return statement needed because return type is void
}

printInvoiceMessage("Pranaya Rout");

console.log("=== End ===");