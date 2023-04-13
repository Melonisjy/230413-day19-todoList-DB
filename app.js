const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user");

const app = express();

const port = 3010;

app.use(cors());
app.use(express.json());
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("hello, express");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
