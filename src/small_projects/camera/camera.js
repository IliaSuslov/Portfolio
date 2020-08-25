import React from 'react';

function CameraWeb() {
    const handleImageChange = (event) => {
        this.setState({
            image: URL.createObjectURL(event.target.files[0])
        })
    }
    return (
        <div>
            <label>

                <input
                    type='file'
                    accept="image/*"
                    capture="environment"
                    onChange={handleImageChange} />
            </label>
        </div>
    );
}
export default CameraWeb
