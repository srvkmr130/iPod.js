import logo from './logo.svg';
import Wheel from './Wheel';
import './App.css';
import Screen from './Screen';
import React from 'react';
import ZingTouch from 'zingtouch';
import $ from 'jquery';

class App extends React.Component{

  constructor()
  {
    super();
    this.angleFromCurrentPosition = 0;
    this.selectedItem = 0;
    this.state = {
      options:['Cover Flow','Music','Games','Settings'],
      selected : 0,
      isOnMusicPanel:false,
      screenPanel : -1,
      songs_menu:['All Songs','Artists','Albumns']
    }
  }
  componentDidMount(){
    var region = new ZingTouch.Region(document.getElementById('wheel-container'));
    region.bind(document.getElementById('wheel-container'),'rotate',(e) =>{
      let distLast = e.detail.distanceFromLast;
      this.angleFromCurrentPosition += distLast;
      if(this.angleFromCurrentPosition > 45)
      {
        this.selectedItem = (++this.selectedItem) % this.state.options.length;
        this.setState({
          selected : this.selectedItem
        });
        console.log(this.selectedItem);
        this.angleFromCurrentPosition = 0;
      }
      if(this.angleFromCurrentPosition < -45)
      {
        this.selectedItem = (--this.selectedItem < 0 ? this.state.options.length -1 :this.selectedItem) % this.state.options.length;
        this.setState({
          selected : this.selectedItem
        });
        console.log(this.selectedItem);
        this.angleFromCurrentPosition = 0;
      }
    });
  }


  handleOnItemSelection = () =>{
    if(document.getElementById('menu').classList.contains('display-none'))
    {
      return;
    }
    if(this.state.selected === 1 && this.state.options.length === 4)
    {
      this.setState({
        options:this.state.songs_menu,
        screenPanel : -1,
        isOnMusicPanel:true,
        selected : 0
      });
    }
    else
    {
      $('#menu').toggleClass('display-none');
      this.setState({
        screenPanel : this.selectedItem
      });
    }
  }

  toggleMenu = () => {
    $('#menu').toggleClass('display-none');
    this.selectedItem=0;
  }


  handleMenuButtonClick = () => {
    //$('#menu').toggleClass('display-none');
    this.toggleMenu();
    this.setState({
      screenPanel : -1
    });
  }

  handlePreviousButtonClick = () =>{
    
    if(this.state.isOnMusicPanel == true && (document.getElementById('menu').classList.contains('display-none')))
    {
      this.setState({
        options:['All Songs','Artists','Albumns'],
        screenPanel : -1,
        isOnMusicPanel:true,
        selected : 0
      });
      //$('#menu').toggleClass('display-none');
      this.toggleMenu();
      return;
    }
    
    this.setState({
      options:['Cover Flow','Music','Games','Settings'],
      selected : 0,
      screenPanel : -1,
      isOnMusicPanel:false,
      songs_menu:['All Songs','Artists','Albumns']
    });

    if(this.state.isOnMusicPanel == true && !(document.getElementById('menu').classList.contains('display-none')))
    {
      return;
    }
    this.toggleMenu();
    //$('#menu').toggleClass('display-none');
  }



  render(){
    return(
      <div className="main-container">
        <Screen 
        selectedMenuIndex = {this.state.selected}
        menuOptions = {this.state.options}
        screenPanel= {this.state.screenPanel}
        />
        <Wheel
        handleOnItemSelection = {this.handleOnItemSelection}
        handleMenuButtonClick = {this.handleMenuButtonClick}
        handlePreviousButtonClick = {this.handlePreviousButtonClick}
        />
      </div>
      );
  }
}

export default App;