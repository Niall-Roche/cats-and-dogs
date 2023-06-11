import GifList from '../components/list/GifList'
import Switch from '../components/switch/Switch'
import useCatsAndDogs from '../hooks/useCatsAndDogs'
import usePagination from '../hooks/usePagination'

const Gifs = () => {
  const {toggle} = useCatsAndDogs()
  const {setOffset, setPage} = usePagination()

  return (
    <div className='d-flex flex-col align-items-center'>
      <Switch
        className='mb-1'
        onChange={() => {
          toggle()
          setOffset(0)
          setPage(0)
        }}
      />
      <GifList />
    </div>
  )
}

export default Gifs