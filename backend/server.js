import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    ok: true,
    service: "APKTOP Build Server"
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("APKTOP Build Server ishlayapti");
});
