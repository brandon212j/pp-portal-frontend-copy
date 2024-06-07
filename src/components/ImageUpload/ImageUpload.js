import React from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import { Button } from "@mui/material/";

const ImageUpload = ({onImageSelect}) => {
  const [imagePreview, setImagePreview] = React.useState(null);

  const handleImageUpload = (files) => {
    console.log('Files:', files);
    if (files && files.length > 0) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageDataUri = e.target.result;
  
        setImagePreview(imageDataUri); // This is for displaying the preview
        onImageSelect(imageDataUri); // Pass the image data (in its original format) to onImageSelect
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const handleBackButton = () => {
    setImagePreview(null);
  };

  return (
    <div style={{ width: '500px', textAlign: 'center' }}>
      {imagePreview ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={imagePreview} alt="Preview" style={{ width: '500px', height: '225px', objectFit: 'cover' }} />
          <Button variant="contained" onClick={handleBackButton} style={{ marginTop: '10px' }}>Change Image</Button>
        </div>
      ) : (
        <DropzoneArea
          acceptedFiles={['image/*']}
          dropzoneText={"Drag and drop an image here or click"}
          onChange={handleImageUpload}
          filesLimit={1}
          maxFileSize={30000000}  // 30 MB limit
        />
      )}
    </div>
  );
};

export default ImageUpload;
