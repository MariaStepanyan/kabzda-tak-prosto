import { action } from '@storybook/addon-actions'

import { Select } from './Select'
import { useState } from 'react'
export default {
  component: Select,
}
export type ItemType = {
  title: string
  id: number
}

// const setAccCollapsedHandler = action('setAccCollapsed')

const items: ItemType[] = [
  { title: 'Dimich', id: 1 },
  { title: 'Valera', id: 2 },
]

export const MySelect = () => {
  const [collapsed, setCollapsed] = useState(true)
  const [selectValue, setSelectValue] = useState<number | undefined>()

  const onClickCollapsedHandler = () => {
    setCollapsed(!collapsed)
  }

  const onSelectOptionHandler = (id: number) => {
    setSelectValue(id)
    setCollapsed(true)
  }

  return (
    <div>
      <div
        onClick={onClickCollapsedHandler}
        style={{
          border: '1px solid black',
          maxWidth: '100px',
          height: '20px',
          cursor: 'pointer',
        }}
      >
        {items.find((el) => el.id === selectValue)?.title}
      </div>
      {!collapsed &&
        items.map((i) => (
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => onSelectOptionHandler(i.id)}
            key={i.id}
          >
            {i.title}
          </div>
        ))}
    </div>
  )
}
