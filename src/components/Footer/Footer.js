import React from 'react';
import './Footer.css';
import logo from '../../images/Logo.png'
import twitter from '../../images/twitter.png';
import arrow from '../../images/arrow.png';
import facebook from '../../images/facebook.png';
function Footer(){
    return(
        <div className='Footer_container'>
            {/* divison 1 */}
            <div className='Footer_container_div1'>
                {/* part1 */}
                <div className='Footer_container_div1_part1'>
                    <div className='footer_part1_head'>
                    <img src={logo} alt="logo" className='footer_logo_img'/>
                    <h1>OutGrow</h1>
                    </div>
                    <p>Outgrow old marketing! Interactive Content is here to stay. </p>
                    

                </div>
                {/* part2 */}
                <div className='Footer_container_div1_part1'>
                    <h2>DISCOVER</h2>
                    <p>Calculators</p>
                    <p>Quiz</p>
                    <p>Surveys</p>
                    <p>Chatbots</p>
                    <p>Assessments</p>

                </div>
                {/* part3 */}
                <div className='Footer_container_div1_part1'>
                    <h2>MENU</h2>
                    <p>Why Interactive Content?</p>
                    <p>Features</p>
                    <p>Affiliates</p>
                    <p>Templates</p>
                </div>
                {/*part4 */}
                <div className='Footer_container_div1_part1'>
                    <h2>Resources</h2>
                    <p>Academy</p>
                    <p>Blog</p>
                    <p>Themes</p>
                    <p>Pricing</p>
                    <p>Developers</p>
                    <p>Support</p>

                </div>
                {/*part5 */}
                <div className='Footer_container_div1_part1'>
                    <h2>Company</h2>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>FAQs</p>
                    <p>Teams</p>
                    <p>Contact Us</p>
                </div>

            </div>
            {/* division 2 */}
            <div className='footer_div2_part1'>
                <p>Get Started</p>
                <div>
                    <img src={facebook} alt="facebook" className='footer_links'/>
                    <img src={twitter} alt="twitter" className='footer_links'/>
                    <img src={arrow} alt='arrow' className='footer_links'/>
                </div>
            </div>
            {/* division 3 */}
            <hr/>
            <div className='footer_div3_part1'>
                <p>Privacy Policy</p>
                <p>Terms of Use</p>
                <p>Sales and Refunds</p>
                <p>Legal</p>
                <p>Site Map</p>
            </div>

        </div>
    );
}
export default Footer;