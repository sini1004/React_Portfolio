import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './HomeImg.scss'
import IntroImg from '../assets/professional-programmer-working-late-dark-office.jpg'

const HomeImg = () => {
  const completionWord = 'Publisher&Front-End Developer';
  const [blogTitle, setBlogTitle] = useState('');
  const [count, setCount] = useState(0);
  useEffect(() => {
    const typingInterval = setInterval(() => {
      setBlogTitle((prevTitleValue) => {
        let result = prevTitleValue ? prevTitleValue + completionWord[count] : completionWord[0];
        setCount(count + 1);

        if (count >= completionWord.length) {
          setCount(0);
          setBlogTitle('');
        }
        return result;
      });
    }, 400);

    return () => {
      clearInterval(typingInterval);
    };
  });

  return (
    <div className='intro'>
      <div className='mask'>
        <img className='intro-img' src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI, I'M A PARK SHINHEE.</p>
        <h1 className="main-title">{blogTitle}</h1>
        <div>
          <Link to='/project' className='btn'>Projects</Link>
          <Link to='/contact' className='btn btn-lignt'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HomeImg