import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export function decodeToken  (token)  {
    if(typeof token !== "string"){
        return null;
    };

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        return decoded;
    } catch (error) {
        console.log(error)
        return null;
    }
}