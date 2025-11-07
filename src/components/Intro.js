import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Me from '../assets/Images/profile-img.png'


const Box = styled(motion.div)`

position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);


width: 65vw;
height:55vh;
display: flex;


background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};


    z-index:1;

    /* Mobile adjustments */
    @media (max-width: 768px) {
        width: 92vw;
        height: auto !important; /* override framer-motion inline height */
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
    }
    @media (max-width: 480px) {
        width: 94vw;
    }
`
const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;

.pic{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0%);
    width: 100%;
    height: auto;
}

/* Mobile layout tweaks */
@media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    .pic{
        position: relative;
        left: auto;
        bottom: auto;
        transform: none;
        width: 70%;
        max-width: 320px;
    }
}
@media (max-width: 480px) {
    .pic{
        width: 72%;
        max-width: 280px;
    }
}
`

const Text = styled.div`
font-size: calc(1em + 1.5vw);
color: ${props => props.theme.body};
padding: 2rem;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: space-evenly;

/* Typography for mobile */
@media (max-width: 768px) {
    font-size: calc(1em + 1vw);
    padding: 1.25rem 1rem 0.5rem;
    align-items: center;
    text-align: center;
}
@media (max-width: 480px) {
    font-size: calc(0.95em + 0.8vw);
}

&>*:last-child{
    color: ${props => `rgba(${props.theme.bodyRgba},0.6)` };
    font-size: calc(0.5rem + 1.5vw);
    font-weight:300;

}

@media (max-width: 768px) {
    &>*:last-child{
        font-size: calc(0.6rem + 1.2vw);
    }
}



`

const Intro = () => {
    return (
        <Box
        initial={{height:0}}
        animate={{height: '55vh'}}
        transition={{ type: 'spring', duration:2, delay:1 }}
        >
            <SubBox>
                <Text>
                    <h1>Hi,</h1>
                    <h3>I'm Dayanithi!</h3>
                    <h6>I'm a full‑stack developer and AI engineer.</h6>
                </Text>
            </SubBox>
            <SubBox>
                <motion.div
                initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{ duration:1, delay:2 }}
                >
                    <img className="pic" src={Me} alt="Profile Pic" />
                </motion.div>
            </SubBox>
        </Box>
    )
}

export default Intro
