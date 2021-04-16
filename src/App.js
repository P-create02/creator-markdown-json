import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';


function App() {
  return (
    <main className='main'>
      <Wrapper>
        <div className="app_functions">
          <div className="title_json">
            <h2>Create your own JSON Data</h2>
          </div>
          <div className="link_json">
            <Link to='/json' className='btn'><h3>JSON</h3></Link>
          </div>
          <div className="link_markdown">
            <Link to='/markdown' className='btn'><h3>Markdown</h3></Link>
          </div>
          <div className="title_markdown">
            <h2>Create Markdown text</h2>
          </div>
        </div>
      </Wrapper>
    </main>
  );
}


const Wrapper = styled.main`
  width: 90vw;
  margin: 6rem auto;

  .app_functions{
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 50px 10px;
    div{
      text-align: center;
      display: grid;
      padding: 2rem;
      position: relative;
    }
    h3{
      text-transform: uppercase;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%)
    }
  }

  h2{
    text-transform: uppercase;
    color: var(--clr-primary-2);
  }
  .title_json, .title_markdown{
    box-shadow: 0 5px 15px var(--clr-primary-2);
    border-radius: var(--radius);
    border-color: transparent;
  }


  @media screen and (max-width: 666px) {
    margin: 3.5rem auto;
    .app_functions{
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
      gap: 10px 10px;
    }
  }
  @media screen and (max-width: 333px) {
     div{
      padding: 1.5rem 0.5rem !important;
     }
  }
`

export default App;
