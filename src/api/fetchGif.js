import axios from 'axios'

export default async function (id) {
  try {
    const resp = await axios
      .get(`https://api.giphy.com/v1/gifs/${id}`, {
        params: {
          api_key: process.env.REACT_APP_GIPHY_API_KEY,
          gif_id: id,
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