import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { AiOutlineCopy } from "react-icons/ai";


function CreateJson() {
  const [context, setContext] = useState('[\n {\n   name: Mike,\n   age:18,\n   city:London,\n },\n {\n   name: Anna,\n   age:22,\n   city:New York,\n },\n {\n   name: Leo,\n   age:24,\n   city:New York,\n },\n]')
  const [alert, setAlert] = useState(false)

  useEffect(() =>{
    const checkTime = setTimeout(() =>{
      setAlert(false)
    }, 1200)
    return () => clearTimeout(checkTime)
  }, [alert])

  return (
    <main className='main'>
      <Wrapper>
        <h1>JSON Constructor</h1>
        <hr />

      <section className='json'>
        <AiOutlineCopy className={`${alert && 'active'} copy`} 
        onClick={() =>{
          setAlert(true) 
          navigator.clipboard.writeText(context)}
        } />
        <textarea className='input' value={context} onChange={(e) => setContext(e.target.value)}></textarea>
        <article className="result">{context}</article>
      </section>

        <Link to='/' className='btn'>Back To Home</Link>
      </Wrapper>
    </main>
  );
}

const Wrapper = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);
  text-align: center;
  h1{
      color: var(--clr-primary-2);
      padding: 1.5rem 0;
  }
  .btn{
    margin: 1.5rem 0;
  }
  .json {
    padding: 4rem;
    display: grid;
    row-gap: 4rem;
    color: var(--clr-primary-3);
    position: relative;
  }
  .input {
    background: var(--clr-grey-9);
    color: var(--clr-primary-5);
    border-radius: var(--radius);
    font-size: 1.2rem;
    line-height: 2;
    box-shadow: 0 0 10px var(--clr-primary-3);
    min-height: 30vh;
  }
    .copy{
    position: absolute;
    cursor: pointer;
    font-size: 25px;
    top: 10%;
    left: 2%;
  }
  .active{
    color: var(--clr-green-dark);
    transition: all 1s linear;
    transform: rotate(360deg);
  }
  .input,
  .result {
    padding: 1rem 2rem;
  }

  @media screen and (min-width: 992px) {
    .json {
      min-height: 100vh;
      grid-template-columns: 1fr 1fr;
      column-gap: 4rem;
    }
  }
`


export default CreateJson