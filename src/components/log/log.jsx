import { useState } from 'react'
import './log.css'

import Header from '../../components/header/header'

function App() {

  return (
    <>
     <Header/>
    <section className='log'>
        <h2 className='snip purple-cr'>ВХОД</h2>
        <form action="">
            <input type="text" placeholder='e-mail' />
            <input type="password" placeholder='Пароль' />
            <input className='sub' type="submit" text='ВОЙТИ'/>
        </form>
        <h3 className='small'>если у вас ещё нету аккаунта то <a href="/registration">зарегистрируйтесь</a></h3>
    </section>
    </> 
  )
}

export default App
