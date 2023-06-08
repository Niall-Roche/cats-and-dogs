import axios from 'axios'
import {CATS_QUERY} from '../constants/staticStrings'

export default async function (q = CATS_QUERY) {
  try {
    const resp = await axios
      .get('https://api.giphy.com/v1/gifs/search', {
        params: {
          api_key: process.env.REACT_APP_GIPHY_API_KEY,
          q,
          limit: 25,
        },
      })

    if (!!resp?.data) {
      return resp?.data
    }
  }
  catch (e) {
    return Promise.reject(e)
  }
}