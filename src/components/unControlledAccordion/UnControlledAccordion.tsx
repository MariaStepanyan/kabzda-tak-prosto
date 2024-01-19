import { useState } from "react"

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
      <AccordionTitile accTitle={props.title} onClickHandler={onClickHandler}/>
      {collapsed && <AccordionBody />}
    </>
  )
}

type AccordionTitilePropstype = {
  accTitle: string
  onClickHandler: () => void
}

function AccordionTitile(props: AccordionTitilePropstype) {
  console.log('AccordionTitile rendering')
  return <h3 onClick={props.onClickHandler}>{props.accTitle}</h3>
}

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
