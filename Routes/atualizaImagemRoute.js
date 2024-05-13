//Codigo comentado que deveria mudar a imagem de perfil no lado do servidor
// const express = require('express');
// const multer = require('multer');
// const app = express();
//
// // Preparação do Multer
// const upload = multer({
//
//     dest: 'user/',
//     limits: {
//         fileSize: 10000000, // Limit file size to 10MB
//     },
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
//             return cb(new Error('Please upload an image file (jpg, jpeg, or png).'));
//         }
//         cb(undefined, true);
//     },
// });
//
// app.post('/Routes/atualizaImagemRoute', upload.single('profilePicture'), (req, res) => {
//     // req.file is the 'profilePicture' file
//     // req.body will hold the text fields, if there were any
//
//     // Here, you would update the user's profile picture in your database
//     // For now, we'll just send a success response
//     res.json({ success: true });
// }, (error, req, res, next) => {
//     // This is error handling middleware. If multer or our route handler throws an error, this will run.
//     res.status(400).json({ error: error.message });
// });
//
// module.exports = upload;
