import React from 'react'

const ScreeningDetails = ({movie, screening}) => {
    const allSeats = screening.room.rows * screening.room.seatsPerRow
    const availableSeats = allSeats - screening.bookings.length

    return (
        <div className="grid grid-cols-2 h-fit mr-2.5 mb-2.5">
            <h3 className="text-lg text-left mt-1 mb-1 ml-2.5">Movie</h3>
            <p className="text-md text-right m-auto mr-2.5">{movie.title}</p>
            <h3 className="text-lg text-left mt-1 mb-1 ml-2.5">Day</h3>
            <p className="text-md text-right m-auto mr-2.5">{screening.weekday}</p>
            <h3 className="text-lg text-left mt-1 mb-1 ml-2.5">Start time</h3>
            <p className="text-md text-right m-auto mr-2.5">{screening.start_time}</p>
            <h3 className="text-lg text-left mt-1 mb-1 ml-2.5">Duration</h3>
            <p className="text-md text-right m-auto mr-2.5">{movie.duration} minutes</p>
        </div>
    )
}

export default ScreeningDetails
