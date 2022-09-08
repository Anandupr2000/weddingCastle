import { PlusIcon } from '@heroicons/react/outline'
import { Button } from '@mui/material'
import { collection, deleteDoc, doc, getDocs, onSnapshot, query } from 'firebase/firestore'
import { deleteObject, ref } from 'firebase/storage'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useGotoRecoilSnapshot } from 'recoil'
import { db, storage } from '../db/firebase'

// const imagePlacement = (images) => (

// )
function ImgView({ context, images, admin, albumName }) {
    const [img, setImg] = useState([])
    // img.forEach()
    const [loadMore, setLoadMore] = useState(false)
    console.log("Length => ", images.length)
    images.map((img) => {
        console.log("images => ", img.albumName)
    })
    useEffect(() => {
        setImg(images)
    }, [images])
    useEffect(() => {
        console.log(img)
    }, [img])
    const deleteImage = ({ imgName, albumName }) => {
        console.log("Image to be deleted => ", imgName)
        // albumwise deletion
        if (context === "home") {
            const albumName = imgName;
            // there is no albumname received since home contain multiple albums, so albumname is passed as imgName
            console.log("Image to be deleted from home as a whole album and albumname => ", imgName)
            // deleteObject(ref(storage, `${imgName}`)).then(() => {
            //     console.log("Sucessfully deleted..")
            //     deleteDoc(doc(db, `albums/${imgName}`))
            //     deleteDoc(doc(db, `${imgName}`))
            //     // delete
            // }).catch(err=>{
            //     console.log("Error in deletion of album : ",err)
            // })
            getDocs(query(collection(db, `${albumName}`))).then(snapshot => {
                console.log("collection => ")
                snapshot.docs.forEach((d => {
                    console.log(d.data())
                    deleteObject(ref(storage, `${albumName}/${d.id}`)).then(() => {
                        console.log("Sucessfully deleted..")
                        deleteDoc(doc(db, `${albumName}/${d.id}`))
                    })
                }))
            })
        }
        // particular photo deletion
        if (context === "album") {
            console.log(imgName, " to be deleted from ", albumName)
            deleteObject(ref(storage, `${albumName}/${imgName}`)).then(() => {
                console.log("Sucessfully deleted..")
                deleteDoc(doc(db, `${albumName}/${imgName}`))
            })
        }
    }
    return (
        // images.map((img, i)
        img.map((_, i) => (
            i % 5 === 0 &&
            // imagePlacement(images.slice[i,i+5])
            <div key={i} className="portfolio_container layout_padding2" >
                <div className="box-1">
                    <div className="img-box b-1">
                        {
                            images[i]?.image && <img src={images[i]?.image} alt="" />
                        }
                        <div className="btn-box">
                            {
                                <div>

                                    {/* <Button className='btn-1 '>
                                        <PlusIcon />
                                    </Button> */}
                                    {/* context === "home" && */}
                                    <Link href={{ pathname: "/album", query: { data: `${images[i]?.albumName}` } }}>
                                        <a href="" className="btn-1"></a>
                                    </Link>
                                    {/* <a href="" onClick={(e) => { e.preventDefault() }}
                                        // legacyBehavior={false}
                                    > */}
                                    {
                                        admin &&
                                        <a onClick={
                                            (e) => {
                                                e.preventDefault()
                                                console.log("images => ", images)
                                                if (context === "home")
                                                    //sending albumname to delete album
                                                    deleteImage({ imgName: images[i].albumName })
                                                else
                                                    //sending image name to delete particular image from album
                                                    deleteImage({ imgName: images[i].imageName, albumName: albumName })
                                            }
                                        }
                                            className="btn-1 btnDel">
                                        </a>
                                    }
                                    {/* </a> */}
                                </div>
                            }
                        </div>
                    </div>
                    <div className="img-box b-2">
                        {
                            images[i + 1]?.image &&
                            <img src={images[i + 1]?.image} alt="" />
                        }
                        <div className="btn-box">
                            {
                                // context === "home" &&
                                <div>
                                    <Link href={{ pathname: "/album", query: { data: `${images[i + 1]?.albumName}` } }}>
                                        <a href="" className="btn-1"></a>
                                    </Link>
                                    {/* <a href="" onClick={(e) => { e.preventDefault() }} 
                                    // legacyBehavior={false}
                                    > */}
                                    {
                                        admin &&
                                        <a onClick={
                                            (e) => {
                                                e.preventDefault()
                                                console.log("images => ", images)
                                                if (context === "home")
                                                    //sending albumname to delete album
                                                    deleteImage({ imgName: images[i + 1].albumName })
                                                else
                                                    //sending image name to delete particular image from album
                                                    deleteImage({ imgName: images[i + 1].imageName, albumName: albumName })
                                            }
                                        }
                                            className="btn-1 btnDel">
                                        </a>
                                    }
                                    {/* </a> */}
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="box-2">
                    <div className="box-2-top">
                        <div className="img-box b-3">
                            {
                                images[i + 2]?.image &&
                                <img src={images[i + 2]?.image} alt="" />
                            }
                            <div className="btn-box">
                                {
                                    <div>
                                        <Link href={{ pathname: "/album", query: { data: `${images[i + 2]?.albumName}` } }}><a href="" className="btn-1"></a></Link>
                                        {/* <a href="" onClick={(e) => { e.preventDefault() }} 
                                        // legacyBehavior={false}
                                        > */}
                                        {
                                            admin &&
                                            <a onClick={
                                                (e) => {
                                                    e.preventDefault()
                                                    console.log("images => ", images)
                                                    if (context === "home")
                                                        //sending albumname to delete album
                                                        deleteImage({ imgName: images[i + 2].albumName })
                                                    else
                                                        //sending image name to delete particular image from album
                                                        deleteImage({ imgName: images[i + 2].imageName, albumName: albumName })
                                                }
                                            }
                                                className="btn-1 btnDel">
                                            </a>
                                        }
                                        {/* </a> */}
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="box-2-top2">
                        <div className="img-box b-4">
                            {
                                images[i + 3]?.image &&
                                <img src={images[i + 3]?.image} alt="" />
                            }
                            <div className="btn-box">
                                {
                                    <div>
                                        <Link href={{ pathname: "/album", query: { data: `${images[i + 3]?.albumName}` } }}><a href="" className="btn-1"></a></Link>
                                        {/* <a href="" onClick={(e) => { e.preventDefault() }} 
                                        // legacyBehavior={false}
                                        > */}
                                        {
                                            admin &&
                                            <a onClick={
                                                (e) => {
                                                    e.preventDefault()
                                                    console.log("images => ", images)
                                                    if (context === "home")
                                                        //sending albumname to delete album
                                                        deleteImage({ imgName: images[i + 3].albumName })
                                                    else
                                                        //sending image name to delete particular image from album
                                                        deleteImage({ imgName: images[i + 3].imageName, albumName: albumName })
                                                }
                                            }
                                                className="btn-1 btnDel">
                                            </a>
                                        }
                                        {/* </a> */}
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="box-2-top2">
                        <div className="img-box b-5">
                            {
                                images[i + 4]?.image &&
                                <img src={images[i + 4]?.image} alt="" />
                            }
                            <div className="btn-box">
                                {
                                    <div>
                                        <Link href={{ pathname: "/album", query: { data: `${images[i + 4]?.albumName}` } }}><a href="" className="btn-1"></a></Link>
                                        {/* <a href="" onClick={(e) => { e.preventDefault() }} 
                                        // legacyBehavior={false}
                                        > */}
                                        {
                                            admin &&
                                            <a onClick={
                                                (e) => {
                                                    e.preventDefault()
                                                    console.log("images => ", images)
                                                    if (context === "home")
                                                        //sending albumname to delete album
                                                        deleteImage({ imgName: images[i + 4].albumName })
                                                    else
                                                        //sending image name to delete particular image from album
                                                        deleteImage({ imgName: images[i + 4].imageName, albumName: albumName })
                                                }
                                            }
                                                className="btn-1 btnDel">
                                            </a>
                                        }
                                        {/* </a> */}
                                    </div>
                                }
                            </div>
                        </div>

                    </div>
                    {/* <Button onClick={() => {
                setLoadMore(true)
            }} hidden={loadMore}>More</Button> */}
                    {
                        // loadMore &&
                        // images.length === 5 &&
                        // <center>-- End --</center>
                        // images.map((image, index) => {
                        //     if (index > 4)
                        //         return <div className="box-2-top2 boxImage">
                        //             <div className="img-box b-5">
                        //                 <img src={image} alt="" />
                        //                 <div className="btn-box">
                        //                     <a href="" className="btn-1"></a>
                        //                 </div>
                        //             </div>
                        //         </div>
                        // })
                    }
                    {/* <Button onClick={() => {
                setLoadMore(false)
                // setInc(0)   // 5 is group size, no 0f images the user see at first glance
            }
            } hidden={!loadMore}>Less</Button> */}

                </div>
            </div>
            // return img
        ))
    )
}

export default ImgView