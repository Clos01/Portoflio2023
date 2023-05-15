import React from 'react';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Card from '../Components/Cards';
import Work from '../Components/Work';
function Home() {
  return (
    <>
<Hero/>
<div style={{position: 'relative', display: 'flex', flexDirection: 'column'}}>
        <About/>
        <Card/>
        <Work/>
      </div>
      
    </>
  )
}

export default Home