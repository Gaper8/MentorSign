import express from "express";
import "dotenv/config";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ 'Hello, World!': 'MentorSign project!' });
});

app.get("/db", async (_req, res) => {
  try {
    const result = await pool.query("SELECT 1 as ok;");
    res.json({ db: "ok", result: result.rows[0] });
  } catch (e: any) {
    res.status(500).json({ db: "error", message: e?.message ?? "unknown" });
  }
});

const port = Number(process.env.PORT ?? 3001);
app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});