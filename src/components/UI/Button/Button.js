import React from 'react'
import style from './Button.css'

const button = (props) => (
    <button
        onClick={props.clicked}
        className={[style.Button, style[props.btnType]].join(' ')}
    >{props.children}</button>
)

export default button