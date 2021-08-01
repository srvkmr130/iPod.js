import React from 'react';

class CoverFlow extends React.Component{
    render(){
        return(
            <div className="menuItem">
                <div id="coverflow-section">
                    <p id="coverflow-title" className="changeTextColor">Playing : Faded</p>
                    <div id="coverflow-img" className="scaleUp">  
                        <audio autoPlay src="https://paglasongs.com/files/download/id/1716"></audio>
                    </div>
                </div>
            </div>
        );
    }
}
export default CoverFlow;