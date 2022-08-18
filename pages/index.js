import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import more from '../images/icons/more.png'
// import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
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
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />

        <link rel="icon" href="/favicon.ico" />
        {/* <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
        <script type="text/javascript" src="js/bootstrap.js"></script> */}
      </Head>

      <main >
        {/* body */}
        <div className="sub_page">

          <div className="hero_area">
            <div className="header_section" style={{ backgroundColor: 'black' }}>
              <div className="container-fluid">
                <div className="row" style={{ display: 'flex' }}>
                  <nav className="navbar navbar-expand-lg">
                    <a href="/" className="navbar-brand flex-1">
                      <img src="images/about-img.jpg" style={{ borderRadius: "100px" }} alt="" />
                      <span style={{ fontFamily: "Garamond" }}>
                        &nbsp; Wedding Castle
                      </span>
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                      aria-label="Toggle navigation" >
                      <span className="navbar-toggler-icon">
                        {/* hamburger */}
                        <div style={{ width: "30px", height: "5px", backgroundColor: "white", margin: "5px 0px" }}></div>
                        <div style={{ width: "30px", height: "5px", backgroundColor: "white", margin: "5px 0px" }}></div>
                        <div style={{ width: "30px", height: "5px", backgroundColor: "white", margin: "5px 0px" }}></div>
                      </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                      </ul>
                      <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                        <ul className="navbar-nav  ">

                          <br /><br />
                          <li style={{ color: "white" }} className="nav-item">

                            Ashok Thampi&nbsp;&nbsp;<br /></li>

                          <li className="nav-item">

                            <a className="nav-link" href="#contact">contact</a>
                          </li>
                        </ul>

                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            {/* end header section */}
          </div>

          <div className="about_section layout_padding">
            <div className="container">
              <div className="heading_container">
                <div className="box">
                  <div className="img-box">
                    <img className='box-logo' src="images/about-img.jpg" style={{ borderRadius: "100px" }} alt="" />
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
          </div>
          <div className="">

          </div>
        </div>
      </main>

      <footer className='footer_section'>
        {/* <!-- info section --> */}
        <section id="contact" className="info_section ">

          <br />
          <div className="container">
            <div className="info_container">
              <div className="info_social">
                <h3>PERSONAL DETAILS</h3>

                <h6>Ashok Thampi</h6>
                <h6>contact:8281049141</h6>
                <h6>Location:Mundakayam</h6>
                <h6>Email:dezirethampi@gmail.com</h6><br /><br />

                <div className="d-flex justify-content-center">
                  <h4 className="">
                    Follow on
                  </h4>


                </div>

                <div className="social_box">
                  <a target="_blank" href="https://www.facebook.com/weddingcastlecreation/">
                    <img src="images/fb.png" alt="" />
                  </a>
                  <a target="_blank" href="https://www.instagram.com/weddingcastlecreations/feed/">
                    <img src="images/instagram.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </footer>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>

    </div>
  )
}
