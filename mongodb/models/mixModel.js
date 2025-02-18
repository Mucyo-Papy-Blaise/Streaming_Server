import mongoose from 'mongoose';

const mixSchema = new mongoose.Schema({
    producer: { type: String, required: true },
    songTitle: { type: String, required: true },
    artist: { type: String, required: true },
    genre: { type: String, required: true },
    releasingDate: { type: String, required: true },
    description: { type: String, required: true },
    audioUrl: { type: String, required: true },
    imageUrl: { type: String, required: true },
    creator: { type: mongoose.Schema.Types.ObjectId, reference: "User"}
}, {
    timestamps: true
})

const Mix = mongoose.model("Mix", mixSchema);

export { Mix }