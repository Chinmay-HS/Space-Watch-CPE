const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require ("cookie-parser");
dotenv.config();
const cors = require ("cors");


//set up server
const app = express();
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server Started on port: ${PORT}`));
app.use(express.json());
app.use(cookieParser());
app.use(   
    cors({
        origin: ["http://localhost:3000"],
        /* origin: ["http://localhost:3000"], */
        credentials: true,
    })
);
// connect to mongo db 

mongoose.set('strictQuery', true)
mongoose.connect(process.env.MDB_CONNECT, {useNewUrlParser: true, useUnifiedTopology: true } )
.then(() => console.log('Connected Successfully'))
.catch((err) => { console.error(err);});

//set up user routes 

app.use("/auth", require("./routers/userRouter"));
app.use("/customer", require("./routers/customerRouter"));
app.use("/apod", require("./routers/apodRouter"));
