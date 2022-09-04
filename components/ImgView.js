import { Button } from '@mui/material'
import { height } from '@mui/system'
import Link from 'next/link'
import React, { useState } from 'react'

// const imagePlacement = (images) => (

// )
function ImgView({ context, images }) {
    // const images = []
    const [loadMore, setLoadMore] = useState(false)
    console.log("Length => ", images.length)
    images.map((img)=>{
        console.log("images => ",img.albumName)
    })
    // for (var inc = 0; inc < images.length; inc = inc + 5) {
    //     console.log("inc => ", inc)
    //     console.log(images[inc].height)
    // }
    return (
        images.map((_, i) => (
            i % 5 === 0 &&
            // imagePlacement(images.slice[i,i+5])
            <div key={i} className="portfolio_container layout_padding2" >
                <div className="box-1">
                    <div className="img-box b-1">
                        <img src={images[i]?.image} alt="" />
                        <div className="btn-box">
                            {
                                // context === "home" &&
                                <Link href={{ pathname: "/album", query: { data: `${images[i]?.albumName}` } }}>
                                    <a href="" className="btn-1"></a>
                                </Link>
                            }
                        </div>
                    </div>
                    <div className="img-box b-2">
                        <img src={images[i + 1]?.image} alt="" />
                        <div className="btn-box">
                            {
                                // context === "home" &&
                                <Link href={{ pathname: "/album", query: { data: `${images[i + 1]?.albumName}` } }}><a href="" className="btn-1"></a></Link>
                            }
                        </div>
                    </div>
                </div>
                <div className="box-2">
                    <div className="box-2-top">
                        <div className="img-box b-3">
                            <img src={images[i + 2]?.image} alt="" />
                            <div className="btn-box">
                                {
                                    // context === "home" &&
                                    <Link href={{ pathname: "/album", query: { data: `${images[i + 2]?.albumName}` } }}><a href="" className="btn-1"></a></Link>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="box-2-top2">
                        <div className="img-box b-4">
                            <img src={images[i + 3]?.image} alt="" />
                            <div className="btn-box">
                                {
                                    // context === "home" &&
                                    <Link href={{ pathname: "/album", query: { data: `${images[i + 3]?.albumName}` } }}><a href="" className="btn-1"></a></Link>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="box-2-top2">
                        <div className="img-box b-5">
                            <img src={images[i + 4]?.image} alt="" />
                            <div className="btn-box">
                                {
                                    // context === "home" &&
                                    <Link href={{ pathname: "/album", query: { data: `${images[i + 4]?.albumName}` } }}><a href="" className="btn-1"></a></Link>
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
        ))
    )
}

export default ImgView