import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { auth, provider } from "../db/firebase"
function Header() {
  console.log("auth => ", auth?.currentUser?.displayName)
  const [user, setUser] = useState(null)
  useEffect(() => {
    onAuthStateChanged(auth, (usr) => {
      if (usr) {
        setUser(usr)
        console.log("valid user found => ", user?.displayName)
      }
      else {
        setUser(null)
        console.log("no user found")
      }
    })
  }, [])
  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // auth.currentUser.displayName = auth.currentUser.displayName.split(" ").join("").toLowerCase()
        console.log("login sucessfull => ", credential)
        console.log("user => ", user)
        console.log("profilePic => ", user.photoURL)
        // await auth.updateCurrentUser(auth.currentUser.displayName=auth.currentUser.displayName.split(" ").join("").toLowerCase())
        console.log("auth => ", auth.currentUser.displayName)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.

        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log("Error login => ", credential)
        // ...
      })
  }
  return (
    <div className="hero_area">
      {/* <!-- header section strats --> */}
      <header className="header_section" style={{ backgroundColor: "black" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-11 offset-lg-1">
              <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                  <Link href="/">
                    <nav className="navbar-brand">
                      <img src="images/about-img.jpg" style={{ borderRadius: "100px" }} alt="" />
                      <span style={{ fontFamily: "Garamond" }}>
                        &nbsp; Wedding Castle
                      </span>
                    </nav>
                  </Link>
                  <button className="navbar-toggler bg-white mt-1" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span>
                      <div style={{ height: "5px", width: "30px", backgroundColor: "black", margin: "5px 0px" }}></div>
                      <div style={{ height: "5px", width: "30px", backgroundColor: "black", margin: "5px 0px" }}></div>
                      <div style={{ height: "5px", width: "30px", backgroundColor: "black", margin: "5px 0px" }}></div>
                    </span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    </ul>
                    <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                      <ul className="navbar-nav  ">

                        <br /><br />
                        <li style={{ color: "white" }} className="nav-item">

                          {
                            user ?
                              <div onClick={() => {
                                console.log("auth  is ", auth.currentUser)
                                signOut(auth).then(() => {
                                  // Sign-out successful.
                                  console.log("Sucessfully loggedout")
                                }).catch((error) => {
                                  // An error happened.
                                  console.log("An error happened while loggingout")
                                });
                              }}>
                                Ashok Thampi&nbsp;&nbsp;<br />
                              </div>
                              :
                              <p onClick={googleSignIn}>Login</p>
                          }
                        </li>

                        <li className="nav-item">

                          <Link href="#contact">
                            <a className="nav-link">contact</a>
                          </Link>
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
  )
}

export default Header