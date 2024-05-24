import { React } from 'react'

import './history.css'

export const Snippet = props => {
    let {name, time} = props.data;
    return (
        <>
            <div className="snippet">
                <h3 className='name'>{name}</h3>
                <h4 className='time'>{time}</h4>
            </div>
        </>
    )
}
export default Snippet