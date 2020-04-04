import React from 'react'
import style from './BuildControl.css'

const buildControl = (props) => (
    <div>
        <div className={style.BuildControl}>{props.label}</div>
        <button className={style.Less}>Less</button>
        <button className={style.More}>More</button>
    </div>
)

export default buildControl