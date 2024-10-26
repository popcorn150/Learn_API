import React from 'react'
import '../App.css'

const MovieList = (props) => {
  const imgContainerWidth = {
    width: '300px'
  }

  const FavouriteComponent = props.favouriteComponent
  return (
    <>
      {props.movies.map((movie, index) =>
        <div style={imgContainerWidth} className='image-container d-flex justify-content-start m-3'>
          <img src={movie.Poster} alt="movie" />
          <div className='overlay d-flex align-items-center justify-content-center'>
            <FavouriteComponent />
          </div>
        </div>
      )}
    </>
  )
}

export default MovieList