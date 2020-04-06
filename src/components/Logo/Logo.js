import React from 'react'
import burgerLogo from '../../assets/images/original.png'
import style from './Logo.css'

const logo = (props) => (
    <div className={style.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="myBurger"/>
    </div>
)

export default logo