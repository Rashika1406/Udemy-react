import React from 'react'
import one from '../assets/images/sale.jpg'

const Saleimage = () => {
  return (
    <div className="sale-image">
        <img src={one} alt="SaleImage"></img>
        <div className="sale-image__offer">
            <h2>Udemy Flash Sale! 24 hours to save.</h2>
            <p>Get the top Courses for just 499. just one day to save but a lifetime to learn</p>
        </div>
    </div>
  )
}

export default Saleimage
