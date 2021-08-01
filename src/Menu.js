import React from 'react';
import Items from './Items';


class Menu extends React.Component{
    render(){
        const { selectedMenuIndex } = this.props;
        return(
            <div id = "menu" class="display-none">
                <div id = "brand-title">
                    <h2>iPod.js</h2>
                </div>
                <Items
                 menuOptions = {this.props.menuOptions}
                 selectedItem = {selectedMenuIndex}/>
            </div>
        )
    }
}

export default Menu;