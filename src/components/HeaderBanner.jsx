import React from 'react'
import {  BrowserRouter, Link } from 'react-router-dom'

const HeaderBanner = () => {
  return (
    <>
    <section className="header_banner">
        <div className="container-fluid">
            <div className="header_banner_bg">
                <nav>
                    <ul>
                        <li><Link to='/'>home</Link> /</li>
                        <li><Link to='/products'>products</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>
    </>
  )
}

export default HeaderBanner