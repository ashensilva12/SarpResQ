const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./router/user');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/sarpresq');

app.use('/api/user', userRouter);

app.get('/', (req, res) => {
  res.send('SarpResQ backend running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
