import  {UnControlledOnOff} from './UnControlledOnOff'

export default {
  component: UnControlledOnOff,
}

export const OnOffUncontrolled = () => {
  return <UnControlledOnOff onChange={()=>{}}/>
}