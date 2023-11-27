import React from 'react'
import { findConfigFile } from 'typescript'
import './App.css'
import { Accordion } from './components/Accordion/Accordion'
import { Rating } from './components/Rating/Rating'
import { PageTitle } from './components/Title/Title'

function App() {
  console.log('App rendering')
  return (
    <div>
      <PageTitle title={'This is APP component'} />
      <Rating value={3} />
      <Accordion title={'Menu'} />
      <Accordion title={'Another'} />
      <Rating value={4} />
    </div>
  )
}

export default App
