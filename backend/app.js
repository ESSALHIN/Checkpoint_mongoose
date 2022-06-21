const express = require("express");
const connectDB = require ('./config/connection')
const app = express();
// connect database
connectDB();


//middleware
app.use(express.json())

app.use('/api/products',require('./routes/product'))

const port=3000;
app.listen(port, () => console.log(`server started on port ${port}`));