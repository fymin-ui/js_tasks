const users = [
  { name: "Frank", address: { city: "New York" } },
  { name: "Shine" },
  { name: "Cris", address: { city: "San Francisco" } },
  { name: "Diana", address: {} },
];

users.forEach(user => {
  let city = user.address?.city ?? "Unknown";
  alert(city);
}); 
