import { useState } from 'react';
import CEOImage from '../assets/About/Sherjeel.jpeg';
import COOImage from '../assets/About/NabeelPic.jpeg';
import '../styles/AboutSwiper.css';


const AboutSwiper = () => {
    const [activeLeader, setActiveLeader] = useState('CEO');  // Default to CEO

    return (
        <div className="leadership-wrapper">
        <div className="leadership-container">
            <div className="images-container">
                <img 
                    src={CEOImage} 
                    alt="CEO" 
                    className={`leader-image ${activeLeader === 'CEO' ? 'active' : ''}`}
                    onClick={() => setActiveLeader('CEO')}
                />
                <img 
                    src={COOImage} 
                    alt="COO" 
                    className={`leader-image ${activeLeader === 'COO' ? 'active' : ''}`}
                    onClick={() => setActiveLeader('COO')}
                />
            </div>
             <div className="pagination-container">
                    <span 
                        className={`pagination-dot ${activeLeader === 'CEO' ? 'active' : ''}`}
                        onClick={() => setActiveLeader('CEO')}
                    ></span>
                    <span 
                        className={`pagination-dot ${activeLeader === 'COO' ? 'active' : ''}`}
                        onClick={() => setActiveLeader('COO')}
                    ></span>
                </div>
            <div className="message-container">
                {activeLeader === 'CEO' ? 
                <div className='Message_CEO'>
                    <div className='Message_1'>
                        <p className='para_1'>A word from our CEO</p>
                        <p className='para_2'>Codseed is a visionary company that holds firm ground in technology and science. The ideology is to help businesses grow and flourish in digital domain by providing them competitive engineering solutions. We are committed to grow as a team and deliver services which are distinguished in international market.</p>
                    </div>
                    <p className='para_3'>Sherjeel Nasir</p>
                    <p className='para_4'>CEO</p>
                </div> 
                
                :  <div className='Message_CEO'>
                <div className='Message_1'>
                    <p className='para_1'>A word from our COO</p>
                    <p className='para_2'>Codseed is a visionary company that holds firm ground in technology and science. The ideology is to help businesses grow and flourish in digital domain by providing them competitive engineering solutions. We are committed to grow as a team and deliver services which are distinguished in international market.</p>
                </div>
                <p className='para_3'>Nabeel Nasir</p>
                <p className='para_4'>COO</p>
            </div> 
            }
            </div>
        </div>
        </div>
    );
}

export default AboutSwiper