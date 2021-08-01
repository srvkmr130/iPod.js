import React from 'react';


class Items extends React.Component{

    render(){
        const { menuOptions } = this.props;
        return(
                <div id ="item">
                    {
                        menuOptions.map((item,i) => {
                            return(
                                <div className = {this.props.selectedItem === i ? 'selected' : ''}>
                                    <h4><span><i class="fas fa-dot-circle padding-2px"></i></span><span>{item}</span></h4>
                                </div>
                            )
                        })
                    }
            </div>
        )
    }
}

export default Items;