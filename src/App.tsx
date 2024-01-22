import React, { useState } from 'react'
import './App.css'
import { Accordion } from './components/Accordion/Accordion'
import { Rating, RatingValueType } from './components/Rating/Rating'
import { PageTitle } from './components/Title/Title'
import { UnControlledOnOff } from './components/unControlledOnOffonOff/UnControlledOnOff'
import { UnControlledAccordion } from './components/unControlledAccordion/UnControlledAccordion'
import { UnControlledRating } from './components/unControlledRating/UnControlledRating'
import { OnOff } from './components/onOff/OnOff'

function App() {
  console.log('App rendering')
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  const [accCollapsed, setAccCollapsed] = useState<boolean>(false)
  const [on, setOn] = useState<boolean>(false)

  return (
    <div className="App">
      <PageTitle title={'This is APP component'} />
      {/* <Rating value={3} /> */}
      {/* <Accordion title={'Menu'} collapsed={accCollapsed} setAccCollapsed={setAccCollapsed}/> */}
      {/* <Accordion title={'Another'} collapsed={false} /> */}
      {/* <UnControlledAccordion title={'Another'} /> */}
      {/* <Rating value={ratingValue} setRatingValue={setRatingValue}/> */}
      {/* <UnControlledRating /> */}
      {/* <UnControlledOnOff onChange={setOn}/> {on.toString()} */}
      <OnOff isOn={on} setOn ={setOn}/>
    </div>
  )
}

export default App
