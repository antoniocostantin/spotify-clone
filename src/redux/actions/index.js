export const GET_SONGS = 'GET_SONGS'

const URL = 'https://striveschool-api.herokuapp.com/api/deezer/search?q='

export const getSongsAction = (query) => {
    return async (dispatch) => {
      try {
        const response = await fetch(URL + query )
        if (response.ok) {
          const { data } = await response.json()
          dispatch({
            type: GET_SONGS,
            payload: data,
          })
        } else {
          alert('Error fetching results')
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
  