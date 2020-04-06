import Aux from '../Aux/Aux'
import React, { Component } from 'react'
import style from './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class layout extends Component {
    state = {
        showSideDrawer: false
    }
    
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    showDrawerToggleHandler = () => {
        this.setState((prev) => {
            return { showSideDrawer: !prev.showSideDrawer }
        })
    }

    render() {
        return (
            <Aux>
                <Toolbar clicked={this.showDrawerToggleHandler}/>
                <SideDrawer 
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}/>
                <main className={style.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default layout