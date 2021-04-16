import React, { useState, useEffect } from 'react'
// from !!! https://github.com/remarkjs/react-markdown !!!
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { AiOutlineCopy } from "react-icons/ai";


function App() {
  const [markdown, setMarkDown] = useState('1. Write \n## Your \n### markdown \n4. here')
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
        <h1>Mark Editor</h1>
        <hr />

      <section className='markdown'>
        <AiOutlineCopy className={`${alert && 'active'} copy`} 
        onClick={() =>{
          setAlert(true) 
          navigator.clipboard.writeText(markdown)}
        } />

        <textarea className='input' value={markdown} 
        onChange={(e) => setMarkDown(e.target.value)}></textarea>

        <article className="result"><ReactMarkdown>
          {markdown}
        </ReactMarkdown></article>
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
  .markdown {
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
    .markdown {
      min-height: 100vh;
      grid-template-columns: 1fr 1fr;
      column-gap: 4rem;
    }
  }
`

export default App