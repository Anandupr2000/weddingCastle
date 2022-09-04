import { Button } from '@mui/material'
import React, { useState } from 'react'

function ImgView({ images }) {
    const [inc, setInc] = useState(0);
    const [loadMore, setLoadMore] = useState(false)
    console.log("Length => ", images.length)
    console.log("inc => ", inc)
    while (inc < images.length) {
        return (
            <div className="portfolio_container layout_padding2">
                <div className="box-1">
                    <div className="img-box b-1">
                        <img src={images[inc]} alt="" />
                        <div className="btn-box">
                            <a href="" className="btn-1">

                            </a>
                        </div>
                    </div>
                    <div className="img-box b-2">
                        <img src={images[inc + 1]} alt="" />
                        <div className="btn-box">
                            <a href="" className="btn-1">

                            </a>
                        </div>
                    </div>
                </div>
                <div className="box-2">
                    <div className="box-2-top">
                        <div className="img-box b-3">
                            <img src={images[inc + 2]} alt="" />
                            <div className="btn-box">
                                <a href="" className="btn-1">

                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="box-2-top2">
                        <div className="img-box b-4">
                            <img src={images[inc + 3]} alt="" />
                            <div className="btn-box">
                                <a href="" className="btn-1">

                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="box-2-top2">
                        <div className="img-box b-5">
                            <img src={images[inc + 4]} alt="" />
                            <div className="btn-box">
                                <a href="" className="btn-1">

                                </a>
                            </div>
                        </div>

                    </div>
                    <Button onClick={() => {
                        setLoadMore(true)
                        setInc(inc + 5)
                    }} hidden={loadMore}>More</Button>
                    {
                        loadMore &&
                        images.length === 5 &&
                        <center>-- End --</center>
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
                    <Button onClick={() => {
                        setLoadMore(false)
                        setInc(0)   // 5 is group size, no 0f images the user see at first glance
                    }
                    } hidden={!loadMore}>Less</Button>

                </div>
            </div>
        )
    }
}

export default ImgView