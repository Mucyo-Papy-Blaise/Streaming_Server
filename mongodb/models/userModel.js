import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    username: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true, min: 4 },
    allMix: { type: mongoose.Schema.Types.ObjectId, refence: 'Mix' },
},{
    timestamps: true
})

const User = mongoose.model("User", userSchema);
export { User };