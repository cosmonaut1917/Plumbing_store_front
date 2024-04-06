import React from 'react';
import Placeholder from '../assets/images/Store_assets/cuba_mentioned.png';
// import PipePlaceholder from '../assets/images/Store_assets/pipe_placeholder.png';
class InventoryImage extends React.Component {
    render() {
        return (
            <div>
             <img src={Placeholder} alt="inventory" />
             {/* <img src={PipePlaceholder} alt="inventory2" /> */}
           </div>
        );
    }
}

export default InventoryImage;