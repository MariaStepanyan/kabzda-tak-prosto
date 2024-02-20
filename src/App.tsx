import React, { useState } from 'react'
import './App.css'
import { Accordion } from './components/Accordion/Accordion'
import { Rating, RatingValueType } from './components/Rating/Rating'
import { PageTitle } from './components/Title/Title'
import { UnControlledOnOff } from './components/unControlledOnOffonOff/UnControlledOnOff'
import { UnControlledAccordion } from './components/unControlledAccordion/UnControlledAccordion'
import { UnControlledRating } from './components/unControlledRating/UnControlledRating'
import { OnOff } from './components/onOff/OnOff'
import { Select } from './components/select/Select'

export type ItemType = {
  title: string
  id: number
}

const items: ItemType[] = [
  { title: 'Dimich', id: 1 },
  { title: 'Valera', id: 2 },
]

function App() {
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  const [accCollapsed, setAccCollapsed] = useState<boolean>(false)
  const [on, setOn] = useState<boolean>(false)
  const [selectValue, setSelectValue] = useState<number | undefined>()

  return (
    <div className="App">
      {/* <PageTitle title={'This is APP component'} /> */}
      {/* <Accordion title={'Menu'} collapsed={accCollapsed} setAccCollapsed={setAccCollapsed}/> */}
      {/* <UnControlledAccordion title={'Another'} /> */}
      {/* <Rating value={ratingValue} setRatingValue={setRatingValue}/>
      <UnControlledRating value={5}/>
      <UnControlledOnOff onChange={setOn}/> {on.toString()}
      <OnOff isOn={on} setOn ={setOn}/> */}
      <Select
        items={items}
        selectValue={selectValue}
        setSelectValue={setSelectValue}
      />
    </div>
  )
}

export default App
