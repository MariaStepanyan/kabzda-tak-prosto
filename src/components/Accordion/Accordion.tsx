type AccordionPropsType = {
  title: string
  collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
  console.log('Accordion rendering')

  return (
    <>
      <AccordionTitile accTitle={props.title} />
      {!props.collapsed && <AccordionBody />}
    </>
  )
}

type AccordionTitilePropstype = {
  accTitle: string
}

function AccordionTitile(props: AccordionTitilePropstype) {
  console.log('AccordionTitile rendering')
  return <h3>{props.accTitle}</h3>
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
