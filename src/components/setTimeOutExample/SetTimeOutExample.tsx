import { FC, useEffect, useState } from 'react'
import { AnalogCounter } from './AnalogClock'

type SetTimeOutExamplePropsType = {
  viewMode: boolean
}

const addNumberNull = (num: number) => (num < 10 ? '0' + num : num)

export const SetTimeOutExample: FC<SetTimeOutExamplePropsType> = ({
  viewMode,
}) => {
  let [dateTime, setDateTime] = useState(new Date())

  useEffect(() => {
    const intervalID = setInterval(() => {
      setDateTime(new Date())
    }, 1000)
    return () => {
      clearInterval(intervalID)
    }
  }, [])

  if (viewMode) {
    return (
      <>
        <span>{addNumberNull(dateTime.getHours())}</span>:
        <span>{addNumberNull(dateTime.getMinutes())}</span>:
        <span>{addNumberNull(dateTime.getSeconds())}</span>
      </>
    )
  }
  return <AnalogCounter dateTime={dateTime} />
}
