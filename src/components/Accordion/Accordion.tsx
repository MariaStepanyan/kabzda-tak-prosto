import React from 'react'
import { ItemType } from '../../App'

type AccordionPropsType = {
  title: string
  collapsed: boolean
  setAccCollapsed: (collapsed: boolean) => void
  items: ItemType[]
}

const AccordionTitile = React.memo(AccordionTitileSecret)
const AccordionBody = React.memo(AccordionBodySecret)

export function AccordionSecret(props: AccordionPropsType) {
  return (
    <>
      <AccordionTitile
        accTitle={props.title}
        onClick={() => props.setAccCollapsed(!props.collapsed)}
      />
      {!props.collapsed && <AccordionBody items={props.items} />}
    </>
  )
}

type AccordionTitilePropstype = {
  accTitle: string
  onClick: () => void
}

function AccordionTitileSecret(props: AccordionTitilePropstype) {
  return <h3 onClick={() => props.onClick()}>{props.accTitle}</h3>
}

type AccordionBodyProps = {
  items: ItemType[]
}

function AccordionBodySecret(props: AccordionBodyProps) {
  return (
    <ul>
      {props.items.map((i, index) => (
        <li key={index}>{i.title}</li>
      ))}
    </ul>
  )
}
