import express from "express";
import cors from "cors";

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get("/api/hello", (_req, res) => {
  res.json({ message: "Hello from your new backend!" });
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
