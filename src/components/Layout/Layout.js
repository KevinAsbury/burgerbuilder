import Aux from '../../hoc/Aux' 
import React from 'react'
import style from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const layout = (props) => (
    <Aux>
        <Toolbar />
        <SideDrawer />
        <main className={style.Content}>
            {props.children}
        </main>
    </Aux>
)

export default layout