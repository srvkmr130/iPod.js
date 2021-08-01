
import React from 'react';

class AllSongs extends React.Component{
    render(){
        return(
            <div className="menuItem">
               <div id="all-songs-container">
                   <div id ="song1"></div>
                   <div id ="song2"></div>
                   <div id ="song3"></div>
                   <div id ="song4"></div>
               </div>
            </div>
        );
    }
}
export default AllSongs;