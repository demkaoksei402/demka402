import { useState } from 'react'
import './header.css'

function Header() {
   const [isMenu, setMenu] = useState(false)

   const Menu = () => {
       if (!isMenu) {
           setMenu(true)
       }else{
           setMenu(false)
       }
  }
  return (
    <>
        <header className={isMenu ? "open" : "close"}>
          <div className="header-content">
            <div className="header-wrap">
                  <button className='btn-phone'><svg className='phone' viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.2866 17.6656L18.8179 15.3218C18.5843 15.2223 18.3246 15.2013 18.078 15.262C17.8315 15.3228 17.6113 15.462 17.4507 15.6587L15.0288 18.6177C11.2279 16.8256 8.16904 13.7668 6.37695 9.96587L9.33594 7.54399C9.53305 7.38368 9.67256 7.16351 9.73335 6.91682C9.79414 6.67013 9.7729 6.41035 9.67285 6.1768L7.3291 0.708053C7.21929 0.4563 7.02508 0.250751 6.77996 0.126852C6.53483 0.00295173 6.25416 -0.0315334 5.98633 0.0293424L0.908203 1.20122C0.649985 1.26085 0.419602 1.40624 0.254656 1.61366C0.0897096 1.82109 -5.94829e-05 2.07829 2.95713e-08 2.34331C2.95713e-08 14.8677 10.1514 24.9996 22.6562 24.9996C22.9213 24.9997 23.1787 24.91 23.3862 24.7451C23.5937 24.5801 23.7392 24.3497 23.7988 24.0914L24.9707 19.0132C25.0312 18.7441 24.996 18.4623 24.8711 18.2163C24.7463 17.9704 24.5396 17.7756 24.2866 17.6656Z" fill="#616161"/></svg></button>
                  <button onClick={Menu} className='btn-menu'>
                          <div className="bar"></div>
                          <div className="bar"></div>
                  </button>
              </div>
              <div className={isMenu ? "menu-links" : "hide"}>
                <a href="/login"><button  className="btn-link login">войти</button></a>
                <a href="/registration"><button className="btn-link reg">регистрация</button></a>
                <a href="/history"><button className="btn-link works">история</button></a>
                <a href="/zapis"><button className="btn-link zapis">запись</button></a>
                <a href="/price"><button className="btn-link price">прайс-лист</button></a>
                <a href="/"><button className="btn-link cont">главная</button></a>
              </div>
          </div>
        </header>
    </>
  )
}

export default Header
