import { FC } from 'react'
import s from './analogClock.module.css'

type AnalogCounterPropsType = {
  dateTime: Date
}

export const AnalogCounter: FC<AnalogCounterPropsType> = ({ dateTime }) => {
  const hr = dateTime.getHours()
  const min = dateTime.getMinutes()
  const sec = dateTime.getSeconds()
  const hr_rotation = 30 * hr + min / 2 //converting current time
  const min_rotation = 6 * min
  const sec_rotation = 6 * sec
  return (
    <div className={s.clockContainer}>
      <div
        className={s.hour}
        style={{ transform: `rotate(${hr_rotation}deg)` }}
      ></div>
      <div
        className={s.minute}
        style={{ transform: `rotate(${min_rotation}deg)` }}
      ></div>
      <div
        className={s.second}
        style={{ transform: `rotate(${sec_rotation}deg)` }}
      ></div>
    </div>
  )
}
