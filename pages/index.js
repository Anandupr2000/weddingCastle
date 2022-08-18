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
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
        rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
        crossOrigin="anonymous" />

        <link rel="icon" href="/favicon.ico" />
        {/* <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
        <script type="text/javascript" src="js/bootstrap.js"></script> */}
      </Head>

      <div className="sub_page">

        <div className="hero_area">
          {/* <!-- header section strats --> */}
          <header className="header_section" style={{ backgroundColor: "black" }}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-11 offset-lg-1">
                  <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                      <a class="navbar-brand" href="/">
                        <img src="images/about-img.jpg" style={{ borderRadius: "100px" }} alt="" />
                        <span style={{ fontFamily: "Garamond" }}>
                          &nbsp; Wedding Castle
                        </span>
                      </a>
                      <button className="navbar-toggler bg-white mt-1" type="button" data-bs-toggle="collapse" 
                      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                      aria-expanded="false" aria-label="Toggle navigation">
                        <span>
                          <div style={{height:"5px",width:"30px",backgroundColor:"black",margin:"5px 0px"}}></div>
                          <div style={{height:"5px",width:"30px",backgroundColor:"black",margin:"5px 0px"}}></div>
                          <div style={{height:"5px",width:"30px",backgroundColor:"black",margin:"5px 0px"}}></div>
                        </span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          
                        </ul>
                        <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                          <ul className="navbar-nav  ">

                            <br/><br/>
                              <li style={{color: "white"}} className="nav-item">

                                Ashok Thampi&nbsp;&nbsp;<br/></li>

                              <li className="nav-item">

                                <a className="nav-link" href="#contact">contact</a>
                              </li>
                            </ul>

                            </div>
                        </div>
                      </div>
                  </nav>
                </div>
              </div>
            </div>
          </header>
          {/* <!-- end header section --> */}
        </div>

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
                -- Photos --
              </h2>

            </div>
            <div className="portfolio_container layout_padding2">
              <div className="box-1">
                <div className="img-box b-1">
                  <img src="images/p-1.jpg" alt="" />
                  <div className="btn-box">
                    <a href="" className="btn-1">

                    </a>
                  </div>
                </div>
                <div className="img-box b-2">
                  <img src="images/p-2.jpg" alt="" />
                  <div className="btn-box">
                    <a href="" className="btn-1">

                    </a>
                  </div>
                </div>
              </div>
              <div className="box-2">
                <div className="box-2-top">
                  <div className="img-box b-3">
                    <img src="images/p-3.jpg" alt="" />
                    <div className="btn-box">
                      <a href="" className="btn-1">

                      </a>
                    </div>
                  </div>
                </div>
                <div className="box-2-top2">
                  <div className="img-box b-4">
                    <img src="images/p-4.jpg" alt="" />
                    <div className="btn-box">
                      <a href="" className="btn-1">

                      </a>
                    </div>
                  </div>
                </div>
                <div className="box-2-top2">
                  <div className="img-box b-5">
                    <img src="images/p-5.jpg" alt="" />
                    <div className="btn-box">
                      <a href="" className="btn-1">

                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>

        {/* <!-- info section --> */}
        <div id="contact" className="info_section ">

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
                  <a href="https://www.facebook.com/weddingcastlecreation/">
                    <img src="images/fb.png" alt="" />
                  </a>
                  <a href="https://www.instagram.com/weddingcastlecreations/feed/">
                    <img src="images/instagram.png" alt="" />
                  </a>



                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- end info_section --> */}

        {/* <!-- footer section --> */}
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
