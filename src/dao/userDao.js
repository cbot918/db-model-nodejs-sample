const db = require("../util/util");
const User = require("../models/user");

class UserDao {
  // Create a new user
  async createUser(username, email) {
    const [result] = await db.execute(
      "INSERT INTO users (username, email) VALUES (?, ?)",
      [username, email]
    );
    return new User(result.insertId, username, email);
  }

  // Get a user by ID
  async getUserById(userId) {
    const [rows] = await db.execute("SELECT * FROM users WHERE id = ?", [
      userId,
    ]);
    if (rows.length === 0) return null;
    const { id, username, email } = rows[0];
    return new User(id, username, email);
  }

  // Update a user
  async updateUser(id, username, email) {
    await db.execute("UPDATE users SET username = ?, email = ? WHERE id = ?", [
      username,
      email,
      id,
    ]);
    return new User(id, username, email);
  }

  // Delete a user
  async deleteUser(id) {
    await db.execute("DELETE FROM users WHERE id = ?", [id]);
  }

  // List all users
  async listUsers() {
    const [rows] = await db.execute("SELECT * FROM users");
    return rows.map((row) => new User(row.id, row.username, row.email));
  }
}

module.exports = UserDao;
