import { useState } from 'react'
import { ItemType } from '../../App'

type SelectProps = {
  selectValue: number | undefined
  setSelectValue: (value: number | undefined) => void
  items: ItemType[]
}

export const Select = (props: SelectProps) => {
  const [collapsed, setCollapsed] = useState(true)

  const onClickCollapsedHandler = () => {
    setCollapsed(!collapsed)
  }

  const onSelectOptionHandler = (id: number) => {
    props.setSelectValue(id)
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
        {props.items.find((el) => el.id === props.selectValue)?.title}
      </div>
      {!collapsed &&
        props.items.map((i) => (
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
