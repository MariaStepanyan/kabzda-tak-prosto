import React, { useState } from 'react'
import './App.css'
import { Accordion } from './components/Accordion/Accordion'
import { Rating } from './components/Rating/Rating'
import { PageTitle } from './components/Title/Title'
import { OnOff } from './components/onOff/OnOff'
import { UnControlledAccordion } from './components/unControlledAccordion/UnControlledAccordion'
import { UnControlledRating } from './components/unControlledRating/UnControlledRating'

function App() {
  console.log('App rendering')

  return (
    <div className='App'>
      <PageTitle title={'This is APP component'} />
      <Rating value={3} />
      <Accordion title={'Menu'} collapsed={true} />
      {/* <Accordion title={'Another'} collapsed={false} /> */}
      <UnControlledAccordion title={'Another'}/>
      <Rating value={4} />
      <UnControlledRating />
      <OnOff isOn={true} /> 
    </div>
  )
}

export default App
