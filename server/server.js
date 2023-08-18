const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure CORS
const allowedOrigins = [
    'http://localhost3001'
];
app.use(cors({
    origin: allowedOrigins,
}));

// Routes

// Connect to mongoDB
mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connect to database.'))
    .catch(console.error); 

// Listen to backend port / start the server
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Sever started on port ${port}`));
