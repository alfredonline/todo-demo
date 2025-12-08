const express = require("express");
const PORT = 3001;
const routes = require("./routes")

const app = express();

app.use(express.json()); // allows us to read the JSON body of requests



app.use("/", routes)


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

// http://localhost:3001/