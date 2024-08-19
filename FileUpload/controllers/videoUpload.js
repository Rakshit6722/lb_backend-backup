const cloudinary = require('cloudinary').v2;
const File = require('../model/File')

function isValid(fileType,supportedType){
    return supportedType.includes(fileType)
}

function cloudinaryUpload(file,folder){
    const options = {folder}
    options.resource_type = "auto"
    const data = cloudinary.uploader.upload(file.tempFilePath,options)
    return data
}

exports.videoUpload = async (req,res) =>{
    try{
        const{name,tag,email} = req.body
    
        const file = req.files.file
        console.log(file)
    
        const supportedType = ["mp4","mov"];
        const fileType = file.name.split('.')[1].toLowerCase();
        console.log(fileType)

        if(!isValid(fileType,supportedType)){
            return res.status(404).json({
                message:"invalid file format"
            })
        }

        const uploadedVideo = await cloudinaryUpload(file,"myFolder")
        console.log(uploadedVideo)
    
        const dbFile = await File.create({
            name,
            tag,
            email,
            imageURL:uploadedVideo.secure_url
        })
    
        res.status(200).json({
            success:true,
            uploadedVideo
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:'Operation failed'
        })
    }




}