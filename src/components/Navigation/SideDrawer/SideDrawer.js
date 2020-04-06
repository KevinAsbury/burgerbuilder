import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import style from './SideDrawer.css'

const sideDrawer = (props) => {
    return (
        <div className={style.SideDrawer}>
            <div className={style.Logo}>
                <Logo/>
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    )
}

export default sideDrawer