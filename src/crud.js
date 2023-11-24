const UserDao = require("./dao/userDao");

async function main() {
  const userDao = new UserDao();

  // Create a new user
  console.log("Creating a new user...");
  let user = await userDao.createUser("johndoe", "john@example.com");
  console.log("Created User:", user);

  // Update the user
  console.log("\nUpdating user's email...");
  user = await userDao.updateUser(user.id, "johndoe", "newjohn@example.com");
  console.log("Updated User:", user);

  // Fetch the updated user
  console.log("\nFetching the updated user...");
  const fetchedUser = await userDao.getUserById(user.id);
  console.log("Fetched User:", fetchedUser);

  // List all users
  console.log("\nListing all users...");
  const users = await userDao.listUsers();
  console.log("Users:", users);

  // Delete the user
  console.log("\nDeleting the user...");
  await userDao.deleteUser(user.id);
  console.log("User deleted.");

  // Verify deletion by trying to fetch the user
  console.log("\nTrying to fetch the deleted user...");
  const deletedUser = await userDao.getUserById(user.id);
  console.log("Fetched User after deletion (should be null):", deletedUser);
}

main().catch((err) => {
  console.error("Error running the app:", err);
});
