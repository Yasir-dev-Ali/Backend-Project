import  express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware   
app.use(express.json());




// DATABASE CONNECTION
import  connect from "./Database/db.js";
connect();

// Routes   
import userRoute from "./Routes/user.route.js";
app.use("/api", userRoute);

const  PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}   )
