import React, { useEffect, useState } from 'react'

function Preview({ image, imgArr, index, currentImage, files, imagesSetter, setMainPreview, setMPrevIndex }) {
    // console.log("images received => ",image)
    const [preview, setPreview] = useState(null);
    useEffect(() => {
        // console.log("preview => ", preview)
        if (imgArr.length <= files.length) {
            // if(imgArr.length<1) imagesSetter([preview])
            // else 
            // if (imgArr.length < files.length) imgArr.push(preview)
            // 
            // console.log("preview are => ",imgArr)
            // imagesSetter(imgArr)
        }
    }, [preview])
    useEffect(() => {
        let fileReader = new FileReader();
        fileReader.onload = (e) => {
            const { result } = e.target;
            if (result) {
                setPreview(result)
                let name = image.name
                if (imgArr.length < files.length) imgArr.push({ name: image.name, image: result })
                // imagesSetter([...imgArr,result])
                // console.log("preview => ", result)
                if (index === 0) setMainPreview(result)
            }
        }
        fileReader.readAsDataURL(image)
    }, [])
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