import React from 'react'
import './onoff.css'

type OnOffPropsType = {
  isOn: boolean
}

export const OnOff = (props: OnOffPropsType) => {
  return (
    <div className="wrapper">
      <button className={props.isOn ? 'on' : ''}>on</button>
      <button className={props.isOn ? '' : 'off'}>off</button>
      {props.isOn && <span className="on dot"></span>}
      {!props.isOn && <span className="off dot"></span>}
      {/* <span className={props.isOn ? 'dot on' : 'dot off'}></span> */}
    </div>
  )
}
