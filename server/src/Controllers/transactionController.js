import pool from "../db.js";

export const transaction = async (req, res) => {
  const { user_id, amount, type, date } = req.body;

  try {
    const result = await pool.query(
      `
            INSERT INTO transactions (user_id, amount, type, date)
            VALUES ($1, $2, $3, $4)
            RETURNING *
        `,
      [user_id, amount, type, date]
    );

    const balanceUpdate = type === "income" ? amount : -amount;
    await pool.query(
      `
            UPDATE users 
            SET balance = balance + $1 
            WHERE id = $2
        `,
      [balanceUpdate, user_id]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error adding transaction");
  }
};
