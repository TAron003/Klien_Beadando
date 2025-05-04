import React from 'react'

const Movies = ({movies, day, images, setSelectedMovie, setSelectedScreening}) => {
    const screenedMovies = movies.filter(
        movie => movie.screenings.some(screening => screening.weekday == day)
    )
    const handleClick = (movieID) => {
        setSelectedMovie(movieID)
        setSelectedScreening(-1)
    }

    return (
        <div id="movieCards" className="grid grid-cols-3 w-1/1 h-fit">
            {
                screenedMovies.map(movie => 
                    <div key={movie.id - 1} id={`movie${movie.id - 1}`} onClick={() => handleClick(movie.id - 1)} className="grid grid-cols-1 m-auto mt-2.5 mb-2.5 p-2.5 rounded-xl bg-slate-700 w-45">
                        <img src={images[movie.id - 1]} className="rounded-xl h-50 m-auto mt-2.5 mb-2.5"/>
                        <div className="grid grid-cols-1">
                            <p>{movie.title}</p>
                            <div className="grid grid-cols-2">
                                <aside>{movie.genre}</aside>
                                <aside>{`${movie.duration} mins`}</aside>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Movies
