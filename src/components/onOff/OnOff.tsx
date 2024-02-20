import s from './onoff.module.css'

type OnOffPropsType = {
  isOn: boolean
  setOn: (isOn: boolean) => void
}

export const OnOffSecret = (props: OnOffPropsType) => {
  const onClickHandler = () => {
    props.setOn(!props.isOn)
  }

  return (
    <div className={s.wrapper}>
      <button onClick={onClickHandler} className={props.isOn ? s.on : ''}>
        on
      </button>
      <button onClick={onClickHandler} className={props.isOn ? '' : s.off}>
        off
      </button>
      <span className={`${s.dot} ${props.isOn ? s.on : s.off}`}></span>
      {/* {on && <span className={`${s.on} ${s.dot}`}></span>}
      {!on && <span className={`${s.off} ${s.dot}`}></span>} */}
    </div>

    //   <div className="wrapper">
    //   <button className={props.isOn ? 'on' : ''}>on</button>
    //   <button className={props.isOn ? '' : 'off'}>off</button>
    //   {props.isOn && <span className="on dot"></span>}
    //   {!props.isOn && <span className="off dot"></span>}
    //   {/* <span className={props.isOn ? 'dot on' : 'dot off'}></span> */}
    // </div>
  )
}
