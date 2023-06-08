import {createContext, useContext, useState} from 'react'

const CatsAndDogsContext = createContext()

const useCatsAndDogs = () => useContext(CatsAndDogsContext)

// eslint-disable-next-line react/prop-types
export const CatsAndDogsProvider = ({children}) => {
  const [value, setValue] = useState('cats')

  return (
    <CatsAndDogsContext.Provider value={{value, setValue}}>
      {children}
    </CatsAndDogsContext.Provider>
  )
}

export default useCatsAndDogs