import React from 'react';
import './Part3.css';
import IMG3 from '../../images/img2.png';
function Part3(){
    return(
        <div className='Part3_container'>
            <div>
                <img src={IMG3} alt="img3" className='Part3_img1'/>
            </div>
            <div className='Part3_about_para'>
                <div>
                    <h1>About Us</h1>
                    <p >Outgrow old marketing! 
                        Interactive Content is 
                        here to stay. We help you 
                        create beautiful, interactive 
                        calculators, quizzes, 
                        recommendations, polls, and chatbots to delight your customers & generate leads.</p>
                </div>
                <div className='Part3_boxes'>
                    <div className='Part3_boxes_each1'>
                        <h3>VISITS</h3>
                        <p className='Part3_boxes_data'>248k+</p>
                    </div>
                    <div className='Part3_boxes_each2'>
                        <h3>LEADS</h3>
                        <p className='Part3_boxes_data'>82k+</p>
                    </div>
                    <div className='Part3_boxes_each3'>
                        <h3>CONVERSION RATE</h3>
                        <p className='Part3_boxes_data'>33%</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Part3;