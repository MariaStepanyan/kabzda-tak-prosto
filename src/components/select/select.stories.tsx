import { action } from '@storybook/addon-actions'

import { SelectSecret } from './Select'
import { FC, useMemo, useState } from 'react'
export default {
  component: SelectSecret,
}
export type ItemType = {
  title: string
  id: number
}
type Cities = {
  id: number
  city: string
  country: string
  count: number
}

// const setAccCollapsedHandler = action('setAccCollapsed')

const items: ItemType[] = [
  { title: 'Dimich', id: 1 },
  { title: 'Valera', id: 2 },
]

const cities: Cities[] = [
  { id: 1, city: 'Minsk', country: 'Belarus', count: 2000000 },
  { id: 2, city: 'Moscow', country: 'Russia', count: 13000000 },
  { id: 3, city: 'Stavropol', country: 'Russia', count: 500000 },
  { id: 4, city: 'Erevan', country: 'Armenia', count: 1000000 },
  { id: 5, city: 'Samara', country: 'Russia', count: 1000000 },
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
          <div onClick={() => onSelectOptionHandler(i.id)} key={i.id}>
            {i.title}
          </div>
        ))}
    </div>
  )
}

export const SelectForMemo = () => {
  const [value, setValue] = useState<number>(1)

  const citiesRussia = useMemo(() => {
    return cities.filter((c) => c.country === 'Russia')
  }, [cities])
  const citiesM = useMemo(() => {
    return cities.filter((c) => c.city.split('')[0].toLowerCase() === 'm')
  }, [cities])
  const citiesCount = useMemo(() => {
    return cities.filter((c) => c.count > 10000000)
  }, [cities])
  return (
    <>
      {value}
      <button
        onClick={() => {
          setValue(value + 1)
        }}
      >
        +
      </button>
      <Example cities={citiesRussia} />
      <Example cities={citiesM} />
      <Example cities={citiesCount} />
    </>
  )
}

type ExampleType = {
  cities: Cities[]
}

const Example: FC<ExampleType> = ({ cities }) => {
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
        {cities.find((el) => el.id === selectValue)?.city}
      </div>
      {!collapsed &&
        cities.map((i) => (
          <div onClick={() => onSelectOptionHandler(i.id)} key={i.id}>
            {i.city}
          </div>
        ))}
    </div>
  )
}
