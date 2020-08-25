import React from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

function CameraWeb(props) {
    function handleTakePhoto(dataUri) {
        // Do stuff with the photo...
        alert("takePhoto");
    }

    return (
        <Camera
            onTakePhoto={(dataUri) => { handleTakePhoto(dataUri); }}
        />
    );
}
export default CameraWeb
