import React from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import {
    ChevronLeftIcon,
    ChevronRightIcon
} from '@heroicons/react/outline'
import { ImageList } from '@mui/material';
import Preview from './Preview';

function ImagePrev({ imageArr, currentImage, setSelectedImage ,setMPrevIndex }) {
    const [selected, setSelected] = React.useState([]);

    const isItemSelected = (id) => !!selected.find((el) => el === id);
    if (currentImage)
    console.log(imageArr)
    return (
        <div style={{ padding: "10px" }}>
            {
                <ScrollMenu scrollContainerClassName='flex space-x-1 overflow-x-hidden' LeftArrow={LeftArrow} RightArrow={RightArrow} >
                    {
                        imageArr.map(
                            (file, index) => (
                                <Preview key={file.name} index={index} setMPrevIndex={setMPrevIndex}
                                    currentImage={currentImage} setMainPreview={setSelectedImage} image={file} />
                            )
                        )
                    }
                </ScrollMenu>
            }
        </div>
    )
}
function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
        React.useContext(VisibilityContext);
    return (
        <ChevronLeftIcon
            className={
                isFirstItemVisible ?
                    "" : 'scrollArrow'}
            disabled={isFirstItemVisible} onClick={() => scrollPrev()} />
    );
}

function RightArrow() {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);
    return (
        <ChevronRightIcon
            className={
                isLastItemVisible ?
                    "" : 'scrollArrow scrollArrowRight'
            } disabled={isLastItemVisible} onClick={() => scrollNext()} />
    );
}
export default ImagePrev