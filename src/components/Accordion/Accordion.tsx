type AccordionPropsType = {
  title: string
  collapsed: boolean
  setAccCollapsed: (collapsed: boolean) => void
  
}

export function Accordion(props: AccordionPropsType) {
  return (
    <>
      <AccordionTitile
        accTitle={props.title}
        onClick={() => props.setAccCollapsed(!props.collapsed)}
      />
      {!props.collapsed && <AccordionBody />}
    </>
  )
}

type AccordionTitilePropstype = {
  accTitle: string
  onClick: () => void
}

function AccordionTitile(props: AccordionTitilePropstype) {
  return <h3 onClick={() => props.onClick()}>{props.accTitle}</h3>
}

function AccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}
