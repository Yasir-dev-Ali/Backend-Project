import  express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";



dotenv.config();

const app = express();

// Middleware   
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());





// DATABASE CONNECTION
import  connect from "./Database/db.js";
connect();

// Routes   
import userRoute from "./Routes/user.route.js";
import todoRoute from "./Routes/TodoRoute.js";
app.use("/api", userRoute);
app.use("/api", todoRoute);

const  PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}   )
