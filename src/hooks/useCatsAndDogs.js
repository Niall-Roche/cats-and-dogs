import {createContext, useContext, useState} from 'react'
import {CATS_QUERY} from '../constants/staticStrings'

const CatsAndDogsContext = createContext()

const useCatsAndDogs = () => useContext(CatsAndDogsContext)

// eslint-disable-next-line react/prop-types
export const CatsAndDogsProvider = ({children}) => {
  const [value, setValue] = useState(CATS_QUERY)

  return (
    <CatsAndDogsContext.Provider value={{value, setValue}}>
      {children}
    </CatsAndDogsContext.Provider>
  )
}

export default useCatsAndDogs