import { UnControlledRating } from '../../App'
import { UnControlledRatingSecret } from './UnControlledRating'

export default {
  component: UnControlledRatingSecret,
}

export const RatingUncontrolled = () => {
  return <UnControlledRating value={0} />
}
