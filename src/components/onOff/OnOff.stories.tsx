import { action } from '@storybook/addon-actions'

import { OnOff } from './OnOff'
import { useState } from 'react'

export default {
  component: OnOff,
}

// const setAccCollapsedHandler = action('setAccCollapsed')

export const On = () => {
  return <OnOff isOn={true} setOn={() => {}} />
}

export const Off = () => {
  return <OnOff isOn={false} setOn={() => {}} />
}

export const Toggle = () => {
  const [isOn, setIsOn] = useState(false)
  return <OnOff isOn={isOn} setOn={() => setIsOn(!isOn)} />
}