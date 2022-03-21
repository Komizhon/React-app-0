import React from 'react'
import img1 from '../assets/1.png'
import '../styles/Images.css'

function Images() {
    return (
        <div className='images'>
            <h2 className="images-title">What we do.</h2>
            <p className="images-subtitle">The areas that we're specialized in.</p>
            <div className="images-items">
                <img className='image' src={img1} alt="" />
                <div className="item-texts">
                    <h4 className="item-uptitle">Product Photography</h4>
                    <p className="item-info">Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.</p>
                    <a className='item-link' href="#!">Read more</a>
                </div>
            </div>
        </div>
    )
}

export default Images