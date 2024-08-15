export function safeConvertToNumber(value) {
  // Check if the value is already a number
  if (typeof value === "number") {
    return value;
  }

  // Convert string to number
  const convertedValue = Number(value);

  // Check if the conversion is successful
  if (isNaN(convertedValue)) {
    // Handle the case where conversion failed (e.g., return 0 or a default value)
    return 0;
  }

  return convertedValue;
}

export function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

// export function formatCurrency(amount, currency = "USD", locale = "en-US") {
//   return new Intl.NumberFormat(locale, { style: "currency", currency }).format(
//     amount,
//   );
// }
