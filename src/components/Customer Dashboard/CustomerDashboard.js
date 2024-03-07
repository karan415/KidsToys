import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Topbar from './Topbar'
import '../css/Customer.css'
const CustomerDashboard = () => {
  return (
    <>
    <Header/>
    <section className="customerDashboard">
       <div className="container">
       <Topbar/>
       </div>
    </section>
    <Footer/>
    </>
  )
}

export default CustomerDashboard