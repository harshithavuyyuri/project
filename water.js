const express = require('express');
const multer = require('multer');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up a storage engine for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Define a route for handling image uploads
app.post('/upload', upload.single('image'), (req, res) => {
  // Access the uploaded image data using req.file.buffer
  // You can now process the image data or send it to an external API
  // For example, you can use the provided code to send the image to an external API for text extraction

  // Handle the image data here
  const imageData = req.file.buffer;

  // Send a response (you can customize this)
  res.json({ message: 'Image uploaded successfully', data: imageData });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
