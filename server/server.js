import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDatabase from "./db/db.js";
import saleRouter from "./routes/sale.router.js";
import inventoryRouter from "./routes/inventory.router.js";

dotenv.config({ path: "./config.env" });

connectDatabase();

const corsOptions = {
  origin: "*",
};

const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use("/sale", saleRouter);
app.use("/inventory", inventoryRouter);

app.get("/", (req, res) => {
  res.status(201).json({ message: "Connected to Backend!" });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`App is Listening on PORT ${PORT}`);
});
