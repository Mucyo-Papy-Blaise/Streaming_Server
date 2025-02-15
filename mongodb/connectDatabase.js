import mongoose from "mongoose"

const connectDB = async (url) => {
    try {
        const conn = await mongoose.connect(url)
        if(conn){
            console.log("Connect to database was successfully.")
        }
    } catch (error) {
        console.log("Fail to connect to database.")
    }
};

export { connectDB }