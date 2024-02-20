import React, { useState } from 'react'
import s from './unControlledOnoff.module.css'

type OnOffPropsType = {
    onChange: (isOn: boolean) => void
  
}

export const UnControlledOnOffSecret = (props: OnOffPropsType) => {
  const [on, setOn] = useState(false)
  const onClickOnHandler = () => {
    setOn(true)
    props.onChange(true)
  }

  const onClickOffHandler = () => {
    setOn(false)
    props.onChange(false)
  }
  return (
    <div className={s.wrapper}>
      <button onClick={onClickOnHandler}  className={on ? s.on : ''}>
        on
      </button>
      <button onClick={onClickOffHandler} className={on ? '' : s.off}>
        off
      </button>
      <span className={`${s.dot} ${on ? s.on : s.off}`}></span>
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
