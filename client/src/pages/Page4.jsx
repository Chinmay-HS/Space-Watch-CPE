import React from 'react'
import team_logo from './../assets/images/pixellabs_white 1.png';

const Page4 = () => {
  return (
    <div >
      <section className='page4'>
        <div className='bg-pg4'>
          <div className="gradient">
            <div className="glass-pg4">
              <div className="about-us">ABOUT US</div>
              <div className="desc">Welcome to Pixel Labs, where creativity meets innovation. At Pixel Labs, we are a dynamic team of skilled designers and developers dedicated to crafting cutting-edge software solutions. Our diverse team brings together a wealth of expertise and passion for technology, working tirelessly to bring your ideas to life. Whether it's web development, mobile applications, or bespoke software, we thrive on pushing the boundaries of what's possible. With our collaborative approach and unwavering commitment to excellence, Pixel Labs is your partner in transforming concepts into reality. Join us on this exciting journey as we continue to shape the future of software development.</div>
            </div>
            <div className='team_logo2'>
              <img src={team_logo} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page4
