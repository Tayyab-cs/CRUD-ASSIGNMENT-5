const express = require('express');
const app = express();
const cors = require('cors');
const userRouter = require('./routes/userRoutes');
const bodyParser = require('body-parser');


/* 
// Testing Route
app.get('/', (req, res) => {
    res.send("GET API")
})
*/

// MIDDLEWARES  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use('/api/users', userRouter);

require('dotenv').config();   
const PORT = process.env.PORT || 3000;

require('./database/connect.js')();

app.listen(PORT, () => {
    console.log(`This is ruuning on port ${PORT}`);
})
