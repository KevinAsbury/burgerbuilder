import React from 'react'
import style from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    const ingredientArr = Object.keys(props.ingredients)
        .map((igKey) => {
            return [...Array(props.ingredients[igKey])]
                .map((_, i) => {
                    return <BurgerIngredient key={igKey + i} type={igKey}/>
                })
        })
    return (
        <div className={style.Burger}>
            <BurgerIngredient type="bread-top" />
            {ingredientArr}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default burger