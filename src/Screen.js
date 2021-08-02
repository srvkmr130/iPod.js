import React from 'react';
import Menu from './Menu';
import Game from './Game';
import CoverFlow from './CoverFlow';
import Settings from './Settings';
import Artists from './Artists';
import Albums from './Albums';
import AllSongs from './AllSongs';


class Screen extends React.Component{
    render(){
        return(
        <div id = "screen-container">
            <Menu 
            selectedMenuIndex = { this.props.selectedMenuIndex}
            menuOptions = { this.props.menuOptions }
            />
            {this.props.screenPanel === 0 && this.props.menuOptions.length === 4 ? <CoverFlow/>:''}
            {/* {this.props.screenPanel === 1 && this.props.menuOptions === 4? <Music/>:''} */}
            {this.props.screenPanel === 2 && this.props.menuOptions.length  === 4? <Game/>:''}
            {this.props.screenPanel === 3 && this.props.menuOptions.length  === 4? <Settings/>:''}
            {this.props.screenPanel === 0 && this.props.menuOptions.length  === 3? <AllSongs/>:''}
            {this.props.screenPanel === 1 && this.props.menuOptions.length  === 3? <Artists/>:''}
            {this.props.screenPanel === 2 && this.props.menuOptions.length  === 3? <Albums/>:''}
            
        </div>
        );
    }
}

export default Screen;
