import React from 'react';
import Image from '../image/Image';
import '../../App.css'


const Header = ({
    className,
}) => {

  return (
    <div>
      <Image className="image-size"></Image>
      <div className="App">
        <div className="App-header">
            <h2 style={{padding : '30px'}}>{className}</h2>
        </div>
      </div>
    </div>
  );
    }

export default Header;