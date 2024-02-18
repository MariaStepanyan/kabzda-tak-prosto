type ItemType = {
  title: string,
  value: any
}

type AccordionPropsType = {
  title: string
  collapsed: boolean
  setAccCollapsed: (collapsed: boolean) => void
  items: ItemType[]
  onClick: (value:any) => void
}

export function Accordion(props: AccordionPropsType) {
  return (
    <>
      <AccordionTitile
        accTitle={props.title}
        onClick={() => props.setAccCollapsed(!props.collapsed)}
      />
      {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
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

type AccordionBodyProps = {
  items: ItemType[]
  onClick: (value:any) => void
}

function AccordionBody(props: AccordionBodyProps) {
  return (
    <ul>
      {props.items.map((i, index) => (
        <li onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</li>
      ))}
    </ul>
  )
}
