import { useState } from 'react'

type AccordionPropsType = {
  title: string
}

export function UnControlledAccordion(props: AccordionPropsType) {
  console.log('Accordion rendering')
 

  const [collapsed, setCollapsed] = useState(true)

  const onClickHandler = () => {
    setCollapsed(!collapsed)
  }

  return (
    <>
      <AccordionTitile accTitle={props.title} onClick={onClickHandler}/>
      {collapsed && <AccordionBody />}
    </>
  )
}

type AccordionTitilePropstype = {
  accTitle: string
  onClick: () => void
}

function AccordionTitile(props: AccordionTitilePropstype) {
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




function AccordionBody() {
  console.log('AccordionBody rendering')
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}
