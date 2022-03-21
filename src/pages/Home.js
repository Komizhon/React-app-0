import React from 'react'
import Homeimg from '../assets/home.png'
import '../styles/Home.css'
function Home() {
  return (
    <div className='home'>
      <img className='home-bg' src={Homeimg} alt="" />
      <div className="home-texts">
        <p className="home-uptitle">Photographer & Filmmaker</p>
        <h2 className="home-title">Aperture Studios</h2>
        <p className="home-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
      </div>
    </div>
  )
}

export default Home