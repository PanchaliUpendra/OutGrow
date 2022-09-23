import React from 'react';
import './Part1.css';
import Img1 from '../../images/img1.png'
function Part1(){
    return(
        <div className='Part1_container'>
            {/*part1 division one*/}
            <div className='Part1_div1'>
            <div>
            <h1>Boost Your</h1>
            <h1>Marketing with</h1>
            <h1><span style={{color:"#FB5F66"}}>Interactive</span> Content</h1>
            </div>
            <div>
                <p>To get quality leads , use Outgrow's easy no-code solutions</p>
            </div>
            <div className='Part1_btns'>
                <p className='Part1_btns_get_start'>Get Started</p>
                <p>Learn more</p>
            </div>
            </div>
            {/*part1 division two*/}
            <div>
                <img src={Img1} alt="Img1" className='Part1_img1'/>
            </div>
            
        </div>
    );
}
export default Part1;