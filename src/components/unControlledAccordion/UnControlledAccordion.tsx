import { useReducer } from 'react'
import { TOGGLE_COLLAPSED, reducer } from './reducer'
import React from 'react'

type AccordionPropsType = {
  title: string
}

const AccordionTitile = React.memo(AccordionTitileSecret)
const AccordionBody = React.memo(AccordionBodySecret)

export function UnControlledAccordionSecret(props: AccordionPropsType) {
  console.log('Accordion rendering')

  const [state, dispatch] = useReducer(reducer, {collapsed: false})

  const onClickHandler = () => {
    dispatch({ type: TOGGLE_COLLAPSED })
  }

  return (
    <>
      <AccordionTitile accTitle={props.title} onClick={onClickHandler} />
      {state.collapsed && <AccordionBody />}
    </>
  )
}

type AccordionTitilePropstype = {
  accTitle: string
  onClick: () => void
}

function AccordionTitileSecret(props: AccordionTitilePropstype) {
  console.log('AccordionTitile rendering')
  return <h3 onClick={props.onClick}>{props.accTitle}</h3>
}

// 2 variant

// return (
//   <>
//     <AccordionTitile
//       accTitle={props.title}
//       setCollapsed={setCollapsed}
//       collapsed={collapsed}
//     />
//     {collapsed && <AccordionBody />}
//   </>
// )
// }

// type AccordionTitilePropstype = {
// accTitle: string
// setCollapsed: (collapsed: boolean) => void
// collapsed: boolean
// }

// function AccordionTitile(props: AccordionTitilePropstype) {
// console.log('AccordionTitile rendering')
// return (
//   <h3 onClick={() => props.setCollapsed(!props.collapsed)}>
//     {props.accTitle}
//   </h3>
// )
// }

function AccordionBodySecret() {
  console.log('AccordionBody rendering')
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}
