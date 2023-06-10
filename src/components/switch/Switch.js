import {string} from 'prop-types'
import * as RadixSwitch from '@radix-ui/react-switch'
import {styled} from 'styled-components'
import {CAT_EMOJI, DOG_EMOJI} from '../../constants/images'
import useCatsAndDogs from '../../hooks/useCatsAndDogs'
import {CATS_QUERY, DOGS_QUERY} from '../../constants/staticStrings'

const propTypes = {
  className: string,
}

const defaultProps = {
  className: '',
}

const SwitchRoot = styled(RadixSwitch.Root)`
  cursor: pointer;
  width: 90px;
  height: 46px;
  padding: 0;
  background-color: ${props => props?.theme?.accent};
  border-radius: 100px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  border: 2px solid ${props => props?.theme?.primary};

  &[data-state='checked'] {
    background-color: ${props => props?.theme?.accent};
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

const Switch = ({className}) => {
  const {value, toggle} = useCatsAndDogs()

  const switchImages = [
    {
      className: value === CATS_QUERY ? '' : 'd-none',
      src: CAT_EMOJI,
    },
    {
      className: value === DOGS_QUERY ? '' : 'd-none',
      src: DOG_EMOJI,
    },
  ]

  return (
    <SwitchRoot className={className} onCheckedChange={toggle}>
      <SwitchThumb>
        {
          switchImages
            ?.map(
              (image, i) => (
                <SwitchImg
                  key={i}
                  className={image?.className}
                  height={30}
                  width={30}
                  src={image?.src}
                />
              ))
        }
      </SwitchThumb>
    </SwitchRoot>
  )
}

Switch.propTypes = propTypes
Switch.defaultProps = defaultProps

export default Switch