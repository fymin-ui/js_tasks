const users = [
  { name: "Frank", address: { city: "New York" } },
  { name: "Shine" },
  { name: "Cris", address: { city: "San Francisco" } },
  { name: "Diana", address: {} },
];

users.forEach(user => {
  const city = user.address?.city ?? "Unknown";
  console.log(`${user.name}'s city: ${city}`);
});
