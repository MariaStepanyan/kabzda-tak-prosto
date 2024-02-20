import { UnControlledOnOff } from '../../App'
import  {UnControlledOnOffSecret} from './UnControlledOnOff'

export default {
  component: UnControlledOnOffSecret,
}

export const OnOffUncontrolled = () => {
  return <UnControlledOnOff onChange={()=>{}}/>
}