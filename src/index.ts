import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
