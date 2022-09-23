import React from 'react';
import './Free.css';
function Free(){
    return(
        <div className='Free_trail_container'>
            <div className='Free_trail_container_part1'>
            <div >
                <h1>Get a Free Trial Now!</h1>
                <p>No credit card required. Try out the tool for free!</p>
            </div>
            <div className='Free_input_btn'>
                <div>
                <input type="text" placeholder="enter your mail" className='free_input_extra'/>
                </div>
                <div >
                <p className='free_input_btn_get'>Get Starteds</p>
                </div>
                
            </div>
            </div>


        </div>
    );
}
export default Free;