export const GET_SONGS = 'GET_SONGS'
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE'
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE'

export const addToFavouriteAction = (track) => ({
    type: ADD_TO_FAVOURITE,
    payload: track,
  })
  
  export const removeFromFavouriteAction = (track) => ({
    type: REMOVE_FROM_FAVOURITE,
    payload: track,
  })
  

const URL = 'https://striveschool-api.herokuapp.com/api/deezer/search?q='

export const getSongsAction = (query) => {
    return async (dispatch) => {
      try {
        const response = await fetch(URL + query )
        if (response.ok) {
          const { data } = await response.json()
          console.log ('DATA', data)
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

  
export const GET_ARTIST = 'GET_ARTIST'

const artistURL = 'https://striveschool-api.herokuapp.com/api/deezer/album/'

export const geTArtistAction = (query) => {
    return async (dispatch) => {
      try {
        const response = await fetch(artistURL + query )
        if (response.ok) {
          const data = await response.json()
          console.log ('DATA', data)
          dispatch({
            type: GET_ARTIST,
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
  