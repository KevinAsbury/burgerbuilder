import React from 'react'
import style from './BuildControl.css'

const buildControl = (props) => (
    <div className={style.BuildControl}>
        <div>{props.label}</div>
        <button className={style.Less} onClick={props.removed} disabled={props.disabled}>Less</button>
        <button className={style.More} onClick={props.added}>More</button>
    </div>
)

export default buildControl