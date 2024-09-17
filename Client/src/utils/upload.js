import axios from 'axios';

const upload_preset = import.meta.env.VITE_UPLOAD_PRESET; // Ensure this is correctly defined in your .env file
const cloud_name = import.meta.env.VITE_CLOUD_NAME; // Ensure this is correctly defined in your .env file

const upload = async (file) => {
  const uploadData = new FormData(); // Correctly create FormData instance
  uploadData.append('file', file);
  uploadData.append('upload_preset', upload_preset);
  uploadData.append('cloud_name', cloud_name);

  try {
    const res = await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, uploadData);
    const url = res.data.url; // Correctly access the URL from response data
    return url;
  } catch (err) {
    console.error('Upload error:', err); // Improved error logging
    throw err; // Optionally re-throw the error if needed
  }
};

export default upload;
