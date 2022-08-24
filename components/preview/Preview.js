import React, { useEffect, useState } from 'react'

function Preview({ image, index ,currentImage, setMainPreview, setMPrevIndex}) {
    // console.log("images received => ",image)
    const [preview, setPreview] = useState(null);
    useEffect(() => {
        // console.log("preview => ", preview)
    }, [preview])
    useEffect(() => {
        let fileReader = new FileReader();
        fileReader.onload = (e) => {
            const { result } = e.target;
            if (result) {
                // console.log("images array => : ", imageArr)
                setPreview(result)
                // console.log("preview => ", result)
                if (index===0) setMainPreview(result)
            }
        }
        fileReader.readAsDataURL(image)
    }, [image])
    return (
        <img className={preview == currentImage ? "scrollItemImage selected" : "scrollItemImage"}
            // style={{ width: '60px', height: '60px', marginLeft: '5px', borderRadius: "10px" }}
            onClick={() => { 
                setMainPreview(preview) 
                setMPrevIndex(index)
            }} src={preview} alt="preview" />
    )
}

export default Preview