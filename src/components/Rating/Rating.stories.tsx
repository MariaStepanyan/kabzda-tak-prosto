import { Rating, RatingValueType } from './Rating'
import { useState } from 'react'

export default {
  component: Rating,
}

export const NoRating = () => {
  return <Rating value={0} setRatingValue={() => {}} />
}
export const Rating1 = () => {
  return <Rating value={1} setRatingValue={() => {}} />
}
export const Rating2 = () => {
  return <Rating value={2} setRatingValue={() => {}} />
}
export const Rating3 = () => {
  return <Rating value={3} setRatingValue={() => {}} />
}
export const Rating4 = () => {
  return <Rating value={4} setRatingValue={() => {}} />
}
export const Rating5 = () => {
  return <Rating value={5} setRatingValue={() => {}} />
}

export const RatingChange = () => {
  const [rating, setRating] = useState<RatingValueType>(0)
  return <Rating value={rating} setRatingValue={setRating} />
}
