require("dotenv").config();
// require("./db").connect(process.env.MONGO_DB);
const express = require("express");
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 2345;

app.use(express.json());
app.use(cors());

app.get('/test', async (req,res)=>{
    res.send({
        msg : "Hello World",
        secret : process.env.SECRET,
        arr : ["beni","moshe","mika"],
        mongoUrl : process.env.MONGO_DB
    })
})


app.listen(PORT, () => {
  console.log("server listen to " + PORT);
});
