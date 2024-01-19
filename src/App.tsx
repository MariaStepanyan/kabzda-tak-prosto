import React, { useState } from 'react'
import './App.css'
import { Accordion } from './components/Accordion/Accordion'
import { Rating } from './components/Rating/Rating'
import { PageTitle } from './components/Title/Title'
import { OnOff } from './components/onOff/OnOff'

function App() {
  console.log('App rendering')

  return (
    <div>
      <PageTitle title={'This is APP component'} />
      <Rating value={3} />
      <Accordion title={'Menu'} collapsed={true} />
      <Accordion title={'Another'} collapsed={false} />
      <Rating value={4} />
      <OnOff isOn={true} /> 
    </div>
  )
}

export default App
