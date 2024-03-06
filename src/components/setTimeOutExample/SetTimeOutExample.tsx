import { useEffect, useState } from 'react'

export const SetTimeOutExample = () => {
  //   const date = new Date()
  //   const mlseconds = date.getMilliseconds()
  //   let [counter, setCounter] = useState(mlseconds)
  let [counter, setCounter] = useState(new Date())

  //   useEffect(() => {
  //     setInterval(() => {

  //       setCounter((state) => (state < 59 ? state + 1 : 0))
  //     }, 1000)
  //   }, [])

  useEffect(() => {
    setInterval(() => {
      setCounter((state) => (state = new Date()))
    }, 1000)
  }, [])

  //   return <>Hello Counter {counter}</>
  return (
    <>
      Hello Counter{' '}
      {`${counter.getHours()}:${counter.getMinutes()}:${counter.getSeconds()}`}
    </>
  )
}
