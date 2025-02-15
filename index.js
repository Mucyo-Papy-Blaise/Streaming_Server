import express from "express";
import cors from 'cors'
import { mixRouter } from "./routes/mixRoutes.js";
import { userRouter } from "./routes/userRoutes.js";
import { connectDB } from "./mongodb/connectdatabase.js";

const app = express()

const MONGODB_URL = 'mongodb+srv://mucyoblaise86:ufPi0WVuWhpUyiEn@cluster0.oce66.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

app.use(cors()) // Give cross origin access
app.use(express.json()) // Gives you access to bring data from client
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

app.get("/", (req, res) => {
    res.send({ message: "Steaming server side."})
})

app.use("/mix", mixRouter)  // Calling route for mix starting with "/mix"
app.use("/user", userRouter) // Calling route for user starting with "/user"

app.listen(5000, () => {
    try {
        connectDB(MONGODB_URL);
    } catch (error) {
        console.log(error)
    }
})


// ufPi0WVuWhpUyiEn
// mucyoblaise86

// mongodb+srv://mucyoblaise86:ufPi0WVuWhpUyiEn@cluster0.oce66.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0