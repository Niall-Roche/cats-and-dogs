import * as RadixSwitch from '@radix-ui/react-switch'
import {styled} from 'styled-components'
import {CAT_EMOJI, DOG_EMOJI} from '../../constants/images'
import useCatsAndDogs from '../../hooks/useCatsAndDogs'
import {CATS_QUERY, DOGS_QUERY} from '../../constants/staticStrings'

const SwitchRoot = styled(RadixSwitch.Root)`
  cursor: pointer;
  width: 90px;
  height: 46px;
  padding: 0;
  background-color: #b7f4f8;
  border-radius: 100px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  border: 2px solid #7e7e7e;

  &[data-state='checked'] {
    background-color: #b7f4f8;
  }
`

const SwitchThumb = styled(RadixSwitch.Thumb)`
  display: block;
  width: 37px;
  height: 37px;
  background-color: white;
  border-radius: 9999px;
  transition: transform 150ms;
  transform: translateX(3px);
  border: 1px solid #1e1e1e;

  &[data-state='checked'] {
    transform: translateX(44px);
  }
`

const SwitchImg = styled.img`
  margin-top: 5px;
`

const Switch = () => {
  const {value, setValue} = useCatsAndDogs()

  return (
    <SwitchRoot onCheckedChange={() => setValue(value === CATS_QUERY ? DOGS_QUERY : CATS_QUERY)}>
      <SwitchThumb>
        <SwitchImg height={30} width={30} src={value === CATS_QUERY ? CAT_EMOJI : DOG_EMOJI} />
      </SwitchThumb>
    </SwitchRoot>
  )
}

export default Switch