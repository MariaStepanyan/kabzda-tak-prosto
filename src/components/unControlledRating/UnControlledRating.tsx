import { useState } from 'react'

type RatingPropsType = {
  // value: 0 | 1 | 2 | 3 | 4 | 5
}

export function UnControlledRating(props: RatingPropsType) {
  const [value, setValue] = useState(0)

  return (
    <div>
      {/* <Star selected={value > 0} onClick={() => setValue(1)} />
      <Star selected={value > 1} onClick={() => setValue(2)} />
      <Star selected={value > 2} onClick={() => setValue(3)} />
      <Star selected={value > 3} onClick={() => setValue(4)} />
      <Star selected={value > 4} onClick={() => setValue(5)} /> */}
      <Star selected={value > 0} setValue={setValue} value={1} />
      <Star selected={value > 1} setValue={setValue} value={2} />
      <Star selected={value > 2} setValue={setValue} value={3} />
      <Star selected={value > 3} setValue={setValue} value={4} />
      <Star selected={value > 4} setValue={setValue} value={5} />
    </div>
  )
}

type StarPropsType = {
  selected: boolean
  // onClick: () => void
  setValue: (value: 1 | 2 | 3 | 4 | 5) => void
  value: 1 | 2 | 3 | 4 | 5
}

function Star(props: StarPropsType) {
  console.log('Star rendering')

  return (
    // <span onClick={props.onClick}>
    <span onClick={() => props.setValue(props.value)}>
      {props.selected ? <b>star </b> : 'star '}
    </span>
  )
}
