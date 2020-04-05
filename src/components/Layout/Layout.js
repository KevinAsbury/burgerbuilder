import Aux from '../../hoc/Aux' 
import React from 'react'
import style from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = (props) => (
    <Aux>
        <Toolbar />
        <main className={style.Content}>
            {props.children}
        </main>
    </Aux>
)

export default layout