import { Mix } from "../mongodb/models/mixModel.js"
import { uploadFileToCloudinary } from "../utils/uploadFile.js";

const createMix = async (req, res) => {
    const files = req.files;
    const fileUrls = await uploadFileToCloudinary(files);
    console.log(fileUrls)
    const {
        producer,
        songTitle,
        artist,
        genre,
        releasingDate,
        description,
    } = req.body;
    try {
        const newMix = new Mix(({
            producer,
            songTitle,
            artist,
            genre,
            releasingDate,
            description,
            audioUrl: fileUrls.audioUrl,
            imageUrl: fileUrls.imageUrl,
        }));

        const mix = await newMix.save();
        res.status(200).json({ mix })
    } catch (error) {
        console.log(error)
    }
};

const getAllMix = async (req, res) => {
    try {
        const allMix = await Mix.find();
        console.log("allMix", allMix)
        res.status(200).json(allMix);
    } catch (error) {
        res.status(500).json({ message: "Inetrnal sercer error" })
    }
};

const getsingleMix = async () => {}

const updateMix = async () => {}
const deleteMix = async () => {}

export { createMix, getAllMix, getsingleMix, updateMix, deleteMix }