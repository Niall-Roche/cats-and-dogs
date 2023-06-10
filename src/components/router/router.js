import {createBrowserRouter} from 'react-router-dom'
import Gifs from '../../pages/Gifs'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Gifs />,
    },
  ]
)

export default router