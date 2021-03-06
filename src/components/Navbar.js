import React from "react"
import { Link } from "gatsby"

import Logo from "../images/HaldenCityLogo.png"
import Instagram from "../images/instagramIcon.png"
import Snapchat from "../images/snapchatIcon.png"
import Facebook from "../images/facebookIcon.png"

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: "",
    }
  }

  toggleHamburger = () => {
    this.setState(
      {
        active: !this.state.active,
      },

      () => {
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img
                src={Logo}
                alt="Smart City Halden"
                style={{ maxHeight: "150px", width: "auto" }}
              />
            </Link>
          </div>
          <div class="navbar-end">
            <p className="navbar-item">Følg oss</p>
            <Link to="/" className="navbar-item" title="Social Media">
              <img
                src={Instagram}
                alt="Smart City Halden instagram"
                style={{ maxHeight: "40px", width: "auto" }}
              />
            </Link>
            <Link to="/" className="navbar-item" title="Social Media">
              <img
                src={Snapchat}
                alt="Smart City Halden snapchat"
                style={{ maxHeight: "40px", width: "auto" }}
              />
            </Link>
            <Link to="/" className="navbar-item" title="Social Media">
              <img
                src={Facebook}
                alt="Smart City Halden facebook"
                style={{ maxHeight: "40px", width: "auto" }}
              />
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
