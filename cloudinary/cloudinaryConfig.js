import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import multer from "multer";
dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = multer.memoryStorage();

const uploadMedia = multer({
    storage,
    limit: { fileSize: 20 * 1024 * 1024 }, // 20Mb
    fileFilter: (req, file, cb) => {
        if(
            file.mimetype.startsWith("image/") ||
            file.mimetype.startsWith("audio/")
        ){
            cb(null, true)
        }else{
            cb(new Error(`Invalid file type: ${file.mimetype}`), false)
        }
    }
})

const uploadFiles = uploadMedia.fields([
    { name: "imageFile", maxCount: 1 },
    { name: "audioFile", maxCount: 1 }
])

// Upload to cloidinary
const uploadToCloudinary = (fileBuffer, fileFolder, fileType) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
            {
                folder: fileFolder,
                resource_type: fileType
            },(error, result) => {
                if(error){
                    reject(error)
                } else {
                    resolve(result)
                }
            }
        ).end(fileBuffer)
    })
};

export { uploadFiles, uploadToCloudinary }