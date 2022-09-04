import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Upload from '../components/Upload'
import { auth, db, storage } from "../db/firebase"
import { useEffect, useState } from 'react'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { Button } from '@mui/material'
import ImgView from '../components/ImgView'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { onAuthStateChanged } from 'firebase/auth'

// import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  const [homePage, setHomePage] = useState(true)
  const [loadMore, setLoadMore] = useState(false)
  const [images, setImages] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (usr) => {
      if (usr) {
        setUser(usr)
        console.log("valid user found => ", user.displayName)
      }
      else {
        setUser(null)
        console.log("no user found")
      }
    })
  }, [])
  // setInterval(() => {
  //   images.sort(() => Math.random() - 0.5)
  //   console.log(images)
  // }, 100000)
  useEffect(() => {
    console.log("Images => ", images)
  }, [images])
  useEffect(() => {
    onSnapshot(
      query(
        collection(db, "albums"),
        // orderBy("time", "desc")
      ),
      querySnapshot => {
        // querySnapshot.forEach((doc)=>{
        //   console.log("docs => ", doc.data().image)
        //   // setImages([...images,doc.data().image])
        //   images.push(doc.data().image)
        // })
        setImages(querySnapshot.docs.map(
          doc => (
            doc.data()
          )))
        // querySnapshot.docs.map((doc)=>{
        //   setImages([...images,doc.data()])
        // })
      })
  }, [])

  //   useEffect(() => {
  //     console.log("images are => ",images)
  //     images.map((i) => {
  //         var img = new Image({src:i});
  //         // img.src = i;
  //         img.onload = () => {
  //             console.log("height => ", img.height)
  //         }
  //         return i
  //     })
  // }, [images])
  return (
    <div >
      <Head>
        <title>Wedding Castle</title>
        <meta name="description" />
        {/* bootstrap core css */}
        {/* <link rel="stylesheet" type="text/css" href="css/bootstrap.css" /> */}

        {/* fonts style */}
        {/* <link href="https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap" rel="stylesheet"/> */}

        {/* <!-- Custom styles for this template --> */}
        {/* <link href="css/style.css" rel="stylesheet" /> */}
        {/* <!-- responsive style --> */}
        {/* <link href="css/responsive.css" rel="stylesheet" /> */}

        {/* bootstrap */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous" />

        <link rel="icon" href="/favicon.ico" />
        {/* <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
        <script type="text/javascript" src="js/bootstrap.js"></script> */}
      </Head>

      <div className="sub_page">

        <Header />

        {/* <!-- about section --> */}

        <div className="about_section layout_padding">
          <div className="container">
            <div className="heading_container">
              <h2>
                <br />
              </h2>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/about-img.jpg" style={{ borderRadius: "100px" }} alt="" />
                <div className="about_img-bg">
                  <img src="images/about-img-bg.png" alt="" />
                </div>
              </div>
              <div className="detail-box">

                <div>

                </div>
              </div>
            </div>
          </div>

        </div>

        {/* <!-- end about section --> */}

        <div className="portfolio_section layout_padding">
          <div className="container">
            <div className="heading_container">
              <h2>
                -- COLLECTIONS --
              </h2>

            </div>
            {
              auth?.currentUser?.displayName === "Anandu P R" &&
              <Upload />
            }

            {/* <div className="portfolio_container"> */}
            <ImgView context="home" images={images} />
            {/* </div> */}
          </div>

        </div>

        {/* <!-- footer section --> */}

        {/* <!-- info section --> */}
        <Footer />
        {/* <!-- end info_section --> */}

        <div className="container-fluid footer_section">
          <div className="container">

          </div>
        </div>
        {/* <!-- footer section --> */}

      </div>

      <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
      <script type="text/javascript" src="js/bootstrap.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>

    </div>
  )
}
