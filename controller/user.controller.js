import jwt from "jsonwebtoken";
import { User } from "../mongodb/models/userModel.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { decodeToken } from "../utils/verifyToken.js";

dotenv.config();

const secretKey = process.env.SECRET_KEY;

const createUser = async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        username,
        email,
        password
      } = req.body;

      const isUserExist = await User.findOne({ email: email });
      if(isUserExist) throw new Error("User already exist");

      const salt = bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        firstName,
        lastName,
        username,
        email,
        password: hashedPassword,
      });

      const databaseUser = await newUser.save();
      res.status(200).json({ message: "User created successfully", databaseUser });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if(!user) throw new Error("User doesn't exist.");

    const verlifyPassword = await bcrypt.compare(password, user.password);
    if(!verlifyPassword) throw new Error("Invalid credentials.")

      const token = jwt.sign({ id: user._id }, secretKey)

      res.status(200).json({ token, user })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Internal server error" })
  }
}

const getSingleUser = async (req, res) =>{
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  const token = authHeader.split(' ')[1]; // Get token after "Bearer"
  const user = decodeToken(token);

  if (!user) {
      return res.status(403).json({ error: 'Forbidden: Invalid token' });
  }

  try {
    const loggedInUser = await User.findById({ _id: user.id })
    res.json({ loggedInUser })
  } catch (error) {
    res.json({ message: "Internal server error "})
  }



}

const getAllUsers = async () => {}
const updateUser = async () => {}
const deleteUser = async () => {}

export {
    createUser,
    loginUser,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser,
}