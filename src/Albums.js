import React from 'react';

class Albums extends React.Component{
    render(){
        return(
            <div className="menuItem changeBgColor">
                <div id="album-section">
                <div id="album-cover"></div>
                <audio id="album-song" controls autoPlay> 
                    <source src="https://pagalnew.com/mp3-songs/indipop-mp3-songs/baarish-ban-jaana-payal-dev-128-kbps-sound.mp3"/>
                </audio>
              </div>
            </div>
        );
    }
}
export default Albums;