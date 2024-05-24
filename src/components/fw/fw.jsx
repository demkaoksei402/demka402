import { useState } from 'react'
import './fw.css'

function FW() {

  return (
    <>
        <section className='fw-sec'>
            <div className="fwf">
                <div className="div-wrap left">
                    <h2 className='snip purple-cr'>Записываемся<br/> на ноготочки</h2>
                    <a href="/zapis"><button className='btn-link pink-bc'><h3>записаться</h3></button></a>
                    <button className='btn-link purple-bc'><h3>наши работы</h3></button>
                </div>
                <div className="div-wrap right">
                    <h2 className='snip purple-cr'>Скидки весь<br/> май 15%.</h2>
                    <button className='btn-link pink-bc'><h3>прайс-лист</h3></button>
                </div>
            </div>
            <div className="div-pop">
                <div className="div-wrap left">
                    <h2 className='snip grey'>Популярные дизайны в этом месяце</h2>
                    <div className="wrap-designs">
                        <div className="pop-design">миндаль</div>
                        <div className="pop-design">овал</div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default FW
