import React, { Fragment, useRef } from 'react';
import { Camera } from 'react-cam';

function capture(imgSrc) {
    console.log(imgSrc);
}

const CameraWeb = () => {
    const cam = useRef(null);
    return (
        <Fragment>
            <Camera
                showFocus={true}
                front={false}
                capture={capture}
                ref={cam}
                width="auto"
                height="auto"
                // focusWidth="10%"
                // focusHeight="10%"
                btnColor="white"
            />
            <button onClick={img => cam.current.capture(img)}>Take image</button>
        </Fragment>
    );
};
export default CameraWeb