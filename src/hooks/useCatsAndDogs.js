import {createContext, useContext, useState} from 'react'
import {CATS_QUERY, DOGS_QUERY} from '../constants/staticStrings'
import {Howl} from 'howler'
import meow from '../assets/sounds/meow.mp3'
import woof from '../assets/sounds/woof.mp3'

const meowSound = new Howl({src: [meow]})
const woofSound = new Howl({src: [woof]})

const CatsAndDogsContext = createContext()

const useCatsAndDogs = () => useContext(CatsAndDogsContext)

// eslint-disable-next-line react/prop-types
export const CatsAndDogsProvider = ({children}) => {
  const [value, setValue] = useState(CATS_QUERY)

  const toggle = () => {
    const newVal = value === CATS_QUERY ? DOGS_QUERY : CATS_QUERY
    const sound = newVal === CATS_QUERY ? meowSound : woofSound
    setValue(newVal)
    sound.play()
  }

  return (
    <CatsAndDogsContext.Provider value={{value, toggle}}>
      {children}
    </CatsAndDogsContext.Provider>
  )
}

export default useCatsAndDogs