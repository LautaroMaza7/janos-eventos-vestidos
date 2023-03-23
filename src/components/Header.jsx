import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './header.css'

const Header = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <header id="header" className='header'>
      <div className="container header__container">
        {/* <p  data-aos="fade-up">
        You are a click away from building your dream website or web app. Send me the details of your project for a modern, mobile responsive, highly performant website today!
        </p> */}
        {/* <div className="header__cta"  data-aos="fade-up">
          <a href="#portfolio" className='btn primary'>Nuestros vestidos</a>
          <a href="#contact" className='btn light'>Contactanos!</a>
        </div> */}
        {/* <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
          }
        </div> */}
      </div>
    </header>
  )
}

export default Header