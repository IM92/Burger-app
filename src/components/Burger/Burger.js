import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';

const burger = (props) => {

    const transformedIngredients = Object.keys(props.ingredients)
        .map((idKey) => {
            return [...Array(props.ingredients[idKey])]
                .map((_, i) => {
                   return <BurgerIngredient key={idKey + i} type={idKey} />
                });
        });
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};


export default burger;