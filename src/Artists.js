import React from 'react';

class Artists extends React.Component{
    render(){
        return(
            <div className="menuItem changeBgColor">
              <div id="artists-section">
                <div id="artists-cover"></div>
                <audio id="artists-song" controls autoPlay> 
                    <source src="https://gospelful.com/wp-content/uploads/2020/04/Maroon-5-Memories-gospelful.com_.mp3"/>
                </audio>
              </div>
            </div>
        );
    }
}
export default Artists;