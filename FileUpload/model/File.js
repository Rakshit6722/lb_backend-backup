const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
require('dotenv').config();

const fileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageURL: {
        type: String
    },
    tag: {
        type: String
    },
    email: {
        type: String
    }
});

// Create nodemailer transport
const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: 465, // Use port 465 for secure connection
    secure: true, // Use true for port 465
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    },
    // logger: true,
    // debug: true,
    connectionTimeout: 60000, // Increase connection timeout to 60 seconds
    greetingTimeout: 60000 // Increase greeting timeout to 60 seconds
});

fileSchema.post('save', async function(doc) {
    try {
        let info = await transporter.sendMail({
            from: `"File Upload Service" <${process.env.USER}>`, // Use the email from environment variables
            to: `${doc.email}`,
            subject: 'Mail sent',
            html: `File URL: ${doc.imageURL}`
        });

        console.log(info);
    } catch (err) {
        console.log(err);
    }
});

module.exports = mongoose.model('File', fileSchema);
