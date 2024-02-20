import { RatingSecret, RatingValueType } from './Rating'
import { useState } from 'react'

export default {
  component: RatingSecret,
}

export const NoRating = () => {
  return <RatingSecret value={0} setRatingValue={() => {}} />
}
export const Rating1 = () => {
  return <RatingSecret value={1} setRatingValue={() => {}} />
}
export const Rating2 = () => {
  return <RatingSecret value={2} setRatingValue={() => {}} />
}
export const Rating3 = () => {
  return <RatingSecret value={3} setRatingValue={() => {}} />
}
export const Rating4 = () => {
  return <RatingSecret value={4} setRatingValue={() => {}} />
}
export const Rating5 = () => {
  return <RatingSecret value={5} setRatingValue={() => {}} />
}

export const RatingChange = () => {
  const [rating, setRating] = useState<RatingValueType>(0)
  return <RatingSecret value={rating} setRatingValue={setRating} />
}
