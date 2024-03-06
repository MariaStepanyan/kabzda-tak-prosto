import React, { useState } from 'react'
import './App.css'
import { AccordionSecret } from './components/Accordion/Accordion'
import { RatingSecret, RatingValueType } from './components/Rating/Rating'
import { PageTitleSecret } from './components/Title/Title'
import { UnControlledOnOffSecret } from './components/unControlledOnOffonOff/UnControlledOnOff'
import { UnControlledAccordionSecret } from './components/unControlledAccordion/UnControlledAccordion'
import { UnControlledRatingSecret } from './components/unControlledRating/UnControlledRating'
import { OnOffSecret } from './components/onOff/OnOff'
import { SelectSecret } from './components/select/Select'
import { SetTimeOutExample } from './components/setTimeOutExample/SetTimeOutExample'

export type ItemType = {
  title: string
  id: number
}

const items: ItemType[] = [
  { title: 'Dimich', id: 1 },
  { title: 'Valera', id: 2 },
]

export const PageTitle = React.memo(PageTitleSecret)
export const Accordion = React.memo(AccordionSecret)
export const UnControlledAccordion = React.memo(UnControlledAccordionSecret)
export const Rating = React.memo(RatingSecret)
export const UnControlledRating = React.memo(UnControlledRatingSecret)
export const UnControlledOnOff = React.memo(UnControlledOnOffSecret)
export const OnOff = React.memo(OnOffSecret)
export const Select = React.memo(SelectSecret)

function App() {
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  const [accCollapsed, setAccCollapsed] = useState<boolean>(false)
  const [on, setOn] = useState<boolean>(false)
  const [selectValue, setSelectValue] = useState<number | undefined>()

  return (
    <div className="App">
      <SetTimeOutExample/>
      {/* <PageTitle title={'This is APP component'} />
      <Accordion
        items={items}
        title={'Menu'}
        collapsed={accCollapsed}
        setAccCollapsed={setAccCollapsed}
      />
      <UnControlledAccordion title={'Another'} />
      <Rating value={ratingValue} setRatingValue={setRatingValue} />
      <UnControlledRating value={5} />
      <UnControlledOnOff onChange={setOn} /> {on.toString()}
      <OnOff isOn={on} setOn={setOn} />
      <Select
        items={items}
        selectValue={selectValue}
        setSelectValue={setSelectValue}
      /> */}
    </div>
  )
}

export default App
