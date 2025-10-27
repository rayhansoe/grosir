import type { Cart } from "../shopify/types";

// --- Helper Function for Currency Formatting ---

/**
 * Formats a Money object into the "Rp 1,234.56" format.
 * Uses 'en-US' locale for (,) thousands and (.) decimals,
 * and prepends "Rp " (with a non-breaking space).
 */
function formatAsRp(currency: string, amount: string): string {

  // Use 'en-US' locale to get the comma/period style from the example
  const numberFormatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const formattedAmount = numberFormatter.format(parseFloat(amount));

  // \u00A0 is a non-breaking space
  return `${currency}\u00A0${formattedAmount}`;
}

/**
 * Converts a Shopify cart object into a formatted summary string.
 * @param cart The Shopify cart object.
 * @returns A formatted string summary of the cart.
 */
export function convertCartToString(cart: Cart): string {
  // Use an array to build the string line by line
  const output: string[] = [];
  output.push("Cart");
  output.push(""); // Blank line after title

  // Process each line item
  for (const line of cart.lines) {
    const productName = line.merchandise.product.title;
    
    // Handle the special case where "Default Title" should be shown as "-"
    const variantName = line.merchandise.title === "Default Title"
      ? "-"
      : line.merchandise.title;
      
    const quantity = line.quantity;
    const price = formatAsRp(line.cost.totalAmount.currencyCode, line.cost.totalAmount.amount);

    output.push(`Name: ${productName}`);
    output.push(`Variant: ${variantName}`);
    output.push(`Qty: ${quantity}`);
    output.push(`Price: ${price}`);
    output.push(""); // Blank line after each item
  }

  // --- UPDATED TOTALS SECTION ---
  const taxes = formatAsRp(cart.cost.totalTaxAmount.currencyCode, cart.cost.totalTaxAmount.amount);
  const total = formatAsRp(cart.cost.totalAmount.currencyCode, cart.cost.totalAmount.amount);

  // Add the total quantity
  output.push(`Total Qty: ${cart.totalQuantity}`);
  
  // Add the taxes
  output.push(`Taxes: ${taxes}`);

  // Add the total price (label changed from "Total" to "Total Price")
  output.push(`Total Price: ${total}`);
  output.push(""); // Final trailing newline
  // --- END OF UPDATES ---

  // Join all lines with a newline character
  return output.join("\n");
}