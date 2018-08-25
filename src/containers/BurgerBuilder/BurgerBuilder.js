import React, { Component } from 'react';
import Ux from '../../hoc/Ux';
import Burger from '../../components/Burger/Burger';


class BurgerBuilder extends Component{
    render(){
        return(
            <Ux>
                 <Burger/>
                 <div>Build Controls</div>
            </Ux>
        );
    }
}
export default BurgerBuilder;