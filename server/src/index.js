import express, { json } from "express";
import cors from "cors";
import router from "./Routes/routes.js";

const app = express();
app.use(cors());
app.use(json());

app.use(router);

app.listen(3001, () => {
  console.log("Server is running at http://localhost:3001");
});
