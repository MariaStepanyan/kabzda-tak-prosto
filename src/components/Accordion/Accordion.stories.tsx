import { action } from '@storybook/addon-actions'

import { AccordionSecret } from './Accordion'
import { useState } from 'react'

export default {
  component: AccordionSecret,
}

const setAccCollapsedHandler = action('setAccCollapsed')
const onClickCallBack = action('want to change')

export const CollapsedAccordion = () => {
  return (
    <AccordionSecret
      title={'Title'}
      collapsed={true}
      setAccCollapsed={setAccCollapsedHandler}
      items={[]}
    />
  )
}

export const OpenedAccordion = () => {
  return (
    <AccordionSecret
      title={'Title'}
      collapsed={false}
      setAccCollapsed={() => {}}
      items={[
        { title: 'Dimich', id: 1 },
        { title: 'Valera', id: 2 },
      ]}
    />
  )
}

export const AccordionDemo = () => {
  const [accCollapsed, setAccCollapsed] = useState<boolean>(false)
  return (
    <AccordionSecret
      title={'Title'}
      collapsed={accCollapsed}
      setAccCollapsed={() => {
        setAccCollapsed(!accCollapsed)
      }}
      items={[
        { title: 'Dimich', id: 1 },
        { title: 'Valera', id: 2 },
      ]}
    />
  )
}
