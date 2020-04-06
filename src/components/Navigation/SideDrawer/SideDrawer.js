import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import style from './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Aux'

const sideDrawer = (props) => {
    // Dynamic creation of class styles to show or hide the 
    // side drawer when the backdrop is clicked
    let attachedClasses = [style.SideDrawer, style.Close]
    if (props.open) {
        attachedClasses = [style.SideDrawer, style.Open]
    }

    return (
        <Aux>
            {/* props.closed & props.open are provided by layout.js */}
            <Backdrop show={props.open} clicked={props.closed}/>
            {/* Dynamic styles in action */}
            <div className={attachedClasses.join(' ')}>
                <div className={style.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    )
}

export default sideDrawer