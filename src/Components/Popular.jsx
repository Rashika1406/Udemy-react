import React from 'react'
import data1 from '../assets/images/data1.jpg'
import data2 from '../assets/images/data2.jpg'
import data3 from '../assets/images/data3.jpg'
import data4 from '../assets/images/data4.jpg'

const Popular = () => {
  return (
    <div className="popular">
        <h1 className="popular__title">Most popular</h1>
        <p className="popular__subitle">Pick the best fit</p>
        <div className="popular__container">
            <div className="course-card">
                <img src={data1} alt='data1'></img>
                <h3>2023 Python Data Masterclass</h3>
                <p>Col Steele</p>
                <p>5⭐⭐⭐⭐⭐</p>
                <p>499 <del>800</del></p>
            </div>
            <div class="course-card">
                <img src={data2} alt='data2'></img>
                <h3>Artificial Intelligence</h3>
                <p>Guido Van Russom</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>299 <del>500</del></p>
            </div>
            <div class="course-card">
                <img src={data3} alt='data3'></img>
                <h3>Internet of the World</h3>
                <p>Tim Berners Lee</p>
                <p>3.9⭐⭐⭐</p>
                <p>999 <del>2000</del></p>
            </div>
            <div class="course-card">
                <img src={data4} alt='data4'></img>
                <h3>Data Science</h3>
                <p>Col Steele</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>599 <del>800</del></p>
            </div>
            <div class="course-card">
                <img src={data2} alt='data2'></img>
                <h3>2023 Python Data Masterclass</h3>
                <p>Col Steele</p>
                <p>5⭐⭐⭐⭐⭐</p>
                <p>499 <del>800</del></p>
            </div>
            <div class="course-card">
                <img src={data4} alt='data4'></img>
                <h3>Artificial Intelligence</h3>
                <p>Guido Van Russom</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>299 <del>500</del></p>
            </div>
            <div class="course-card">
                <img src={data3} alt='data3'></img>
                <h3>Internet of the World</h3>
                <p>Tim Berners Lee</p>
                <p>3.9⭐⭐⭐</p>
                <p>999 <del>2000</del></p>
            </div>
            <div class="course-card">
                <img src={data1} alt='data1'></img>
                <h3>Data Science</h3>
                <p>Col Steele</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>599 <del>800</del></p>
            </div>



        </div>
    </div>
  )
}

export default Popular
