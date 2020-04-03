import Aux from '../../hoc/Aux' 
import React from 'react'
import style from './Layout.css'

const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={style.Content}>
            {props.children}
        </main>
    </Aux>
)

export default layout