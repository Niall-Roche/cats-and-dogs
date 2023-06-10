import GifList from '../components/list/GifList'
import Switch from '../components/switch/Switch'

const Gifs = () => {
  return (
    <div className='d-flex flex-col align-items-center'>
      <Switch className='mb-1' />
      <GifList />
    </div>
  )
}

export default Gifs