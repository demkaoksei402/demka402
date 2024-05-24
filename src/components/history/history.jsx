import { useState } from 'react'
import './history.css'

import Header from '../../components/header/header'
import HistorySnippet from './history-snip'

function App() {

  return (
    <>
     <Header/>
     <div className="tag">
        <h2>История записей</h2>
        <div className="gozapis">
            <h3>Пора бы уже <a href="/zapis">ЗАПИСАТЬСЯ</a></h3>
        </div>
     </div>
     <section className='wrap-cnippets'>
        <HistorySnippet data={{name: 'Нежный нюд', time: '25.05.2024'}} />
        <HistorySnippet data={{name: 'Океан', time: '15.05.2024'}} />
        <HistorySnippet data={{name: 'Попугай', time: '05.05.2024'}} />
        <HistorySnippet data={{name: 'Волны', time: '25.04.2024'}} />
        <HistorySnippet data={{name: 'Ветер', time: '15.04.2024'}} />
        <HistorySnippet data={{name: 'Роза', time: '05.04.2024'}} />
     </section>
    </> 
  )
}

export default App
