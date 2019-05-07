import React from 'react';
import "./Header.css";
import { Link, Router } from "@reach/router";
import Blog from "../Blog/Blog";
import Shop from "../Shop/Shop";
import Portfolio from "../Portfolio/Portfolio";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Admin from "../Admin/Admin"


class Header extends React.Component {
    render() {
        return(
            <div>
            <div className="home-contant">
                <div className="header-contant">
                    <div className="header">
                        <Link to="/" className="logo">ARCADIA</Link>
                        <div className="nav">
                            <nav className="manu-nav">
                                <Link to="/blog" className="manu-bar">BLOG</Link>
                                <Link to="/shop" className="manu-bar">SHOP</Link>
                                <Link to="/portfolio" className="manu-bar">PORTFOLIO</Link>
                                <Link to="/about" className="manu-bar">ABOUT</Link>
                                <Link to="/contact" className="manu-bar">CONTACT</Link>

                            </nav>
                            <nav className="social-nav">
                                <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://www.instagram.com/?hl=en"><i className="fab fa-instagram"></i></a>
                                <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                                <a href="mailto:arcadia@blog.me"><i className="far fa-envelope"></i></a>
                                <Link to="/admin" className="fab">ADMIN</Link>
                                    
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <Router>
                <Blog path="/blog" />
                <Shop path="/shop" />
                <Portfolio path ="/portfolio" />
                <About path="/about" />
                <Contact path="/contact" />
                <Admin path="/admin" />
            </Router>
        </div>
        )
    }
}

export default Header;
