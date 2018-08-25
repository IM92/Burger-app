import React, { Component } from 'react';
import Ux from '../../hoc/Ux';

class BurgerBuilder extends Component{
    render(){
        return(
            <Ux>
                 <div>Burger</div>
                 <div>Build Controls</div>
            </Ux>
        );
    }
}
export default BurgerBuilder;