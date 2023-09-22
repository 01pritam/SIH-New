import React, { useState, useEffect } from 'react';
import './typew.css'; // Replace with the path to your CSS file
import image2 from './2.jpg';
import image1 from './1.jpg';

const TypewriterAnimation = ({ text1, text2 }) => {
  const [displayText1, setDisplayText1] = useState('');
  const [currentIndex1, setCurrentIndex1] = useState(0);

  const [displayText2, setDisplayText2] = useState('');
  const [currentIndex2, setCurrentIndex2] = useState(0);

  useEffect(() => {
    const delay = 100; // Adjust the delay between each letter (in milliseconds)

    // Typewriter animation for text1
    if (currentIndex1 < text1.length) {
      const timer1 = setTimeout(() => {
        setDisplayText1((prevText) => prevText + text1[currentIndex1]);
        setCurrentIndex1((prevIndex) => prevIndex + 1);
      }, delay);

      return () => {
        clearTimeout(timer1);
      };
    }

    // Typewriter animation for text2
    if (currentIndex2 < text2.length) {
      const timer2 = setTimeout(() => {
        setDisplayText2((prevText) => prevText + text2[currentIndex2]);
        setCurrentIndex2((prevIndex) => prevIndex + 1);
      }, delay);

      return () => {
        clearTimeout(timer2);
      };
    }
  }, [currentIndex1, currentIndex2, text1, text2]);

  return (
    <div className="typewriter-container">
         <img src={image1}/>
      <div>
         <span className="typewriter-text">{displayText1}</span>
       
      </div>
      <img src={image2}/>
      <div>
     
        <span className="typewriter-text">{displayText2}</span>
       
      </div>
    </div>
  );
};

export default TypewriterAnimation;