import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from "next/router";
import Footer from '../components/Footer'
import Header from '../components/Header'
import ImgView from '../components/ImgView';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { auth, db } from '../db/firebase';
import Upload from '../components/Upload';
import { onAuthStateChanged } from 'firebase/auth';

function Album() {
    const router = useRouter();
    const data = router.query.data;
    console.log("data received => ", data);
    const [images, setImages] = useState([])
    const [user, setUser] = useState(null)

    useEffect(() => {
        onAuthStateChanged(auth, (usr) => {
          if (usr) {
            setUser(usr)
            console.log("valid user found => ", usr.displayName)
          }
          else {
            setUser(null)
            console.log("no user found")
          }
        })
      }, [])
    // useEffect(()=>{
    //     console.log("images => ",images)
    // },[images])
    useEffect(() => {
        if (!images.length)
            onSnapshot(
                query(
                    collection(db, `${router.query.data}`),
                    // orderBy("time", "desc")
                ),
                querySnapshot => {
                    // querySnapshot.forEach((doc)=>{
                    //   console.log("docs => ", doc.data().image)
                    //   // setImages([...images,doc.data().image])
                    //   images.push(doc.data().image)
                    // })
                    console.log("album name => ", data);
                    console.log("snapshot => ", querySnapshot.docs)
                    setImages(querySnapshot.docs.map(
                        doc => (
                            doc.data()
                        )))
                    // querySnapshot.docs.map((doc)=>{
                    //   setImages([...images,doc.data()])
                    // })
                })
    }, [images])
    return (
        <div >
            <Head>
                <title>Wedding Castle</title>
                <meta name="description" />
                {/* bootstrap */}
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                    rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                    crossOrigin="anonymous" />

                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <div className="portfolio_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            -- Photos --
                        </h2>

                    </div>
                    {
                        auth?.currentUser?.displayName === "Anandu P R" || (auth?.currentUser?.displayName === "Shebin P Biju")
                        &&
                        <Upload albumName={data} />
                    }
                    {/* <div className="portfolio_container"> */}
                    <ImgView images={images} />
                    {/* </div> */}
                </div>

            </div>
            <Footer />

            <script type="text/javascript" src="js/jquery-3.4.1.min.js" async></script>
            <script type="text/javascript" src="js/bootstrap.js" async></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous" async></script>

        </div>
    )
}

export default Album