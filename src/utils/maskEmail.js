export function maskEmail(email) {
  if (!email || typeof email !== "string") {
    console.error("Invalid email provided");
    return "";
  }
  const [localPart, domain] = email.split("@");
  if (!localPart || !domain) {
    console.error("Invalid email format");
    return email;
  }
  const firstChar = localPart[0];
  const maskedLocalPart = firstChar + "*".repeat(localPart.length - 1);
  return `${maskedLocalPart}@${domain}`;
}
