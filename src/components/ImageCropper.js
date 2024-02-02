// Code adapted from tutorial by 'Code Like a Pro'
// with help of chatGPT: https://www.youtube.com/watch?v=MWzaItRRTXw

import {
  Box,
  DialogActions,
  DialogContent,
  Slider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Cropper from "react-easy-crop";
import Button from "./Button";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import getCroppedImg from "../utils/cropImage";

const ImageCropper = ({ image, onCropComplete }) => {
  const history = useHistory();
  // const [hasLoaded, setHasLoaded] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  // eslint-disable-next-line
  const [croppedImage, setCroppedImage] = useState(null);

  const cropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const zoomPercentage = (value) => {
    return `${Math.round(value * 100)}%`;
  };

  const cropImage = async () => {
    try {
      if (!image) {
        console.error("Image is not defined");
        return;
      }
      const cropped = await getCroppedImg(image, croppedAreaPixels); // Call your cropping function
      setCroppedImage(cropped);
      onCropComplete(cropped); // Pass the cropped image back to parent
    } catch (error) {
      console.error("Error cropping image:", error);
    }
  };

  return (
    <>
      <DialogContent
        dividers
        sx={{
          background: "#333",
          position: "relative",
          height: 400,
          width: "auto",
          minWidth: { sm: 500 },
        }}
      >
        <Cropper
          image={image}
          crop={crop}
          zoom={zoom}
          aspect={1}
          onZoomChange={setZoom}
          onCropChange={setCrop}
          onCropComplete={cropComplete}
        />
      </DialogContent>
      <DialogActions sx={{ flexDirection: "colum", mx: 3, my: 2 }}>
        <Box sx={{ width: "100%", mb: 1 }}>
          <Box>
            <Typography>Zoom: {zoomPercentage(zoom)}</Typography>
            <Slider
              valueLabelDisplay="auto"
              valueLabelFormat={zoomPercentage}
              min={1}
              max={3}
              step={0.1}
              value={zoom}
              onChange={(e, zoom) => setZoom(zoom)}
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <Button onClick={() => history.goBack()}>Cancel</Button>
          <Button onClick={cropImage}>Crop</Button>
        </Box>
      </DialogActions>
    </>
  );
};

export default ImageCropper;
