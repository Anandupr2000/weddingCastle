import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { CameraIcon, PlusIcon } from "@heroicons/react/outline"
import { minWidth } from '@mui/system';
import ImagePrev from './preview/ImagePrev';
import { db, storage } from "../db/firebase"
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { loadedGif } from '../images/gifs/tick-box.gif'
import { addDoc, collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: minWidth,
    maxWidth: 700,
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius: "15px",
    boxShadow: 24,
    p: 4,
};
const imageTypeRegex = /image\/(png|jpg|jpeg)/gm;

function Upload() {
    const filePickerRef = React.useRef(null)
    let [open, setOpen] = React.useState(false)
    const [mainPreviewIndex, setMainPreviewIndex] = React.useState(0);
    const [selectedFile, setSelectedFile] = React.useState(null)

    const [imageFiles, setImageFiles] = React.useState([]);
    const [images, setImages] = React.useState([])
    const [progress, setProgress] = React.useState(0)
    // const [loaded, setLoaded] = React.useState(false)

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const addImage = (e) => {
        // return new Promise((resolve, reject) => {
        console.log("No of files selected => ", e.target.files.length)
        // console.log("files => ", e.target.files)
        const { files } = e.target
        const validImageFiles = []
        for (let i = 0; i < files.length; i++) {
            if (files[i].type.match(imageTypeRegex)) {
                validImageFiles.push(files[i])
            }
        }
        if (validImageFiles.length) {
            setImageFiles(validImageFiles)
            // console.log("valid files are : ", validImageFiles)
            return
        }
        if (!validImageFiles.length && !imageFiles)
            alert("Please select only images")
        // })
    }
    const uploadFiles = (e) => {
        e.preventDefault()
        const bytesTransferred = 0;
        const totalFilesSize = 0;
        // const storageRef = 
        for (var i = 0; i < imageFiles.length; i++) {
            console.log((imageFiles[i].size))
            console.log((imageFiles[i].size) / 1024)
            totalFilesSize += imageFiles[i].size
        }
        console.log("total size = ", totalFilesSize)
        imageFiles.map((file, index) => {
            const uploadTask = uploadBytesResumable(ref(storage, `images/${file.name}`), file);
            // imageFiles[i].size
            uploadTask.on('state_changed', (snapshot) => {
                bytesTransferred += snapshot.bytesTransferred
                setProgress((bytesTransferred / totalFilesSize) * 100)
            }, (err) => {
                // alert("error occured")
                console.log("Error occured => ", err)
            }, async () => {
                console.log(index)
                console.log("file uploaded successfully")
                await setDoc(doc(db,`images/${file.name}`),{
                    time:serverTimestamp(),
                    image:await getDownloadURL(uploadTask.snapshot.ref)
                })
                // getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                //     console.log('File available at', downloadURL);
                //   });
                // uploadedFiles += 1
                // imageFiles.splice(index, 1)
                // images.splice(index, 1)  
                if (imageFiles.length) {
                    setProgress(0)
                    setImages([])
                    setImageFiles([])
                    // setTimeout(() => { setLoaded(true) }, 5000)
                    // setLoaded(false)
                }
            })
        })
    }
    const removeSelected = (e) => {
        e.preventDefault()
        console.log("removeBtn clicked")
        imageFiles.splice(mainPreviewIndex, 1)
        images.splice(mainPreviewIndex, 1)
        setSelectedFile(null)
    }
    React.useEffect(() => {
        console.log("contents of selected images =>  ", images)
        return (
            console.log("contents of selected images =>  ", images)
        )
    }, [images])
    console.log(images)
    return (
        <div className="upload">
            <div style={{}}>
                <Button
                    onClick={handleOpen}>
                    <span style={{ fontsize: "20px" }}>
                        <PlusIcon className="addBtn" />  ADD
                    </span>

                </Button>
            </div>
            <Modal
                style={{ border: "none" }}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {
                        // selectedFile &&
                        imageFiles.length > 0 &&
                        <div className="imageSelector">
                            {
                                selectedFile && <img src={selectedFile} className="image" />
                            }
                            <Button className="clearBtn" onClick={removeSelected}>
                                <PlusIcon />
                            </Button>
                            <div style={{ height: "70px", marginTop: "30px" }}>
                                {/* <ImagePrev imageArr={["https://cdn.flashtalking.com/xre/416/4167854/3873396/image/3873396.gif?792812415","https://cdn.flashtalking.com/xre/416/4167854/3873396/image/3873396.gif?792812415"]}  */}
                                {
                                    imageFiles ?
                                        <ImagePrev images={images} files={imageFiles} imagesSetter={setImages}
                                            setMPrevIndex={setMainPreviewIndex} currentImage={selectedFile} setSelectedImage={setSelectedFile} />
                                        : console.log("Empty image array")
                                }
                            </div>
                            <div style={{ paddingTop: "30px" }}>
                                {/* {
                                    !progress &&
                                    <Button onClick={handleClose}>Close</Button>
                                } */}
                                <Button onClick={() => {
                                    setImageFiles([])
                                    setImages([])
                                }} disabled={progress ? true : false}>Clear all</Button>
                                <Button type="submit"
                                    onClick={uploadFiles}
                                    disabled={progress ? true : false} >Upload</Button>
                                <span>{imageFiles.length}</span>
                                {
                                    // progress && 
                                    <progress style={{ marginLeft: "30px", marginTop: "10px" }} value={progress}></progress>
                                }
                            </div>
                        </div>
                    }
                    {
                        // !selectedFile &&
                        imageFiles.length < 1 &&
                        // display: "flex",
                        // flexDirection: "column",
                        // placeItems: "center",
                        <div className="imageControls">
                            <input ref={filePickerRef} type="file" name="" id=""
                                accept="image/png, image/jpg, image/jpeg"
                                onChange={addImage} hidden multiple />
                            <CameraIcon className='camera' onClick={() => filePickerRef.current.click()}
                            />
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Upload Photo
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Click on camera icon to add photo
                            </Typography>
                        </div>
                    }
                </Box>
            </Modal>
        </div >
    );
}

export default Upload