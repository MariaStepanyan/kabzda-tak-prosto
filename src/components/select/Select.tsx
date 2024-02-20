import { useState, KeyboardEvent, useEffect } from 'react'
import { ItemType } from '../../App'
import styles from './select.module.css'

type SelectProps = {
  selectValue: number | undefined
  setSelectValue: (value: number | undefined) => void
  items: ItemType[]
}

export const SelectSecret = (props: SelectProps) => {
  const [collapsed, setCollapsed] = useState(true)
  const [hoveredElementValue, setHoveredElementValue] = useState(
    props.selectValue
  )

  const selectedItem = props.items.find((el) => el.id === props.selectValue)
  const hoveredItem = props.items.find((i) => i.id === hoveredElementValue)

  const onClickCollapsedHandler = () => {
    setCollapsed(!collapsed)
  }

  const onSelectOptionHandler = (id: number) => {
    props.setSelectValue(id)
    setCollapsed(true)
  }

  useEffect(() => {
    setHoveredElementValue(props.selectValue)
  }, [props.selectValue])

  const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      for (let i = 0; i < props.items.length; i++) {
        if (props.items[i].id === hoveredElementValue) {
          if (props.items[i].id) {
            const pretendentElement =
              e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
            if (pretendentElement) {
              props.setSelectValue(pretendentElement.id)
              return
            }
          }
        }
      }
      if (!selectedItem) {
        props.setSelectValue(props.items[0].id)
      }
    }
    if (e.key === 'Enter' || e.key === 'Escape') {
      setCollapsed(true)
    }
  }

  return (
    <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
      <span className={styles.main} onClick={onClickCollapsedHandler}>
        {selectedItem?.title}
      </span>
      {!collapsed && (
        <div className={styles.items}>
          {props.items.map((i) => (
            <div
              onMouseEnter={() => setHoveredElementValue(i.id)}
              className={
                styles.item + ' ' + (hoveredItem === i ? styles.selected : '')
              }
              onClick={() => onSelectOptionHandler(i.id)}
              key={i.id}
            >
              {i.title}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
