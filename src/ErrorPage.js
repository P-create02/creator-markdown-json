import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';


function ErrorPage() {
  return (
    <main className='main'>
      <Wrapper>
        <h1>Sorry, the page you tried dont exist</h1>
        <Link to='/' className='btn'>Back To Home</Link>
      </Wrapper>
    </main>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  margin-top: 10%;
  background: transparent;
  padding: 5rem 0;
  box-shadow: 0 0 100px var(--clr-primary-3);

  h1{
    margin-bottom: 2rem;
    color: var(--clr-primary-5);
  }

  @media screen and (max-width: 600px) {
    margin-top: 20%;
  }
`


export default ErrorPage