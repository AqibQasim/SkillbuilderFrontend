export function filterObject(obj, includePassword = false) {
  const allowedKeys = [
    "id",
    "first_name",
    "last_name",
    "email",
    "profession",
    "location",
    "facebook_profile",
    "twitter_profile",
    "linkedin_profile",
  ];

  if (includePassword) {
    allowedKeys.push("password");
  }

  return Object.keys(obj).reduce((acc, key) => {
    if (allowedKeys.includes(key) && obj[key]) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}
