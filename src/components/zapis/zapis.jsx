import { useState } from 'react'
import './zapis.css'

import Header from '../../components/header/header'

function App() {

  return (
    <>
     <Header/>
     <section className='wrap'>
        <h2 className='snip purple-cr'>Запись на ноготочки</h2>
        <form action="">
            <input type="text" placeholder='Ваше имя' />
            <select>
                <option value="0">Выберите мастера</option>
                <option value="0">Имя Фамилия</option>
                <option value="0">Имя Фамилия</option>
                <option value="0">Имя Фамилия</option>
                <option value="0">Имя Фамилия</option>
            </select>
            <select>
                <option value="0">Выберите сложность</option>
                <option value="0">Легкий маникюр (1 час)</option>
                <option value="0">Средний маникюр (2 час)</option>
                <option value="0">Тяжелый маникюр (3 час)</option>
                <option value="0">Индивидуальный (6-12 часов)</option>
            </select>
            <input type="date" placeholder='Выберите дату' />
            <input type="time" placeholder='Выберите дату' />
            <input className='sub' type="submit" text='ВОЙТИ'/>
        </form>
     </section>
    </> 
  )
}

export default App
