import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { RiLightbulbFlashFill } from "react-icons/ri";
import { GiNightSleep } from "react-icons/gi";


const getLocalStorage = () =>{
  let mood = 'light'
  if(localStorage.getItem('mood')){
    mood = localStorage.getItem('mood')
  }
  return mood
}

function DarkOrL() {
  const [mood, setMood] = useState(getLocalStorage())

  const changeMood = () =>{
      if(mood === 'light') setMood('dark')
      else setMood('light')
  }

  useEffect(() =>{
    // console.log(document.documentElement);
    document.documentElement.className = mood
    localStorage.setItem('mood', mood)
  }, [mood])

  return (
    <Wrapper>
        <button className='btn' onClick={changeMood}>
            {mood === 'dark' ? <RiLightbulbFlashFill /> : <GiNightSleep />}
        </button>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
    position: absolute;
    right: 2%;
    top: 5%;

    @media screen and (max-width: 900px) {
      right: 5%;
      top: 5%;
    }
`

export default DarkOrL