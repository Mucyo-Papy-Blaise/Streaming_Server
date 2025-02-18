import { uploadToCloudinary } from "../cloudinary/cloudinaryConfig.js";

const uploadFileToCloudinary = async (files) => {
    const imageFile = files?.imageFile?.[0]?.buffer;
    const audioFile = files?.audioFile?.[0]?.buffer;

    let imageUrl;
    let audioUrl;

    try {
        if(imageFile){
            const uploadedImage =   await uploadToCloudinary(imageFile, "user_image", "image");
            imageUrl = uploadedImage?.url;
        };
    
        if(audioFile){
            const uploadedAudio =   await uploadToCloudinary(audioFile, "user_audio", "video");
            audioUrl = uploadedAudio?.url;
        }
    
        return {
            imageUrl: imageUrl || null,
            audioUrl: audioUrl || null,
        }
    } catch (error) {
        console.log(error)
        return null;
    }
}

export { uploadFileToCloudinary }