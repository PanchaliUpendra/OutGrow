import React from 'react';
import './Part4.css';
import Link from '../../images/link.png';
import Star from '../../images/star.png';
import Tick from '../../images/tick.png';
import Img3 from '../../images/img3.png';
function Part4(){
    return(
        <div>
            <div className='Part4_first_para'>
                <h1>Why Outgrow</h1>
                <p>Content that is tailored to the needs of today's marketer.
                 Its uniquely beautiful design & functionalities, Outgrow's 
                brand new interactive content is a game changer for improving Website Engagement & Lead Generation.</p>
            </div>

            <div className='Part4_features_box'>
                <div className='Part4_features_each_box'>
                    <img src={Link} alt="Link" className='Part4_features_img'/>
                    <h3>Qualify Leads and Add Value</h3>
                    <p>Give personalized answers to your customer’s most pressing questions, while qualifying your leads.</p>
                    <p className='Part4_boxes_read_more'>Read More</p>
                </div>
                <div className='Part4_features_each_box'>
                    <img src={Star} alt="Star" className='Part4_features_img'/>
                    <h3>Increase Lead Conversion Rates</h3>
                    <p>Use our 1000+ beautiful pre-optimized templates to improve your conversion rates to over 40%!</p>
                    <p className='Part4_boxes_read_more'>Read More</p>
                </div>
                <div className='Part4_features_each_box'>
                    <img src={Tick} alt="Tick" className='Part4_features_img'/>
                    <h3>Publish Within Minutes Anywhere</h3>
                    <p>Embed Outgrow content on your page, as a popup, in chat, exit intent or on your subdomai</p>
                    <p className='Part4_boxes_read_more'>Read More</p>
                </div>
            </div>
            <div className='Part4_ourvalues'>
                <div>
                    <img src={Img3} alt="img3" className='Part4_ourvalues_img3' />
                </div>
                <div className='part4_ourvalues_part2'>
                    <h1>Our Values</h1>
                    <p>"Outgrow performs better for us than blogs and ebooks because of the personalization it offers. 
                        It's not just about reading or watching content anymore, each prospect gets personalized and 
                        relevant information in real time whether it be through a calculator, quiz, recommendation, or chatbot."</p>
                    <h3>Leonard Kim,<br/>
                        Top Marketing Influencer, Forbes</h3>
                </div>
            </div>
        </div>
    );
}
export default Part4;