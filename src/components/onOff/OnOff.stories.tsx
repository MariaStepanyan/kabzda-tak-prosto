import { action } from '@storybook/addon-actions'

import { OnOffSecret } from './OnOff'
import { useState } from 'react'

export default {
  component: OnOffSecret,
}

// const setAccCollapsedHandler = action('setAccCollapsed')

export const On = () => {
  return <OnOffSecret isOn={true} setOn={() => {}} />
}

export const Off = () => {
  return <OnOffSecret isOn={false} setOn={() => {}} />
}

export const Toggle = () => {
  const [isOn, setIsOn] = useState(false)
  return <OnOffSecret isOn={isOn} setOn={() => setIsOn(!isOn)} />
}