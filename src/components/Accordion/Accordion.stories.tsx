import {action} from '@storybook/addon-actions'

import { Accordion } from './Accordion'
import { useState } from 'react'

export default {
  component: Accordion,
}



const setAccCollapsedHandler = action('setAccCollapsed')

export const CollapsedAccordion = () => {
  return (
    <Accordion
      title={'Title'}
      collapsed={true}
      setAccCollapsed={setAccCollapsedHandler}
    />
  )
}

export const OpenedAccordion = () => {
  return (
    <Accordion title={'Title'} collapsed={false} setAccCollapsed={() => {}} />
  )
}

export const AccordionDemo = () => {
  const [accCollapsed, setAccCollapsed] = useState<boolean>(false)
  return (
    <Accordion
      title={'Title'}
      collapsed={accCollapsed}
      setAccCollapsed={() => {
        setAccCollapsed(!accCollapsed)
      }}
    />
  )
}
