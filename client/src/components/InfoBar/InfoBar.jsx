import React from 'react';


import './InfoBar.css';

const InfoBar = ({ room }) => (
  
  <div className="infoBar">
   <h3>room number:</h3>
    <div className="leftInnerContainer">
     
      <h7>{room}</h7>
    </div>
    <div className="rightInnerContainer">
     
    </div>
  </div>
);

export default InfoBar;