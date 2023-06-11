import {createBrowserRouter} from 'react-router-dom'
import Gifs from '../../pages/Gifs'
import Gif from '../../pages/Gif'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Gifs />,
    },
    {
      path: '/:id',
      element: <Gif />,
    },
  ]
)

export default router