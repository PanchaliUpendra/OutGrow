import React from 'react';
import './Part2.css';
import Uber from '../../images/uber.png';
import Nike from '../../images/nike.png';
import Adobe from '../../images/adobe.png';
import State from '../../images/statefarm.png';
function Part2(){
    return(
        <div className='Part2_container'>
            <div className='Part2-each-images'>
                <img src={Uber} alt="uber" className='Part2-images'/>
                <img src={Nike} alt="Nike" className='Part2-images'/>
                <img src={Adobe} alt="Adobe" className='Part2-images'/>
                <img src={State} alt="State" className='part2-state-frame'/>
            </div>

        </div>
    );
}
export default Part2;