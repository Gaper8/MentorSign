import express from "express";
import "dotenv/config";

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ 'Hello, World!': 'MentorSign project!' });
});

const port = Number(process.env.PORT ?? 3001);
app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});