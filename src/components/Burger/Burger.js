import React from 'react'
import style from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    let ingredientArr = Object.keys(props.ingredients)
        .map((igKey) => {
            return [...Array(props.ingredients[igKey])]
                .map((_, i) => {
                    return <BurgerIngredient key={igKey + i} type={igKey}/>
                })
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, [])

        if (ingredientArr.length === 0 ) {
            ingredientArr = <p>Please start adding ingredients.</p>
        }

    return (
        <div className={style.Burger}>
            <BurgerIngredient type="bread-top" />
            {ingredientArr}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default burger