import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { CameraIcon, PlusIcon } from "@heroicons/react/outline"
import { minWidth } from '@mui/system';
import ImagePrev from './preview/ImagePrev';

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

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const addImage = (e) => {
        // return new Promise((resolve, reject) => {
        console.log("No of files selected => ", e.target.files.length)
        // console.log("files => ", e.target.files)
        const { files } = e.target
        const validImageFiles = []
        for (let i = 0; i < files.length; i++) {
            const file = files[i]
            if (file.type.match(imageTypeRegex)) {
                validImageFiles.push(file)
            }
        }
        if (validImageFiles.length) {
            setImageFiles(validImageFiles)
            // console.log("valid files are : ", validImageFiles)
            return
        }
        alert("Please select only images")
        // })
    }
    const removeSelected = (e) => {
        e.preventDefault()
        console.log("removeBtn clicked")
        imageFiles.splice(mainPreviewIndex, 1)
        setSelectedFile(null)
    }
    React.useEffect(() => {
        // console.log("contents of selected image =>  ", selectedFile)
    }, [selectedFile])

    return (
        <div className="upload">
            <div style={{}}>
                <Button
                    onClick={handleOpen}>
                    <span style={{ fontsize: "20px"}}>
                        <PlusIcon className="addBtn"/>  ADD
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
                            <div style={{ height: "70px", paddingTop: "30px" }}>
                                {/* <ImagePrev imageArr={["https://cdn.flashtalking.com/xre/416/4167854/3873396/image/3873396.gif?792812415","https://cdn.flashtalking.com/xre/416/4167854/3873396/image/3873396.gif?792812415"]}  */}
                                {
                                    imageFiles ?
                                        <ImagePrev imageArr={imageFiles} setMPrevIndex={setMainPreviewIndex}
                                            currentImage={selectedFile} setSelectedImage={setSelectedFile} />
                                        : console.log("Empty image array")
                                }
                            </div>
                            <div style={{ paddingTop: "30px" }}>
                                <Button onClick={() => setImageFiles([])}>Clear all</Button>
                                <Button type="submit">Upload</Button><span>{imageFiles.length}</span>
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