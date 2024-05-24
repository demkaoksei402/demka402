import { useState } from 'react'
import './reg.css'

import Header from '../../components/header/header'

function App() {

  return (
    <>
     <Header/>
     <section className='log'>
        <h2 className='snip purple-cr'>РЕГИСТРАЦИЯ</h2>
        <form action="">
        <input type="text" placeholder='Ваше имя' />
            <input type="text" placeholder='e-mail' />
            <input type="password" placeholder='Пароль' />
            <input type="password" placeholder='Повторите пароль' />
            <input className='sub' type="submit" placeholder='ЗАРЕГИСТРИРОВАТЬСЯ' />
        </form>
        <h3 className='small'>если у вас уже есть <br /> аккаунт то <a href="/login">войдите</a></h3>
    </section>
    </> 
  )
}

export default App
