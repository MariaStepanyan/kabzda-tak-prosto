import { action } from '@storybook/addon-actions'

import { Accordion } from './Accordion'
import { useState } from 'react'

export default {
  component: Accordion,
}

const setAccCollapsedHandler = action('setAccCollapsed')
const onClickCallBack = action('want to change')

export const CollapsedAccordion = () => {
  return (
    <Accordion
      title={'Title'}
      collapsed={true}
      setAccCollapsed={setAccCollapsedHandler}
      items={[]}
      onClick={onClickCallBack}
    />
  )
}

export const OpenedAccordion = () => {
  return (
    <Accordion
      title={'Title'}
      collapsed={false}
      setAccCollapsed={() => {}}
      items={[
        { title: 'Dimich', value: 1 },
        { title: 'Valera', value: 2 },
      ]}
      onClick={onClickCallBack}
    />
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
      items={[
        { title: 'Dimich', value: 1 },
        { title: 'Valera', value: 2 },
      ]}
      onClick={onClickCallBack}
    />
  )
}
