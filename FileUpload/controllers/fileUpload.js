const File = require('../model/File')
const cloudinary = require('cloudinary').v2

exports.localFileUpload = async (req, res) => {
    try {
        const file = req.files.file;
        let path = __dirname + "/file/" + Date.now() + `.${file.name.split('.')[1]}`

        console.log(path)

        file.mv(path)

        res.status(200).json({
            success: true,
            file,
            message: 'file uploaded successfully'
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'server error'
        })
    }
}
function isValid(fileType, supportedType) {
    return supportedType.includes(fileType);
}

async function uploadFileCloudinary(file, folder) {
    const options = { folder }
    //options.resource_type = "auto"
    const data  = await cloudinary.uploader.upload(file.tempFilePath, options)
    return data
}

exports.cloudinaryFileUpload = async (req, res) => {

    try {

        const { name, tag, email } = req.body;
        console.log(name,tag,email)
        // console.log(name)
        const file = req.files.file
        // console.log(file)
        console.log(file)
        //validate 
        const fileType = file.name.split('.')[1].toLowerCase();
        console.log(fileType)
        const supportedType = ["jpg", "jpeg"]

        if (!isValid(fileType, supportedType)) {
            return res.status(404).json({
                message: "file type not supported"
            })
        }

        //uploading on cloudinary
        const response = await uploadFileCloudinary(file, "myFolder")
        console.log(file)
        console.log(response)
        const dbFile = new File({
            name,
            tag,
            email,
            imageURL:response.secure_url
        })
        const savedDb = await dbFile.save();

        res.status(200).json({
            data: file,
            message: 'file uploaded successfully',
            dbFile
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            error: err
        })
    }

}
