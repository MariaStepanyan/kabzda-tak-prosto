import React from 'react'

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
  value: RatingValueType
  setRatingValue: (ratingValue: RatingValueType) => void
}

const Star = React.memo(StarSecret)


export function RatingSecret(props: RatingPropsType) {
  return (
    <div>
      <Star selected={props.value > 0} value={1} setRatingValue={props.setRatingValue}/>
      <Star selected={props.value > 1} value={2} setRatingValue={props.setRatingValue}/>
      <Star selected={props.value > 2} value={3} setRatingValue={props.setRatingValue}/>
      <Star selected={props.value > 3} value={4} setRatingValue={props.setRatingValue}/>
      <Star selected={props.value > 4} value={5} setRatingValue={props.setRatingValue}/>
    </div>
  )
}

type StarPropsType = {
  selected: boolean
  value: RatingValueType
  setRatingValue: (value: RatingValueType) => void
}

function StarSecret(props: StarPropsType) {
  return (
    <span
      onClick={() => {
        props.setRatingValue(props.value)
      }}
    >
      {props.selected ? <b>star </b> : 'star '}
    </span>
  )
}
