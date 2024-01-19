import { useState } from 'react'

type RatingPropsType = {
  // value: 0 | 1 | 2 | 3 | 4 | 5
}

export function UnControlledRating(props: RatingPropsType) {
  console.log('Rating rendering')

  const [value, setValue] = useState(0)

  return (
    <div>
      <Star selected={value > 0} onClickhandler={() => setValue(1)} />
      <Star selected={value > 1} onClickhandler={() => setValue(2)} />
      <Star selected={value > 2} onClickhandler={() => setValue(3)} />
      <Star selected={value > 3} onClickhandler={() => setValue(4)} />
      <Star selected={value > 4} onClickhandler={() => setValue(5)} />
    </div>
  )
}

type StarPropsType = {
  selected: boolean
  onClickhandler: () => void
}

function Star(props: StarPropsType) {
  console.log('Star rendering')

  return props.selected ? (
    <span>
      <b> star </b>
    </span>
  ) : (
    <span onClick={props.onClickhandler}>star </span>
  )
}
