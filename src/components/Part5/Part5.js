import React from 'react';
import './Part5.css';
import per1 from '../../images/per1.png';
import per2 from '../../images/per2.png';
import per3 from '../../images/per3.png';
import per4 from '../../images/per4.png';
import star5 from '../../images/5star.png';
import leftbtn from '../../images/leftbtn.png';
import rightbtn from '../../images/rightbtn.png';
function Part5(){
    return(
        <div className='part5_container'>
            <div className='Part5_each_two_comment'>
                <div>
                {/* person1 comment */}
                <div className='Part5_each_comment'>
                    <div className='Part5_comment_head'>
                        <img src={per1} alt="per1" className='Part5_each_comment_img'/>
                        <div>
                            <h4>Josh brollins</h4>
                            <p>google.com</p>
                        </div>
                        <img src={star5} alt="per2" className='Part5_each_comment_img_star5'/>
                    </div>
                    <div>
                        <p>Outgrow is the gamification of online customer engagement, a conversion 
                            machine that improves the experience of our visitors.</p>
                    </div>
                </div>
                {/* person2 comment */}
                <div className='Part5_each_comment'>
                <div className='Part5_comment_head'>
                        <img src={per2} alt="per1" className='Part5_each_comment_img'/>
                        <div>
                            <h4>Josh brollins</h4>
                            <p>google.com</p>
                        </div>
                        <img src={star5} alt="per2" className='Part5_each_comment_img_star5'/>
                    </div>
                    <div>
                        <p>Outgrow is the gamification of online customer engagement, a conversion 
                            machine that improves the experience of our visitors.</p>
                    </div>
                </div>
                </div>
                {/* person3 comment */}
                <div>
                <div className='Part5_each_comment'>
                        <div className='Part5_comment_head'>
                        <img src={per3} alt="per1" className='Part5_each_comment_img'/>
                        <div>
                            <h4>Josh brollins</h4>
                            <p>google.com</p>
                        </div>
                        <img src={star5} alt="per2" className='Part5_each_comment_img_star5'/>
                        </div>
                    <div>
                        <p>Outgrow is the gamification of online customer engagement, a conversion 
                            machine that improves the experience of our visitors.</p>
                    </div>

                </div>
                {/* person4 comment */}
                <div className='Part5_each_comment'>
                <div className='Part5_comment_head'>
                        <img src={per4} alt="per1" className='Part5_each_comment_img'/>
                        <div>
                            <h4>Josh brollins</h4>
                            <p>google.com</p>
                        </div>
                        <img src={star5} alt="per2" className='Part5_each_comment_img_star5'/>
                    </div>
                    <div>
                        <p>Outgrow is the gamification of online customer engagement, a conversion 
                            machine that improves the experience of our visitors.</p>
                    </div>
                </div>
                </div>
            </div>
            {/* left and right buttons */}
            <div className='part5_all_btns'>
            <img src={rightbtn} alt="rightbtn" className='part5_left_btn_img'/>
                <img src={leftbtn} alt="leftbtn" className='part5_left_btn_img'/>
                
            </div>

        </div>
    );
}
export default Part5;